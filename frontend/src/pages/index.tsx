// Hooks
import useTheme from "../components/hooks/useTheme";

// UI Components
import GridBackground from "../components/uiverse/Grid_Background";
import Card from "../components/twcss/PrajapatiCard";
import TitleLine from "../components/twcss/TitleLine";

// Sections
import Hero from "../components/sections/index/Hero";
import About from "../components/sections/index/About";
import Skills from "../components/sections/index/Skills";
import Resume from "../components/sections/index/Resume";
import TechStack from "../components/sections/index/TechStack";
import Portfolio from "../components/sections/index/Portfolio";
import Faqs from "../components/sections/index/faqs";
import Contact from "../components/sections/index/Contact";

// Constants
import { cardStats } from "../constants/cardStats";

import { Helmet } from "react-helmet-async";

import { togaImg } from "../components/path/imagesPath";

export default function Index() {

    const isDarkMode = useTheme();
    return (
        <>
            <Helmet>
                <title>{import.meta.env.VITE_APP_NAME}</title>

                <meta name="google-site-verification" content="sEF-ZsMpIReUUVmuAgeEoFYje1xn6g34ihe3AGfFd9I" />

                <meta
                    name="description"
                    content={import.meta.env.VITE_APP_DESCRIPTION}
                />

                <meta name="author" content={import.meta.env.VITE_APP_AUTHOR} />
                {/* not showing page in search */}
                {/* <meta name="robots" content="noindex, nofollow" /> */}

                <meta name="robots" content="index, follow" />

                {/* official url */}
                <link rel="canonical" href={import.meta.env.VITE_APP_OFFICIAL_URL} />

                {/* 
                what kind of content this is
                website, article, video, profile
                */}
                <meta property="og:type" content="website" />

                {/* becomes the title in the preview card when shared link */}
                <meta property="og:title" content="Clarence Duerme | Full Stack Developer" />

                {/* becomes the description in the preview card when shared link */}
                <meta property="og:description" content="Explore my projects, skills, and experience." />

                {/* becomes the description in the preview card when shared link */}
                <meta property="og:image" content={togaImg} />

                <meta property="og:url" content={import.meta.env.VITE_APP_OFFICIAL_URL} />

                <link
                    rel="icon"
                    href="/portfolio-icon.svg"
                />
            </Helmet>

            <div className="relative">
                <GridBackground style="absolute inset-0 -z-10" />
                <Hero />
            </div>

            <div id="about" className={`py-20 ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"}`}>
                <section id="about" className="py-20">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                <div className="flex items-center gap-4">
                                    <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                                    <p className={`whitespace-nowrap ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"}`}>About Me</p>
                                    <span className="flex-1 h-[8px] w-[8px] border rounded-xl bg-gray-400"></span>
                                </div>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
                                I am dedicated to continuous learning and growth, always eager to
                                take on new challenges and improve my skills.
                            </p>
                        </div>
                        <About />
                    </div>
                </section>
            </div>

            <div className={`flex justify-center items-center gap-8 flex-wrap py-20  ${isDarkMode ? "text-white bg-[#1F1B18]" : "text-black bg-pallete-1"}`} >
                {cardStats.map((card, index) => (
                    <Card
                        key={index}
                        style='size-[300px] shadow-[12px_17px_51px_rgba(0,0,0,0.22)]'
                        title={card.title}
                        svg={card.svg}
                        color={card.color}
                    />
                ))}
            </div>


            <div className={`py-20 ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"}`}>
                <TitleLine title="Skills" subtitle="Experienced in building academic responsive and dynamic web applications, with a passion for learning and improving my craft." />
                <Skills />
            </div >

            <div className={`py-20 ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"}`}>
                <TitleLine title="Resume" subtitle="A summary of my education, experience, and technical skills, showcasing my journey and growth as a developer." />
                <Resume />
            </div>

            <div className={` ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"}`}>
                <TitleLine
                    title="DEVELOPMENT TOOLS"
                    subtitle="A collection of development tools, IDEs, version control systems, and utilities that support my workflow from planning to deployment."
                />
                <TechStack />
            </div>

            <div className={`py-20 ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"}`}>
                <TitleLine title="Portfolio" subtitle="Check My Portfolio" />
                <Portfolio />
            </div>

            <div className={`py-20 ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"}`}>
                <Faqs />
            </div>

            <div className={`py-20 ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"}`}>
                <TitleLine title="Contact" subtitle="Have a project in mind, a question, or just want to connect? I’m always open to discussing new opportunities, creative ideas, or collaborations—feel free to reach out anytime." />
                <Contact />
            </div>

        </>
    )
}