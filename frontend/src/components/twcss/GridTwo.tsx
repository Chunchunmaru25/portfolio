import React from "react";
import useTheme from "../hooks/useTheme";
import type { ReactNode } from "react";

interface GridTwoProps {
    maxWidth?: string;
    flexPortion?: [string, string];
    children?: ReactNode;
    className?: string;
    borderLeft?: string;
    borderRight?: string;
}

const GridTwo = ({
    maxWidth = "80%",
    flexPortion = ["1fr", "1fr"],
    children,
    className = "",
    borderLeft = "",
    borderRight = "",
}: GridTwoProps) => {
    const isDarkMode = useTheme();
    const [leftContent, rightContent] = React.Children.toArray(children);

    const leftFlex = parseFloat(String(flexPortion[0]).replace("fr", "")) || 1;
    const rightFlex = parseFloat(String(flexPortion[1]).replace("fr", "")) || 5;

    return (
        <section
            id="about"
            className={`py-20 overflow-hidden ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"}`}
        >
            <div
                className={`mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
                style={{ maxWidth }}
            >
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">

                    {/* Left Column */}
                    <div className={`w-full ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"}`} style={{ flex: leftFlex }}>
                        <div className={`relative p-8 overflow-hidden flex flex-col h-full ${borderLeft} `}>
                            {leftContent}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className={`w-full ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"}`} style={{ flex: rightFlex }}>
                        <div className={`relative p-8 overflow-hidden flex flex-col h-full ${borderRight}`}>
                            {rightContent}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GridTwo;