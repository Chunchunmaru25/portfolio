
import ProfileCard from "../../reactbits/ProfileCard";
import { TypingAnimation } from "../../ui/typing-animation";
import ContainedBtn from "../../uiverse/ContainedBtn";
import OutlinedBtn from "../../uiverse/OutlinedBtn";
import Lanyard from '../../reactbits/Lanyard';
import ScrollDown from '../../twcss/ScrollDown';
import { togaTransShadeImg, togaTransImg } from '../../path/imagesPath';
import useTheme from "../../hooks/useTheme";
import usePersonal from '../../hooks/usePersonal';
import { useInView } from "react-intersection-observer";

function Hero() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { data = [] } = usePersonal(inView);


    const isDarkMode = useTheme();

    const path = isDarkMode
        ? togaTransShadeImg
        : togaTransImg;

    return (
        <>
            {/* <p>{data.find((person) => person.key === "firstName")?.value}</p> */}
            <div className="relative z-10" ref={ref}>
                <section className="relative flex flex-col md:flex-row items-center max-w-screen-xl px-4 py-8 mx-auto f-full lg:h-screen">
                    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10 h-full">
                        <div className={`text-left w-full ${isDarkMode ? "text-white" : "text-black"}`}>
                            <i className="mb-30">Hi, I'm</i>
                            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl dark:text-white">
                                {data.find((person) => person.key === "firstname")?.value ?? 'Clarence'} <span className="font-bold text-blue-500 ">{data.find((person) => person.key === "lastname")?.value ?? 'Duerme'}</span>
                            </h2>
                            <p className="text-3xl pt-5 dark:text-white">
                                I'm a <span>
                                    <TypingAnimation words={["Web Developer"]}
                                        typeSpeed={50}
                                        deleteSpeed={150}
                                        pauseDelay={2000}
                                        loop />
                                </span>
                            </p>
                            <p className="max-w-md mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                Passionate about delivering quality creative and technical solutions—whether it’s design, development, or strategy. Let’s turn your ideas into reality!
                            </p>
                            <div className="mt-5 sm:flex md:mt-8">
                                <div className="flex gap-2">
                                    <ContainedBtn text="View My Work" icon={""} />
                                    <OutlinedBtn text="Get in Touch" icon={""} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10 h-full">
                        <div >
                            <ProfileCard
                                name={`${data.find((person) => person.key === "firstname")?.value ?? 'Clarence'} ${data.find((person) => person.key === "lastName")?.value ?? 'Duerme'}`}
                                title={`${data.find((person) => person.key === "title")?.value ?? 'System Developer'} `}
                                handle={`${data.find((person) => person.key === "firstname")?.value ?? 'Clarence'} ${data.find((person) => person.key === "lastName")?.value ?? 'Duerme'}`}
                                status="Online"
                                contactText="Contact Me"
                                avatarUrl={path}
                                showUserInfo
                                enableTilt
                                enableMobileTilt
                                onContactClick={() => {
                                    window.location.href =
                                        `mailto:${data.find((person) => person.key === "email")?.value ?? 'clarenceduerme40@gmail.com'}`;
                                }}
                                behindGlowColor="rgba(125, 190, 255, 0.67)"
                                iconUrl="/svg/code.svg"
                                behindGlowEnabled
                                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                            />
                        </div>
                    </div>
                </section>
                <div className="bg-transparent absolute top-0 left-0 pointer-events-auto z-[99999]">
                    <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                </div>
                <ScrollDown />
            </div>


        </>
    )
}
export default Hero;