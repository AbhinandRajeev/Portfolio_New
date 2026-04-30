import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, } from 'lucide-react'

const routes = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About' },
  { href: '/projects', title: 'Projects' }
];

function Navbar() {
  const location = useLocation()
  const pathName = location.pathname
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathName])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 mt-2 px-6 py-8 sm:mt-8 sm:px-14 md:px-20">
        <div className="mx-auto flex items-center justify-end lg:max-w-7xl relative">
          
          {/* Desktop Nav */}
          <nav className="hidden items-center gap-2 rounded-full px-2 py-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] ring-1 ring-white/30 backdrop-blur-xl bg-white/10 md:flex">
            <ul className="flex gap-2 text-sm font-medium">
              {routes.map((_link, index) => {
                const isActive = pathName === _link.href;
                return (
                  <li
                    key={index}
                    className="my-1 transition-transform duration-100 hover:scale-[1.1]"
                  >
                    <Link
                      to={_link.href}
                      className={`group relative mx-1 rounded-full px-4 py-2 transition-colors duration-200 block ${
                        isActive
                          ? "font-semibold text-white"
                          : "text-zinc-600 hover:text-zinc-900"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="tab-pill"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                          className="absolute inset-0 -z-10 rounded-full bg-teal-600 group-hover:bg-teal-700"
                        ></motion.span>
                      )}
                      <span className="relative z-10">{_link.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden flex items-center justify-center p-3 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] ring-1 ring-white/30 backdrop-blur-xl bg-white/10 text-zinc-600 hover:text-teal-600 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Nav Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col bg-white md:hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-8 sm:px-14">
              {/* <img src="/favicon.svg" alt="Logo" className="h-10 w-10 text-teal-600" /> */}
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center p-3 rounded-full shadow-md ring-1 ring-zinc-200 bg-white text-zinc-600 hover:text-teal-600 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-10">
              {routes.map((_link, index) => {
                const isActive = pathName === _link.href;
                return (
                  <Link
                    key={index}
                    to={_link.href}
                    className={`text-4xl font-semibold text-teal-600 transition-all ${
                      isActive
                        ? "border-[1.5px] border-zinc-800 px-6 py-2 shadow-[4px_4px_0px_#1F8D93]"
                        : "hover:scale-110"
                    }`}
                  >
                    {_link.title}
                  </Link>
                );
              })}
              
              <button aria-label="Toggle dark mode" className="mt-6 text-teal-600 hover:scale-110 transition-transform">
                {/*<Moon className="h-8 w-8" strokeWidth={2.5} />*/}
              </button>
            </div>

            {/* Footer */}
            <div className="flex flex-col items-center pb-12 gap-6 relative">
              <div className="absolute top-0 w-full h-[1px] bg-teal-100/50"></div>
              <p className="text-teal-600 text-base font-medium mt-6">
                ©{new Date().getFullYear()} Abhinand Rajeev
              </p>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
