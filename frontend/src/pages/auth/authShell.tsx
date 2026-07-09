import {
    useState,
    useEffect,
    useRef,
    cloneElement,
    isValidElement,
} from "react";
import type { ReactElement, ReactNode, HTMLAttributes, MouseEvent } from "react";
import { createPortal } from "react-dom";
import useTheme from "../../components/hooks/useTheme";

export interface AuthShellProps {
    modal?: boolean;
    className?: string;
    trigger?: ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    title: string;
    subtitle: string;
    children: ReactNode;
}

export default function AuthShell({
    modal = false,
    className = "",
    trigger,
    open: openProp,
    onOpenChange,
    title,
    subtitle,
    children,
}: AuthShellProps) {
    const isDarkMode = useTheme();
    const [openState, setOpenState] = useState(false);
    const isControlled = openProp !== undefined;
    const open = isControlled ? openProp : openState;

    const setOpen = (next: boolean) => {
        if (!isControlled) setOpenState(next);
        onOpenChange?.(next);
    };

    const [uptime, setUptime] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const id = setInterval(() => setUptime((u) => u + 1), 1000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        if (!modal || !open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [modal, open]);

    const formatUptime = (s: number) => {
        const m = Math.floor(s / 60).toString().padStart(2, "0");
        const sec = (s % 60).toString().padStart(2, "0");
        return `${m}:${sec}`;
    };

    const card = (
        <div
            ref={cardRef}
            role={modal ? "dialog" : undefined}
            aria-modal={modal ? true : undefined}
            className={`relative w-full max-w-[400px] ${className}`}
        >
            <div className="mb-6 flex items-center justify-between font-mono text-[11px] tracking-wide text-[#5B8DEF]/70">
                <div className="flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7FD9BB] opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7FD9BB]" />
                    </span>
                    <span>SYSTEM_ONLINE</span>
                </div>
                <span>{formatUptime(uptime)}</span>
            </div>

            <div className={`rounded-xl border border-[#1A1F2B] ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-gray-300 text-black"} p-8 shadow-[0_0_0_1px_rgba(91,141,239,0.04)]`}>
                <div className="mb-8 flex items-start justify-between">
                    <div>
                        <div className={`mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[#1A1F2B] ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-gray-50 text-black"} font-mono text-sm font-semibold text-[#5B8DEF]`}>
                            &gt;_
                        </div>
                        <h1 className={`text-lg font-semibold  ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-gray-300 text-black"}`}>{title}</h1>
                        <p className={`mt-1 text-sm  ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-gray-300 text-black"}`}>{subtitle}</p>
                    </div>

                    {modal && (
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Close"
                            className="rounded-md p-1 text-white/30 transition-colors hover:bg-white/5 hover:text-white/70"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                    )}
                </div>

                {children}
            </div>

            <p className="mt-6 text-center font-mono text-[11px] text-white/20">
                portfolio-admin · {import.meta.env.VITE_APP_VERSION}
            </p>
        </div>
    );

    if (!modal) {
        return (
            <div className={`relative flex min-h-screen items-center justify-center overflow-hidden px-6 ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-gray-50 text-black"}`}>
                <GridBackdrop />
                {card}
            </div>
        );
    }

    const triggerEl =
        isValidElement(trigger) && typeof document !== "undefined"
            ? cloneElement(trigger as ReactElement<HTMLAttributes<HTMLElement>>, {
                onClick: (e: MouseEvent) => {
                    (trigger as ReactElement<HTMLAttributes<HTMLElement>>).props.onClick?.(e as never);
                    setOpen(true);
                },
            })
            : trigger;

    return (
        <>
            {triggerEl}
            {open &&
                typeof document !== "undefined" &&
                createPortal(
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 px-6 py-10 backdrop-blur-sm"
                        onMouseDown={(e) => {
                            if (e.target === e.currentTarget) setOpen(false);
                        }}
                    >
                        {card}
                    </div>,
                    document.body
                )}
        </>
    );
}

function GridBackdrop() {
    return (
        <>
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage:
                        "linear-gradient(#5B8DEF 1px, transparent 1px), linear-gradient(90deg, #5B8DEF 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
            <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[#5B8DEF]/20 blur-[100px]" />
        </>
    );
}