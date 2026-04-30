import React from 'react';
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Carousel from "../utility/Carousel";

export default function ProjectCard(props) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        duration: 0.8,
      }}
      className="flex flex-col w-full h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-teal-100 dark:bg-zinc-800/50 dark:border-zinc-700/50 dark:hover:border-teal-900/50"
    >
      <Carousel images={props.imageUrl} aspectRatio={props.aspectRatio || 1.8} />
      
      <div className="flex flex-col flex-grow p-6 sm:p-8">
        <div className="flex items-center gap-3">
          {props.favicon && (
             <span className="relative h-6 w-6 flex-shrink-0">
               <img src={props.favicon} alt={`${props.name} logo`} className="h-full w-full object-contain" />
             </span>
          )}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{props.name}</h3>
        </div>
        
        <div className="mt-4 flex-grow">
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{props.description}</p>
        </div>
        
        <div className="mt-8 flex items-center justify-end gap-6 pt-4 border-t border-gray-100 dark:border-zinc-700/50">
          {props.sourceCodeHref && (
            <a
              href={props.sourceCodeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors dark:text-gray-400 dark:hover:text-teal-400"
            >
              <FaGithub className="h-5 w-5" /> Source code
            </a>
          )}
          {props.liveWebsiteHref && (
            <a
              href={props.liveWebsiteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors dark:text-gray-400 dark:hover:text-teal-400"
            >
              <FiExternalLink className="h-5 w-5" /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
