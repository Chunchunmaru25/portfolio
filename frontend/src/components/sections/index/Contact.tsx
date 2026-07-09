import React from "react";
import BorderGlow from "../../reactbits/BorderGlow";
import SpotlightCard from "../../reactbits/SpotlightCard";
import { Mail, Phone, } from 'lucide-react'
import GridTwo from "../../twcss/GridTwo";
import { facebookSvg, instagramSvg, tiktokSvg, githubSvg, linkinSvg } from '../../path/svgPath'
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import Input from "../../twcss/Input";
import usePersonal from "../../hooks/usePersonal";
import DecryptedText from "../../reactbits/DecryptedText";
import useTheme from "../../hooks/useTheme";
import { useInView } from "react-intersection-observer";
import { SkeletonText } from "../../reactbits/Skeleton";
const Contact = function () {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { data = [], loading } = usePersonal(inView);
    const isDarkMode = useTheme();
    return (
        <>
            <section ref={ref}>
                <GridTwo maxWidth="90%" flexPortion={["1fr", "2fr"]} className={isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"} borderRight="border border-gray-200 dark:border-neutral-700 rounded-3xl shadow-xl">
                    {/* LEFT */}
                    <div
                        className={`py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-0 ${isDarkMode
                            ? "bg-[#101010] text-white"
                            : "bg-white text-black"
                            }`}
                    >
                        <div className="flex flex-col gap-4">

                            <BorderGlow
                                edgeSensitivity={30}
                                glowColor="40 80 80"
                                backgroundColor="#FFFFF"
                                borderRadius={28}
                                glowRadius={40}
                                glowIntensity={1}
                                coneSpread={25}
                                animated={false}
                                colors={['#c084fc', '#f472b6', '#38bdf8']}
                            >
                                <div className="flex items-center gap-4 p-4">
                                    <SpotlightCard
                                        className="w-16 h-16 sm:w-20 sm:h-20 flex justify-center items-center border-black dark:border-white flex-shrink-0"
                                        spotlightColor="rgba(0, 229, 255, 0.2)"
                                    >
                                        <Mail className={`w-8 h-8 sm:w-10 sm:h-10 ${isDarkMode ? " text-white" : " text-black"}`} />
                                    </SpotlightCard>

                                    <div className="flex flex-col justify-center min-w-0">
                                        <b className="text-lg sm:text-xl">Send Email</b>
                                        <span className="italic break-all text-sm sm:text-base">
                                            {loading ? (
                                                <SkeletonText />
                                            ) : (`${data.find((person) => person.key === "email")?.value ?? "clarenceduerme40@gmail.com"}`
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </BorderGlow>

                            <BorderGlow
                                edgeSensitivity={30}
                                glowColor="40 80 80"
                                backgroundColor="#FFFFF"
                                borderRadius={28}
                                glowRadius={40}
                                glowIntensity={1}
                                coneSpread={25}
                                animated={false}
                                colors={['#c084fc', '#f472b6', '#38bdf8']}
                            >
                                <div className="flex items-center gap-4 p-4">
                                    <SpotlightCard
                                        className="w-16 h-16 sm:w-20 sm:h-20 flex justify-center items-center border-black dark:border-white flex-shrink-0"
                                        spotlightColor="rgba(0, 229, 255, 0.2)"
                                    >
                                        <Phone className={`w-8 h-8 sm:w-10 sm:h-10 ${isDarkMode ? " text-white" : " text-black"}`} />
                                    </SpotlightCard>

                                    <div className="flex flex-col justify-center min-w-0">
                                        <b className="text-lg sm:text-xl">Direct Contact</b>

                                        <span className="italic text-sm sm:text-base break-all">
                                            <div className="group inline-block">
                                                <div className="blur-sm transition-all duration-300 group-hover:blur-none">
                                                    <DecryptedText
                                                        text={data.find((person) => person.key === "phone")?.value ?? ''}
                                                        speed={30}
                                                        maxIterations={45}
                                                        characters="ABCD1234!?/*`"
                                                        animateOn="hover"
                                                    />
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </BorderGlow>

                            <BorderGlow
                                edgeSensitivity={30}
                                glowColor="40 80 80"
                                backgroundColor="#FFFFF"
                                borderRadius={28}
                                glowRadius={40}
                                glowIntensity={1}
                                coneSpread={25}
                                animated={false}
                                colors={['#c084fc', '#f472b6', '#38bdf8']}
                            >
                                <div className="flex justify-center items-center p-4">
                                    <div className="flex flex-col items-center gap-4 w-full">
                                        <b className="text-sm sm:text-base text-center">
                                            Follow My Journey
                                        </b>

                                        <div className="flex flex-wrap justify-center gap-3">
                                            <a href={data.find((person) => person.key === "email")?.value ??
                                                "https://www.facebook.com/clarence.duerme40"} target="_blank">
                                                <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                                                    <AvatarImage src={facebookSvg} />
                                                    <AvatarFallback>facebookSvg</AvatarFallback>
                                                </Avatar>
                                            </a>

                                            {/* https://www.instagram.com/moriii__pawsa */}
                                            <a href={data.find((person) => person.key === "email")?.value ??
                                                "https://www.instagram.com/moriii__pawsa"} target="_blank">
                                                <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                                                    <AvatarImage src={instagramSvg} />
                                                    <AvatarFallback>instagramSvg</AvatarFallback>
                                                </Avatar>
                                            </a>
                                            {/* https://www.tiktok.com/@sh1raase */}
                                            <a href={data.find((person) => person.key === "email")?.value ??
                                                "https://www.tiktok.com/@sh1raase"} target="_blank">
                                                <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                                                    <AvatarImage src={tiktokSvg} />
                                                    <AvatarFallback>tiktokSvg</AvatarFallback>
                                                </Avatar>
                                            </a>
                                            {/* https://github.com/Chunchunmaru25 */}
                                            <a href={data.find((person) => person.key === "email")?.value ??
                                                "https://github.com/Chunchunmaru25"} target="_blank">
                                                <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                                                    <AvatarImage src={githubSvg} />
                                                    <AvatarFallback>githubSvg</AvatarFallback>
                                                </Avatar>
                                            </a>
                                            {/* https://www.linkedin.com/in/keith-clarence-duerme-2232b4374 */}
                                            <a href={data.find((person) => person.key === "email")?.value ??
                                                "https://www.linkedin.com/in/keith-clarence-duerme-2232b4374"} target="_blank">
                                                <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                                                    <AvatarImage src={linkinSvg} />
                                                    <AvatarFallback>linkinSvg</AvatarFallback>
                                                </Avatar>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </BorderGlow>

                        </div>
                    </div >

                    {/* RIGHT */}
                    < div className={`flex flex-col text-center ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"} `
                    } >
                        <div className="flex flex-col">
                            <b className="text-2xl tracking-[5px] px-10 py-3">Send A Message</b>
                            <span>Whether you're looking to start a project, ask a question, or simply say hello, I'm just a message away. Let's build something great together.</span>
                        </div>
                        <Input />
                    </div >
                </GridTwo >
            </section>
        </>
    )
}

export default Contact;