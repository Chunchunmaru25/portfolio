
import {
    CircleUserRound, Calendar, MapPinHouse, PersonStanding, Mars, Flag, Mail, Smartphone,
    GraduationCap, Building,
    Download, MessageCircleMore
} from 'lucide-react';
import ContainedBtn from "../../uiverse/ContainedBtn";
import OutlinedBtn from "../../uiverse/OutlinedBtn";
import DecryptedText from '../../reactbits/DecryptedText';
// assets
import {
    togaImg,
} from '../../path/imagesPath'
import { linkinSvg } from "../../path/svgPath";

import usePersonal from '../../hooks/usePersonal';
import { personalValue } from '../../path/interfaces/dataTypes';
import useFrontendSkills from "../../hooks/useFrontendSkills";
import useBackendSkills from "../../hooks/useBackendSkills";
import useTheme from "../../hooks/useTheme";
import RangeProgressWTooltip from '../../twcss/RangeWithTooltip'
import useSoftSkills from '../../hooks/useSoftSkills';
import useAchievements from '../../hooks/resume/useAchievements';
import useEducation from '../../hooks/resume/useEducation';
import useExperience from '../../hooks/resume/useExperience';
import { useInView } from "react-intersection-observer";
import { SkeletonText, SkeletonRectangle, SkeletonCircle } from '../../reactbits/Skeleton';
export default function Resume() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const { data = [], loading } = usePersonal(inView);

    const { frontend = [], loading: frontendLoading } = useFrontendSkills(inView);
    const { backend = [], loading: backendLoading } = useBackendSkills(inView);
    const { SoftSkills = [], loading: SoftSkillsLoading } = useSoftSkills(inView);

    const { achievements = [], loading: achievementsLoading } = useAchievements(inView);
    const { experience = [], loading: experienceLoading } = useExperience(inView);
    const { education = [], loading: educationLoading } = useEducation(inView);

    const isDarkMode = useTheme();
    return (
        <>
            <section id="about" className={`py-20 sm:py-16 lg:py-20 ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"}`} ref={ref}>
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-10">
                        <div className="flex">
                            <div className={`relative ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-black"} dark:to-neutral-900 border border-gray-200
                             dark:border-neutral-700 rounded-3xl p-6 sm:p-8 text-center shadow-xl overflow-hidden w-full flex flex-col`}>
                                <div className="flex justify-center items-center size-32 sm:size-40 border-3 border-solid border-indigo-500 rounded-full mx-auto mb-4 overflow-hidden shrink-0">
                                    <img src={togaImg} alt="Toga" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h1 className="text-xl sm:text-2xl flex mt-3 mb-3"><b>Personal Profile</b></h1>
                                    <hr />
                                    <div className="flex flex-col gap-3 my-5">

                                        <div className="flex items-start flex-wrap sm:flex-nowrap">
                                            <CircleUserRound className="mr-3 mt-1 shrink-0" />
                                            <span className="w-28 sm:w-36 shrink-0 text-sm text-gray-500">FULL NAME</span>
                                            <span className="font-semibold break-words min-w-0 flex-1">
                                                {
                                                    loading ? (
                                                        <SkeletonText />
                                                    ) : (
                                                        `${data.find((person) => person.key === "firstname")?.value ?? 'Keith Clarence'} ${data.find((person) => person.key === "lastName")?.value ?? 'Duerme'}`
                                                    )
                                                }
                                            </span>
                                        </div>

                                        <div className="flex items-start flex-wrap sm:flex-nowrap">
                                            <Calendar className="mr-3 mt-1 shrink-0" />
                                            <span className="w-28 sm:w-36 shrink-0 text-sm text-gray-500">BIRTH DATE</span>
                                            <span className="font-semibold break-words min-w-0 flex-1">
                                                {
                                                    loading ? (
                                                        <SkeletonText />
                                                    ) : (
                                                        `${data.find((person) => person.key === "birthdate")?.value ?? 'April 25, 2004'}`
                                                    )
                                                }
                                            </span>
                                        </div>

                                        <div className="flex items-start flex-wrap sm:flex-nowrap">
                                            <MapPinHouse className="mr-3 mt-1 shrink-0" />
                                            <span className="w-28 sm:w-36 shrink-0 text-sm text-gray-500">BIRTH PLACE</span>
                                            <span className="font-semibold break-words min-w-0 flex-1">
                                                {
                                                    loading ? (
                                                        <SkeletonText />
                                                    ) : (
                                                        `${data.find((person) => person.key === "birthplace")?.value ?? 'Sta.Rosa Laguna'}`
                                                    )
                                                }
                                            </span>
                                        </div>

                                        <div className="flex items-start flex-wrap sm:flex-nowrap">
                                            <PersonStanding className="mr-3 mt-1 shrink-0" />
                                            <span className="w-28 sm:w-36 shrink-0 text-sm text-gray-500">HEIGHT</span>
                                            <span className="font-semibold break-words min-w-0 flex-1">
                                                {
                                                    loading ? (
                                                        <SkeletonText />
                                                    ) : (
                                                        `${data.find((person) => person.key === "height")?.value ?? "5'7"}`
                                                    )
                                                }
                                            </span>
                                        </div>

                                        <div className="flex items-start flex-wrap sm:flex-nowrap">
                                            <Mars className="mr-3 mt-1 shrink-0" />
                                            <span className="w-28 sm:w-36 shrink-0 text-sm text-gray-500">GENDER</span>
                                            <span className="font-semibold break-words min-w-0 flex-1">
                                                {
                                                    loading ? (
                                                        <SkeletonText />
                                                    ) : (
                                                        `${data.find((person) => person.key === "gender")?.value ?? 'Male'}`
                                                    )
                                                }
                                            </span>
                                        </div>

                                        <div className="flex items-start flex-wrap sm:flex-nowrap">
                                            <Flag className="mr-3 mt-1 shrink-0" />
                                            <span className="w-28 sm:w-36 shrink-0 text-sm text-gray-500">CITIZENSHIP</span>
                                            <span className="font-semibold break-words min-w-0 flex-1">
                                                {
                                                    loading ? (
                                                        <SkeletonText />
                                                    ) : (
                                                        `${data.find((person) => person.key === "citizenship")?.value ?? 'Filipino'}`
                                                    )
                                                }
                                            </span>
                                        </div>
                                    </div>

                                    <h1 className="text-xl sm:text-2xl flex mt-8 sm:mt-10 mb-3"><b>Professional Summary</b></h1>
                                    <hr />
                                    <span className="flex justify-start text-left my-4 text-sm sm:text-base">Hardworking and motivated individual with a strong willingness to learn and grow. Adaptable and detail-oriented, with the ability to work well independently or in a team. Open to various roles and committed to delivering quality service in every task.</span>

                                    <h1 className="text-xl sm:text-2xl flex mt-8 sm:mt-10 mb-3"><b>Contact Information</b></h1>
                                    <hr />

                                    <a
                                        href="https://www.google.com/maps/place/Mamatid,+Cabuyao+City,+Laguna/@14.2346491,121.1633434,8742m/data=!3m1!1e3!4m6!3m5!1s0x33bd62147654b0f5:0xfaaafa6833d28a05!8m2!3d14.2373479!4d121.1509924!16s%2Fm%2F05q4x0c?entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        className="flex text-left justify-start items-center my-3 gap-2"
                                    >
                                        <CircleUserRound className="shrink-0" />
                                        {loading ? (
                                            <SkeletonText className="h-4 w-64" />
                                        ) : (
                                            `${data.find((p) => p.key === "barangay")?.value ?? "Mamatid"} ${data.find((p) => p.key === "city")?.value ?? "Cabuyao"
                                            } ${data.find((p) => p.key === "province")?.value ?? "Laguna"} ${data.find((p) => p.key === "country")?.value ?? "Philippines"
                                            }`
                                        )}
                                    </a>

                                    <a
                                        href={`mailto:${data.find((person) => person.key === "email")?.value ?? "clarenceduerme40@gmail.com"}`}
                                        target="_blank"
                                        className="flex text-left justify-start items-center my-3 gap-2"
                                    >
                                        <Mail className="shrink-0" />
                                        {loading ? (
                                            <SkeletonText className="h-4 w-48" />
                                        ) : (
                                            data.find((person) => person.key === "email")?.value ??
                                            "clarenceduerme40@gmail.com"
                                        )}
                                    </a>

                                    <a
                                        href={`tel:${data.find((person) => person.key === "phone")?.value ?? ""}`}
                                        target="_blank"
                                        className="flex text-left justify-start items-center my-3 gap-2"
                                    >
                                        <Smartphone className="shrink-0" />
                                        {loading ? (
                                            <SkeletonText className="h-4 w-36" />
                                        ) : (
                                            <div className="blur-sm transition-all duration-300 group-hover:blur-none">
                                                <DecryptedText
                                                    text={personalValue(data, "phone")}
                                                    speed={30}
                                                    maxIterations={45}
                                                    characters="ABCD1234!?/*`"
                                                    animateOn="hover"
                                                />
                                            </div>
                                        )}
                                    </a>

                                    <a
                                        href={`tel:${data.find((person) => person.key === "linkin")?.value ?? ""}`}
                                        target="_blank"
                                        className="flex text-left justify-start items-center my-3 gap-2"
                                    >
                                        <img className="size-7 shrink-0" src={linkinSvg} alt="LinkedIn" />
                                        {loading ? (
                                            <SkeletonText className="h-4 w-40" />
                                        ) : (
                                            data.find((person) => person.key === "linkin")?.value ?? ""
                                        )}
                                    </a>

                                    <h1 className="text-xl sm:text-2xl flex mt-8 sm:mt-10 mb-3"><b>Soft Skills</b></h1>
                                    <hr />
                                    {SoftSkillsLoading ? (
                                        Array.from({ length: 5 }).map((_, i) => (
                                            <div key={i} className="space-y-2">
                                                <SkeletonText className="h-5 w-36" />
                                                <SkeletonText className="h-3 w-52 opacity-70" />
                                                <SkeletonRectangle className="h-2 w-full rounded-full" />
                                            </div>
                                        ))
                                    ) : SoftSkills.length === 0 ? (
                                        <>
                                            <p className="text-center text-gray-500">
                                                No Soft Skills Found.
                                            </p>
                                        </>
                                    ) : (
                                        SoftSkills.map((skill) => (
                                            <RangeProgressWTooltip
                                                key={skill.id}
                                                language={skill.skills}
                                                description={skill.description}
                                                progress={skill.progress}
                                            />
                                        ))
                                    )}
                                    <div className="text-[14px] flex flex-wrap gap-2">

                                    </div>

                                    <h1 className="text-xl sm:text-2xl flex mt-8 sm:mt-10 mb-3"><b>Technical Skills</b></h1>
                                    <hr />
                                    {
                                        backend.length === 0 && frontend.length === 0 ?
                                            (
                                                <>
                                                    <p className="text-center text-gray-500">
                                                        No Technical Skills Found.
                                                    </p>
                                                </>
                                            ) :
                                            (
                                                <>
                                                    {frontendLoading ? (
                                                        Array.from({ length: 5 }).map((_, i) => (
                                                            <div key={i} className="space-y-2">
                                                                <SkeletonText className="h-5 w-32" />
                                                                <SkeletonText className="h-3 w-48 opacity-70" />
                                                                <SkeletonRectangle className="h-2 w-full" />
                                                            </div>
                                                        ))
                                                    ) : (
                                                        frontend.map((skill) => (
                                                            <RangeProgressWTooltip
                                                                key={skill.id}
                                                                language={skill.skills}
                                                                description={skill.description}
                                                                progress={skill.progress}
                                                            />
                                                        ))
                                                    )}

                                                    {backendLoading ? (
                                                        Array.from({ length: 5 }).map((_, i) => (
                                                            <div key={i} className="space-y-2">
                                                                <SkeletonText className="h-5 w-32" />
                                                                <SkeletonText className="h-3 w-48 opacity-70" />
                                                                <SkeletonRectangle className="h-2 w-full" />
                                                            </div>
                                                        ))
                                                    ) : (
                                                        backend.map((skill) => (
                                                            <RangeProgressWTooltip
                                                                key={skill.id}
                                                                language={skill.skills}
                                                                description={skill.description}
                                                                progress={skill.progress}
                                                            />
                                                        ))
                                                    )}
                                                </>
                                            )
                                    }
                                    {/* <div className="text-[14px] flex flex-wrap gap-2"></div> */}
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="relative text-center overflow-hidden w-full flex flex-col">
                                {/* EDUCATION */}
                                <div className="flex items-center">
                                    <span className="ml-2 sm:ml-10 mr-4 shrink-0">
                                        <GraduationCap size={40} />
                                    </span>
                                    <b className="text-xl sm:text-2xl">Education</b>
                                </div>
                                {educationLoading ? (
                                    Array.from({ length: 3 }).map((_, index) => (
                                        <div key={index} className="flex my-5">
                                            {/* Timeline dot */}
                                            <div className="flex flex-col items-center justify-center mt-3 shrink-0">
                                                <SkeletonCircle className="size-[25px]" />
                                                <SkeletonRectangle className="w-[2px] h-full" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex flex-col text-start min-w-0 w-full">
                                                <SkeletonText className="h-6 w-2/3 mx-3 my-1" />
                                                <SkeletonText className="h-4 w-32 mx-3 my-1" />
                                                <SkeletonText className="h-4 w-40 mx-3 my-2" />

                                                <div className="ml-4 sm:ml-10 space-y-2">
                                                    <SkeletonText className="h-3 w-full" />
                                                    <SkeletonText className="h-3 w-5/6" />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : education.length === 0 ? (
                                    <>
                                        <p className="text-center text-gray-500">
                                            No Education Found.
                                        </p>
                                    </>
                                ) : (
                                    education.map((i, index) => (
                                        <div key={index}>
                                            <div className="flex my-5">
                                                <div className="flex flex-col items-center justify-center mt-3 shrink-0">
                                                    <div className="bg-gray-300 size-[25px] border rounded-full"></div>
                                                    <div className="bg-gray-300 w-[2px] h-full border rounded-4xl"></div>
                                                </div>

                                                <div className="flex flex-col text-start min-w-0">
                                                    <p className="mx-3 my-1 text-lg sm:text-xl break-words">
                                                        <b>{i.program}</b>
                                                    </p>

                                                    <p className="mx-3 my-1">
                                                        {new Date(i.startDate).getFullYear()} -{" "}
                                                        {new Date(i.endDate).getFullYear()}
                                                    </p>

                                                    <p className="flex mx-3 mb-4 mt-2 items-center">
                                                        <span className="shrink-0">
                                                            <Building />
                                                        </span>
                                                        <span className="mx-3 text-sm italic break-words">
                                                            {i.branch}
                                                        </span>
                                                    </p>

                                                    <div className="ml-4 sm:ml-10">
                                                        {i.educationDescriptions.map((desc) => (
                                                            <p key={desc.id} className="my-2 break-words">
                                                                • {desc.description}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                                {/* EXPERIENCE */}
                                <div className="flex items-center">
                                    <span className="ml-2 sm:ml-10 mr-4 shrink-0">
                                        <GraduationCap size={40} />
                                    </span>
                                    <b className="text-xl sm:text-2xl">Personal Experience</b>
                                </div>
                                {experienceLoading ? (
                                    Array.from({ length: 3 }).map((_, index) => (
                                        <div key={index} className="flex my-5">
                                            {/* Timeline */}
                                            <div className="flex flex-col items-center justify-center mt-3 shrink-0">
                                                <SkeletonCircle className="size-[25px]" />
                                                <SkeletonRectangle className="w-[2px] h-full" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex flex-col text-start min-w-0 w-full">
                                                {/* Position + Branch */}
                                                <SkeletonText className="h-6 w-2/3 mx-3 my-1" />

                                                {/* Date */}
                                                <SkeletonText className="h-4 w-56 mx-3 my-1" />

                                                {/* Company */}
                                                <SkeletonText className="h-4 w-40 mx-3 my-2" />

                                                {/* Description */}
                                                <div className="ml-4 sm:ml-10 space-y-2">
                                                    <SkeletonText className="h-3 w-full" />
                                                    <SkeletonText className="h-3 w-5/6" />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : experience.length === 0 ? (
                                    <>
                                        <p className="text-center text-gray-500">
                                            No Experience Skills Found.
                                        </p>
                                    </>
                                ) : (
                                    experience.map((exp) => (
                                        <div key={exp.id}>
                                            <div className="flex my-5">
                                                <div className="flex flex-col items-center justify-center mt-3 shrink-0">
                                                    <div className="bg-gray-300 size-[25px] border rounded-full"></div>
                                                    <div className="bg-gray-300 w-[2px] h-full border rounded-4xl"></div>
                                                </div>

                                                <div className="flex flex-col text-start min-w-0">
                                                    <p className="mx-3 my-1 text-lg sm:text-xl break-words">
                                                        <b>{exp.position}</b> | <b>{exp.branch}</b>
                                                    </p>

                                                    <p className="mx-3 my-1">
                                                        {new Date(exp.startDate).toLocaleDateString("en-US", {
                                                            month: "long",
                                                            day: "2-digit",
                                                            year: "numeric",
                                                        })}{" "}
                                                        -{" "}
                                                        {new Date(exp.endDate).toLocaleDateString("en-US", {
                                                            month: "long",
                                                            day: "2-digit",
                                                            year: "numeric",
                                                        })}
                                                    </p>

                                                    <p className="flex mx-3 mb-4 mt-2 items-center">
                                                        <span className="shrink-0">
                                                            <Building />
                                                        </span>
                                                        <span className="mx-3 text-sm italic break-words">
                                                            {exp.company}
                                                        </span>
                                                    </p>

                                                    <div className="ml-4 sm:ml-10">
                                                        {exp.experienceDescriptions.map((desc) => (
                                                            <p key={desc.id} className="my-2 break-words">
                                                                • {desc.description}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                                {/* ACHIEVEMENTS AND CERTIFICATIONS */}
                                <div className="flex items-center">
                                    <span className="ml-2 sm:ml-10 mr-4 shrink-0">
                                        <GraduationCap size={40} />
                                    </span>
                                    <b className="text-xl sm:text-2xl">Achievements and Certifications</b>
                                </div>
                                {achievementsLoading ? (
                                    Array.from({ length: 3 }).map((_, index) => (
                                        <div key={index} className="flex my-5">
                                            {/* Timeline */}
                                            <div className="flex flex-col items-center justify-center mt-3 shrink-0">
                                                <SkeletonCircle className="size-[25px]" />
                                                <SkeletonRectangle className="w-[2px] h-full" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex flex-col text-start min-w-0 w-full">
                                                {/* Title */}
                                                <SkeletonText className="h-6 w-2/3 mx-3 my-1" />

                                                {/* Year */}
                                                <SkeletonText className="h-4 w-24 mx-3 my-1" />

                                                {/* Description */}
                                                <div className="ml-4 sm:ml-10 space-y-2">
                                                    <SkeletonText className="h-3 w-full" />
                                                    <SkeletonText className="h-3 w-5/6" />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : achievements.length === 0 ? (
                                    <>
                                        <p className="text-center text-gray-500">
                                            No Achivements Skills Found.
                                        </p>
                                    </>
                                ) : (
                                    achievements.map((ach) => (
                                        <div key={ach.id}>
                                            <div className="flex my-5">
                                                <div className="flex flex-col items-center justify-center mt-3 shrink-0">
                                                    <div className="bg-gray-300 size-[25px] border rounded-full"></div>
                                                    <div className="bg-gray-300 w-[2px] h-full border rounded-4xl"></div>
                                                </div>

                                                <div className="flex flex-col text-start min-w-0">
                                                    <p className="mx-3 my-1 text-lg sm:text-xl break-words">
                                                        <b>{ach.title}</b>
                                                    </p>

                                                    <p className="mx-3 my-1">{ach.year}</p>

                                                    <div className="ml-4 sm:ml-10">
                                                        {ach.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                                <div className="flex flex-row flex-wrap gap-2 justify-center my-5">
                                    <a href={''} download>
                                        <ContainedBtn text="Download CV" icon={<Download />} />
                                    </a>
                                    <a href="#contact">
                                        <OutlinedBtn text="Let's Talk" icon={<MessageCircleMore />} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}