import ProjectsView from "./projects/indexProjects"
import { Helmet } from "react-helmet-async"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { WebRoute } from "../routes/web.route";
import useTheme from "../components/hooks/useTheme";
import IndexPersonal from "./personal/indexPersonal";
import IndexEducation from "./education/indexEducation";
import IndexExperience from "./experience/indexExperience";
import IndexBackendSkills from "./backendskills/indexBackendSkills";
import IndexFrontendSkills from "./frontendskills/indexFrontendSkills";
import IndexAchievements from "./achievements/indexAchievements";
import IndexTechStack from "./techStack/indexTechStack";
import IndexSoftSkills from "./softskills/indexSoftSkills";


export default function ControlPanel() {
    const isDarkMode = useTheme();
    return (
        <>
            <Helmet>
                <title>{import.meta.env.VITE_APP_NAME}</title>

                <meta
                    name="description"
                    content={import.meta.env.VITE_APP_DESCRIPTION}
                />

                <meta name="author" content={import.meta.env.VITE_APP_AUTHOR} />
                {/* not showing page in search */}
                {/* <meta name="robots" content="noindex, nofollow" /> */}

                <meta name="robots" content="noindex, nofollow" />
                <link
                    rel="icon"
                    href="/portfolio-icon.svg"
                />
            </Helmet>
            {/* Breadcrumb */}
            <div className={`pl-10 py-10 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-white text-black"}`}>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={WebRoute.LOGIN}>Login</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className={`${isDarkMode ? " text-white" : " text-black"}`}>Control Panel</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className={`px-10 py-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-white text-black"}`}>
                <ProjectsView />
            </div>
            <div className={`px-10 py-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-white text-black"}`}>
                <IndexPersonal />
            </div>
            <div className={`px-10 py-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-white text-black"}`}>
                <IndexEducation dateFormat="month" />
            </div>
            <div className={`px-10 py-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-white text-black"}`}>
                <IndexExperience dateFormat="month" title="Experience" />
            </div>
            <div className={`px-10 py-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-white text-black"}`}>
                <IndexBackendSkills dateFormat="month" title="Backend" />
            </div>
            <div className={`px-10 py-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-white text-black"}`}>
                <IndexFrontendSkills dateFormat="month" title="Frontend" />
            </div>
            <div className={`px-10 py-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-white text-black"}`}>
                <IndexAchievements dateFormat="month" title="Achievements" />
            </div>
            <div className={`px-10 py-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-white text-black"}`}>
                <IndexTechStack dateFormat="month" title="Tech Stack" />
            </div>
            <div className={`px-10 py-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] ${isDarkMode ? "bg-[#0A0A0A] text-white" : "bg-white text-black"}`}>
                <IndexSoftSkills dateFormat="month" title="Soft Skills" />
            </div>

        </>
    )
}