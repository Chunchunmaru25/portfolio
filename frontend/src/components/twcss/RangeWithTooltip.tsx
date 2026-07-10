type RangeProps = {
    language: string;
    description: string;
    progress: string;
    margin?: string;
};

export default function RangeProgressWTooltip({
    language,
    description,
    progress,
    margin = "mb-6",
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
                <div
                    className="
                        mt-[10px]
                        max-h-0
                        overflow-hidden
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:max-h-24
                        group-hover:opacity-100
                    "
                >
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            )}
        </div>
    );
}