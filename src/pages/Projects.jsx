import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ContactSection from '@/components/contact/ContactSection';
import FadeUp from '../animations/Fadeup';

const projectsData = [
  {
    id: 1,
    name: "DevConnect",
    description: "A full-stack MERN application designed for developer networking and project sharing, featuring secure JWT authentication with RBAC, a responsive React + Tailwind UI, Stripe-powered payments, and optimized MongoDB schemas for scalable performance.",
    sourceCodeHref: "https://github.com/AbhinandRajeev/DevConnect_frontend",
    liveWebsiteHref: "https://dev-connect-frontend-liard.vercel.app/",
    imageUrl: "/images/devconnect.png"
  },
  {
    id: 2,
    name: "Budget Tracker",
    description: "Built a budget management application using React, Material-UI, and Axios, enabling users to add, edit, and delete budgets efficiently. Implemented dynamic expense tracking with monthly data filtering for better financial insights. Integrated Axios for seamless API communication and added PDF export functionality using html2canvas and jsPDF.",
    sourceCodeHref: "https://github.com/AbhinandRajeev/bugetTracker_frontEnd",
    liveWebsiteHref: "https://buget-tracker-front-end.vercel.app/",
    imageUrl: "/images/budget.png"
  },
  {
    id: 3,
    name: "FooDelivery",
    description: "A responsive food delivery website with interactive UI, animated sections (AOS), dynamic menu display, and Google Maps integration, built using HTML, CSS, and JavaScript.",

    sourceCodeHref: "https://github.com/AbhinandRajeev/foodelivery",
    liveWebsiteHref: "https://foodelivery-ashy.vercel.app/",
    imageUrl: "/images/foodelivery.png"
  },
  {
    id: 4,
    name: "Bank Website",
    description: "Developed a banking web application using HTML, Tailwind CSS, and JavaScript, featuring user registration and login authentication. Implemented core functionalities such as deposit and withdrawal, along with session-based user data management for a seamless user experience.",
    sourceCodeHref: "https://github.com/AbhinandRajeev/Bank_Basic",
    liveWebsiteHref: "https://bank-basic.vercel.app/",
    imageUrl: "/images/bank.png"
  },
  // {
  //   id: 5,
  //   name: "Budget Tracker",
  //   description: "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
  //   sourceCodeHref: "https://github.com/AbhinandRajeev/bugetTracker_frontEnd",
  //   liveWebsiteHref: "https://buget-tracker-front-end.vercel.app/",
  //   imageUrl: "/images/budget.png"
  // },
  // {
  //   id: 6,
  //   name: "FooDelivery",
  //   description: "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
  //   sourceCodeHref: "https://github.com/AbhinandRajeev/foodelivery",
  //   liveWebsiteHref: "https://foodelivery-ashy.vercel.app/",
  //   imageUrl: "/images/foodelivery.png"
  // }
];

function Projects() {
  return (
    <>
      <Navbar />
      
      <main className="w-full px-6 sm:px-14 md:px-20 pb-16">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 pt-8 sm:pt-12">
            <h1 className="text-4xl font-bold text-teal-600 mb-3 tracking-tight">
              Projects
            </h1>
            <p className="text-gray-500">
              Here are some of the projects I'd like to share
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <FadeUp key={project.id} whileInView delay={index * 0.05} duration={0.3}>
              <div 
                className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-shadow duration-150 hover:shadow-md hover:shadow-teal-500/20 h-full flex flex-col"
              >
                <div className="relative aspect-[2.1/1] bg-gray-100 overflow-hidden group shrink-0">
                  <img 
                    src={project.imageUrl} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  
                </div>

                {/* Card Content */}
                <div className="flex-1 p-3 text-gray-900 sm:p-4 flex flex-col">
                  <div className="flex items-center gap-3">
                    
                    <span className="text-sm font-semibold">{project.name}</span>
                  </div>
                  
                  <div className="mt-3 flex-1">
                    <p className="text-xs md:text-sm text-gray-800">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-end gap-6">
                    <a
                      href={project.sourceCodeHref}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs underline md:text-sm text-gray-900 hover:text-teal-600 transition-colors"
                    >
                      <FiGithub className="h-4 w-4 md:h-5 md:w-5" /> Source code
                    </a>
                    <a
                      href={project.liveWebsiteHref}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs underline md:text-sm text-gray-900 hover:text-teal-600 transition-colors"
                    >
                      <FiExternalLink className="h-4 w-4 md:h-5 md:w-5" /> Live
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
        </div>
      </main>
      <ContactSection/>
    </>
  );
}

export default Projects;