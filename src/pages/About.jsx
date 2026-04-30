import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import FadeUp from '../animations/Fadeup'
import ContactSection from '@/components/contact/ContactSection'

function About() {
  return (
    <>
      <Navbar />
      <div className="w-full px-6 sm:px-14 md:px-20 z-50">
        <div className="mx-auto w-full max-w-6xl py-8 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 min-h-[calc(100vh-100px)]">
          
          {/* Image Section */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
             <FadeUp key="about-image" duration={0.6} whileInView>
                <img 
                  src="/images/profile.png" 
                  alt="Profile" 
                  className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] object-contain drop-shadow-xl"
                />
             </FadeUp>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <FadeUp key="about-title" duration={0.6} delay={0.2} whileInView>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-600 leading-tight">
                Hi, I'm Abhinand<br/>Rajeev
              </h1>
            </FadeUp>
            
            <FadeUp key="about-desc-1" duration={0.6} delay={0.4} whileInView>
              <p className="mt-6 text-base sm:text-lg text-gray-800 font-medium leading-relaxed max-w-2xl">
                I turn vision into reality with code. Whether I'm working on a website or any digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on.
              </p>
            </FadeUp>
            
            <FadeUp key="about-desc-2" duration={0.6} delay={0.6} whileInView>
              <p className="mt-4 text-base sm:text-lg text-gray-800 font-medium leading-relaxed max-w-2xl">
                Explore my latest <Link to="/projects" className="text-teal-600 underline font-semibold underline-offset-4 decoration-2">projects</Link> showcasing my expertise in Reactjs, Javascript and web development.
              </p>
            </FadeUp>

          </div>
        </div>
      </div>
      <ContactSection />
    </>
  )
}

export default About
