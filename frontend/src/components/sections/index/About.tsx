import {
    Mail, Phone, MapPin, Download,
    CheckCircle, MessageCircleMore
} from "lucide-react";
import { togaImg } from "../../path/imagesPath";
import ContainedBtn from "../../uiverse/ContainedBtn";
import OutlinedBtn from "../../uiverse/OutlinedBtn";
import useTheme from "../../hooks/useTheme";
import usePersonal from "../../hooks/usePersonal";
import { personalValue, personalNumber } from "../../path/interfaces/dataTypes";
import DecryptedText from "../../reactbits/DecryptedText";
import CountUp from "../../reactbits/CountUp";
import { SkeletonImage, SkeletonText, SkeletonNumber } from "../../reactbits/Skeleton";
import { useInView } from "react-intersection-observer";
export default function About() {
    const isDarkMode = useTheme();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { data = [], loading } = usePersonal(inView);
    return (
        <>
            <div className={`grid lg:grid-cols-2 gap-10 items-start `} ref={ref}>
                <div>
                    <div className={`relative ${isDarkMode ? "bg-gradient-to-br from-[#080808] to-[#080808]" : "bg-gradient-to-br from-white to-gray-100"} dark:from-neutral-800 dark:to-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-3xl p-8 text-center shadow-xl overflow-hidden`}>

                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />

                        <div className="relative mb-6">
                            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
                                {loading ? (
                                    <SkeletonImage />
                                ) : (
                                    <img
                                        src={togaImg}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                            <div className="absolute bottom-4 right-[calc(50%-60px)] w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center border-4 border-white dark:border-neutral-900">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                        </div>

                        <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${isDarkMode ? " text-white" : "text-gray-900"}`}>
                            {loading ? (
                                <SkeletonText />
                            ) : (
                                `${data.find((p) => p.key === 'firstname')?.value ?? "Clarence"}${data.find((p) => p.key === 'firstname')?.value ?? "Duerme"}`
                            )}

                        </h3>
                        <div className="text-indigo-500 mb-6">
                            {loading ? (
                                <SkeletonText />
                            ) : (
                                `${data.find((person) => person.key === "title")?.value ?? 'Software Developer'}`
                            )}
                        </div>


                        <div className="flex flex-col gap-3">
                            {/* Email */}
                            <a
                                href={`mailto:${data.find((person) => person.key === "email")?.value ?? "clarenceduerme40@gmail.com"}`}
                                className={`flex items-center gap-3 p-3 rounded-lg border text-sm transition-all duration-300
            ${isDarkMode
                                        ? "bg-gradient-to-br from-[#080808] to-[#080808] hover:from-indigo-500 hover:to-indigo-600 border-neutral-700 text-white"
                                        : "bg-gradient-to-br from-white to-gray-100 hover:from-indigo-500 hover:to-indigo-600 border-gray-200 text-black"
                                    }`}
                            >
                                <Mail size={16} />
                                {loading ? (
                                    <SkeletonText className="h-4 w-56" />
                                ) : (
                                    data.find((person) => person.key === "email")?.value ??
                                    "clarenceduerme40@gmail.com"
                                )}
                            </a>

                            {/* Phone */}
                            <a
                                href={`tel:${data.find((person) => person.key === "phone")?.value}`}
                                className={`flex items-center gap-3 p-3 rounded-lg border text-sm transition-all duration-300
                                    ${isDarkMode
                                        ? "bg-gradient-to-br from-[#080808] to-[#080808] hover:from-indigo-500 hover:to-indigo-600 border-neutral-700 text-white"
                                        : "bg-gradient-to-br from-white to-gray-100 hover:from-indigo-500 hover:to-indigo-600 border-gray-200 text-black"
                                    }`}
                            >
                                <Phone size={16} />
                                {loading ? (
                                    <SkeletonText className="h-4 w-36" />
                                ) : (
                                    <div className="group inline-block">
                                        <div className="blur-sm transition-all duration-300 group-hover:blur-none">
                                            <DecryptedText
                                                text={personalValue(data, "phone")}
                                                speed={30}
                                                maxIterations={45}
                                                characters="ABCD1234!?/*`"
                                                animateOn="hover"
                                            />
                                        </div>
                                    </div>
                                )}
                            </a>

                            {/* Address */}
                            <a
                                href="https://www.google.com/maps/place/..."
                                className={`flex items-center gap-3 p-3 rounded-lg border text-sm transition-all duration-300
            ${isDarkMode
                                        ? "bg-gradient-to-br from-[#080808] to-[#080808] hover:from-indigo-500 hover:to-indigo-600 border-neutral-700 text-white"
                                        : "bg-gradient-to-br from-white to-gray-100 hover:from-indigo-500 hover:to-indigo-600 border-gray-200 text-black"
                                    }`}
                            >
                                <MapPin size={16} />
                                {loading ? (
                                    <SkeletonText className="h-4 w-64" />
                                ) : (
                                    `${data.find((p) => p.key === "barangay")?.value ?? "Mamatid"}, ${data.find((p) => p.key === "city")?.value ?? "Cabuyao"
                                    }, ${data.find((p) => p.key === "province")?.value ?? "Laguna"}, ${data.find((p) => p.key === "country")?.value ?? "Philippines"
                                    }`
                                )}
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mb-6">
                        <span className="inline-block px-4 py-1 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4">
                            Get to Know Me
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Passionate About Website Development
                        </h2>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-8">
                        <p>
                            I’m a detail-oriented developer dedicated to building modern,
                            responsive websites that prioritize user experience and
                            functionality.
                        </p>
                        <p>
                            Whether it’s creating a portfolio, business site, or web app, I
                            focus on performance, accessibility, and visual appeal. I thrive
                            in both collaborative and freelance settings.
                        </p>
                    </div>

                    <div
                        className={`grid grid-cols-2 gap-6 mb-8 p-6 rounded-2xl shadow
        ${isDarkMode
                                ? "bg-gradient-to-br from-[#080808] to-[#080808] border-neutral-700 text-white"
                                : "bg-gradient-to-br from-white to-gray-100 border-gray-200 text-black"
                            }`}
                    >
                        {/* Projects */}
                        <div className="text-center">
                            <div className="text-2xl font-bold text-indigo-500">
                                {loading ? (
                                    <SkeletonNumber className="h-8 w-20 mx-auto" />
                                ) : (
                                    <CountUp
                                        from={0}
                                        to={personalNumber(data, "projectscompleted")}
                                        separator=","
                                        direction="up"
                                        duration={2}
                                    />
                                )}
                            </div>
                            <div className="text-sm text-gray-500">
                                Projects Completed
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="text-center">
                            <div className="text-2xl font-bold text-indigo-500">
                                {loading ? (
                                    <SkeletonNumber className="h-8 w-16 mx-auto" />
                                ) : (
                                    <CountUp
                                        from={0}
                                        to={personalNumber(data, "yearsexperience")}
                                        separator=","
                                        direction="up"
                                        duration={2}
                                    />
                                )}
                            </div>
                            <div className="text-sm text-gray-500">
                                Years Experience
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 mb-8">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <span className="text-sm text-gray-400">Specialization</span>
                                <div className="font-semibold text-gray-800 dark:text-white">
                                    {loading ? (
                                        <SkeletonText />
                                    ) : (
                                        `${data.find((person) => person.key === "specialization")?.value ?? 'Software Development'}`
                                    )}
                                </div>
                            </div>
                            <div>
                                <span className="text-sm text-gray-400">
                                    Experience Level
                                </span>
                                <p className="font-semibold text-gray-800 dark:text-white">
                                    Entry Level
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <span className="text-sm text-gray-400">Education</span>
                                <p className="font-semibold text-gray-800 dark:text-white">
                                    Bachelor of Science in Computer Science
                                </p>
                            </div>
                            <div>
                                <span className="text-sm text-gray-400">Languages</span>
                                <p className="font-semibold text-gray-800 dark:text-white">
                                    English, Tagalog
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        <a
                            href={''}
                            download
                        >
                            <ContainedBtn text="Download CV" icon={<Download />} />
                        </a>

                        <a
                            href="#contact"
                        >
                            <OutlinedBtn text="Let's Talk" icon={<MessageCircleMore />} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}