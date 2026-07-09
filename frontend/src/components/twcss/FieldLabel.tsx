
export function FieldLabel({
    children,
    hint,
}: {
    children: React.ReactNode;
    hint?: string;
}) {
    return (
        <div className="mb-2 flex items-baseline justify-between">
            <label className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8B93A7]">
                {children}
            </label>
            {hint && (
                <span className="font-mono text-[10px] text-[#4B5468]">{hint}</span>
            )}
        </div>
    );
}

{/* <FieldLabel hint="pick or add your own">
    <span className="inline-flex items-center gap-1.5">
        <Layers size={11} /> Project stacks
    </span>
</FieldLabel> */}