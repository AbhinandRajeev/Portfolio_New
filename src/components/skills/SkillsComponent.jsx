import React from 'react'
import Skillpill from './Skillpill'
import FadeUp from '../../animations/Fadeup'
import FadeRight from '../../animations/Faderight'

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "Javascript", icon: "/icons/javascript.svg" },
    ],
  },
  {
    title: "Libraries and Frameworks",
    skills: [
      { name: "Reactjs", icon: "/icons/reactjs.svg" },
      { name: "Tailwindcss", icon: "/icons/tailwindcss.svg" },
      { name: "React Router Dom", icon: "/icons/react-router-color.svg" },
      { name: "Bootstrap", icon: "/icons/Bootstrap.svg" }
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Nodejs", icon: "/icons/nodejs.svg" },
      { name: "Express", icon: "/icons/expressjs.svg" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
    ],
  },
  {
    title: "Tools and Technologies",
    skills: [
      { name: "Github", icon: "/icons/github.svg" },
      { name: "Postman", icon: "/icons/postman.svg" },
      { name: "VS Code", icon: "/icons/vscode.svg" },
    ],
  },
];

function SkillsComponent() {
    return (
        <section className="w-full px-6 py-20 sm:py-32 sm:px-14 md:px-20 min-h-[calc(100vh-100px)] flex flex-col justify-center">
            <div className="relative mx-auto w-full max-w-7xl">
                <FadeUp whileInView>
                    <h2 className="text-3xl font-semibold text-teal-600 sm:text-4xl md:text-5xl mb-4">
                        Skills
                    </h2>
                </FadeUp>
                
                <div className="flex flex-col gap-6">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="mt-2">
                            <FadeUp whileInView delay={0.1}>
                                <span className="text-sm font-semibold text-gray-800 sm:text-base">
                                    {category.title}
                                </span>
                            </FadeUp>
                            <div className="mt-2 flex flex-wrap gap-4 text-xl">
                                {category.skills.map((skill, skillIndex) => (
                                    <FadeRight key={skillIndex} whileInView delay={0.1 + skillIndex * 0.05}>
                                        <Skillpill name={skill.name} icon={skill.icon} />
                                    </FadeRight>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsComponent