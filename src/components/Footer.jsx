import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full px-6 py-8 sm:px-14 md:px-20 ">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-600 font-medium">
          &copy;{currentYear} Abhinand Rajeev
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/AbhinandRajeev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 transition-colors hover:text-teal-800"
            aria-label="GitHub"
          >
            <FaGithub className="h-7 w-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhinand-rajeev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 transition-colors hover:text-teal-800"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-7 w-7" />
          </a>
        </div>
      </div>
    </footer>
  );
}
