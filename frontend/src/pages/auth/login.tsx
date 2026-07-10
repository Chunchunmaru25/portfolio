import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import LoginServices from "../../components/services/auth/Login";
import useTheme from "../../components/hooks/useTheme";
import { WebRoute } from "../../routes/web.route";
import type { AuthLoginProps } from "../../components/path/interface";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import AuthShell from "./authShell";
import { getErrorMessage } from "../../components/path/interfaces/dataTypes";

export default function Login({
    modal = false,
    className = "",
    trigger,
    open,
    onOpenChange,
}: AuthLoginProps) {
    const isDarkMode = useTheme();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);
        try {
            const response = await LoginServices(email, password);
            if (response.status === "error") {
                toast.error(response.message);
            }
            toast.success(response.message);
            navigate(`${WebRoute.CONTROL_PANEL}`);
        } catch (err) {
            const message = getErrorMessage(err);
            toast.error(message);
            setError(message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthShell
            modal={modal}
            className={className}
            trigger={trigger}
            open={open}
            onOpenChange={onOpenChange}
            title="Admin access"
            subtitle="Sign in to manage projects, profile, and stack data."
        >
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <Label
                        htmlFor="login-email"
                        className={`mb-1.5 block text-xs font-medium uppercase tracking-wide`}>
                        Email
                    </Label>
                    <Input
                        id="login-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                        placeholder="you@domain.com"
                        className={`w-full rounded-lg border border-[#1A1F2B] px-3.5 py-2.5 text-sm  outline-none transition-colors focus:border-[#5B8DEF] focus:ring-1 focus:ring-[#5B8DEF]`}
                    />
                </div>

                <div>
                    <div className="mb-1.5 flex items-center justify-between">
                        <Label
                            htmlFor="login-password"
                            className={`className="block text-xs font-medium uppercase tracking-wide`}>
                            Password
                        </Label>
                        <a href="/forgot-password" className="text-xs text-[#5B8DEF] hover:text-[#5B8DEF]/80">
                            Forgot?
                        </a>
                    </div>
                    <div className="relative">
                        <Input
                            id="login-password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                            placeholder="••••••••"
                            className={`w-full rounded-lg border border-[#1A1F2B] px-3.5 py-2.5 text-sm  outline-none transition-colors focus:border-[#5B8DEF] focus:ring-1 focus:ring-[#5B8DEF]`}
                        />
                        <Button
                            variant="ghost"
                            type="button"
                            onClick={() => setShowPassword((v) => !v)}
                            className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs ${isDarkMode ? "text-white/40" : "text-black/40"} hover:bg-inherit hover:text-inherit hover:shadow-none`}
                            tabIndex={-1}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </Button>
                    </div>
                </div>

                {error && (
                    <div className="rounded-lg border border-red-500/20 bg-red-500/5 px-3.5 py-2.5 text-xs text-red-400">
                        {error}
                    </div>
                )}
                <Button variant="outline"
                    type="submit"
                    disabled={isLoading}
                    className={`${isDarkMode
                        ? "bg-[#0A0A0A] text-white "
                        : "bg-gray-50 text-black"}flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm 
                    font-medium  transition-colors hover:bg-[#5B8DEF]/90 disabled:cursor-not-allowed disabled:opacity-50`}
                >
                    {isLoading ? (
                        <>
                            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Signing in…
                        </>
                    ) : (
                        "Sign in"
                    )}
                </Button>
            </form>
        </AuthShell>
    );
}