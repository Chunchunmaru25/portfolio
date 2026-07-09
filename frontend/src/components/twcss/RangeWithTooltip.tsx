
type RangeProps = {
    language: string,
    description: string,
    progress: string,
    margin?: string,
}
export default function RangeProgressWTooltip({
    language,
    description,
    progress,
    margin,
}: RangeProps) {
    return (
        <div className={`skill-item group ${margin}`}>
            <div className="flex justify-between items-center mb-2">
                <h4>{language}</h4>
                <span className="skill-percentage">{progress}%</span>
            </div>

            <div className="relative w-full h-2 rounded-full overflow-hidden bg-gray-200">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-[1500ms]"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {description && (
                <div className="min-h-6">
                    <div
                        className="
                            mt-2
                            text-sm
                            text-gray-500
                            opacity-0
                            max-h-0
                            overflow-hidden
                            transition-all
                            duration-300
                            group-hover:opacity-100
                            group-hover:max-h-96
                        "
                    >
                        {description}
                    </div>
                </div>
            )}
        </div>
    );
}