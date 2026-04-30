import React from 'react'
import Navbar from '../components/Navbar'
import FadeUp from '../animations/Fadeup'
import { FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import SkillsComponent from '@/components/skills/SkillsComponent'
import ProjectsComponent from '@/components/project/ProjectsComponent'
import ContactSection from '@/components/contact/ContactSection'

const myProjects = [
    {
        title: "DevConnect",
        tags: ["ReactJS", "TailwindCSS", "NodeJS", "ExpressJS", "MongoDB"],
        href: "/projects",
        image: { LIGHT: "/images/devconnect.png" }
    },
    {
        title: "Bank Website",
        tags: ["HTML","CSS","JavaScript"],
        href: "/projects",
        image: { LIGHT: "/images/bank.png" }
    },
    {
        title: "Budget Tracker",
        tags: ["ReactJS", "Material UI","Axios"],
        href: "/projects",
        image: { LIGHT: "/images/budget.png" }
    },
];

function Home() {
    return (
        <>
            <Navbar />
            <div className="w-full px-6 sm:px-14 md:px-20 z-50">
                <div className="mx-auto w-full max-w-7xl py-20 lg:py-32 min-h-[calc(100vh-200px)] flex flex-col justify-center">
                    <FadeUp key="title-main" duration={0.6} whileInView>
                        <h1 className="text-6xl font-bold tracking-tight text-teal-600 sm:text-7xl md:text-8xl lg:text-[5.5rem]">
                            Abhinand Rajeev
                        </h1>
                        <h2 className="mt-2 text-2xl font-semibold text-black sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-tight">
                            Full Stack Developer
                        </h2>
                    </FadeUp>
                    <FadeUp key="description" duration={0.6} delay={0.2} whileInView>
                        <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-black sm:text-xl md:text-2xl">
                            I am a Full Stack developer specializing in building
                            high-performance, user-focused web applications. Skilled in{" "}
                            <span className="text-teal-600">ReactJS</span>,{" "}
                            <span className="text-teal-600">JavaScript</span>,{" "}
                            <span className="text-teal-600">HTML</span> and{" "}
                            <span className="text-teal-600">CSS</span>.
                        </p>
                    </FadeUp>
                    <FadeUp key="resume-button" duration={0.6} delay={0.4} whileInView>
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <a
                                href="/resume/ABHINAND-RAJEEV-Resume.pdf"
                                download="Abhinand_Rajeev_Resume.pdf"
                                className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 sm:text-base"
                            >
                                <FiDownload className="h-5 w-5" />
                                Download Resume
                            </a>
                            <a 
                                href="https://github.com/AbhinandRajeev" 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-teal-50 p-3 text-teal-600 shadow-sm transition-all hover:bg-teal-600 hover:text-white hover:shadow-md hover:-translate-y-1"
                                aria-label="GitHub Profile"
                            >
                                <FiGithub className="h-5 w-5 sm:h-6 sm:w-6" />
                            </a>
                            <a 
                                href="https://linkedin.com/in/abhinand-rajeev"
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-teal-50 p-3 text-teal-600 shadow-sm transition-all hover:bg-teal-600 hover:text-white hover:shadow-md hover:-translate-y-1"
                                aria-label="LinkedIn Profile"
                            >
                                <FiLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                            </a>
                        </div>
                    </FadeUp>
                </div>
            </div>

            <SkillsComponent/>
            <ProjectsComponent projects={myProjects}/>
            <ContactSection/>
        </>
    )
}

export default Home
