import React, { useState, useRef } from 'react';
import { MailIcon } from 'lucide-react';
import { useInView, motion, AnimatePresence } from 'framer-motion';
import ContactFormModal from './ContactFormModal';
import FadeUp from '../../animations/Fadeup';

export default function ContactSection() {
  const [showModal, setShowModal] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1 });

  return (
    <section ref={sectionRef} className="w-full px-6 py-20 sm:px-14 md:px-20">
      <div className="relative mx-auto w-full max-w-7xl">
        <FadeUp whileInView>
          <div className="flex flex-col items-center justify-center rounded-[2.5rem] bg-teal-600 px-6 py-16 text-center shadow-xl sm:px-12 sm:py-24">
            {/* Tag */}
            <div className="mb-8 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-widest text-teal-700 uppercase shadow-sm">
              Get in touch
            </div>

            {/* Email Heading */}
            <h2 className="mb-10 text-2xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl break-words w-full leading-tight">
              <a href="mailto:abhinandrajeev10@gmail.com" className="hover:text-teal-100 transition-colors duration-300">
                abhinandrajeev10@gmail.com
              </a>
            </h2>

            {/* Button */}
            <button
              onClick={() => setShowModal(true)}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-teal-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-zinc-50"
            >
              <MailIcon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
              <span>Send Message</span>
            </button>
          </div>
        </FadeUp>
      </div>

      <ContactFormModal showModal={showModal} setShowModal={setShowModal} />

      {/* Floating Mail Button */}
      <AnimatePresence>
        {!isInView && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            aria-label="open send mail modal"
            type="button"
            className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-teal-600 p-3 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-teal-700 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16 lg:bottom-10 lg:right-10"
            onClick={() => setShowModal(true)}
          >
            <MailIcon className="h-6 w-6 sm:h-7 sm:w-7" />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
