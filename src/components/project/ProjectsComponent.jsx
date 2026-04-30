import React from 'react';
import { Link } from 'react-router-dom';
import FadeUp from '../../animations/Fadeup';

const ArrowTopRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

export default function ProjectsComponent({ projects = [] }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="w-full px-6 py-20 sm:py-32 sm:px-14 md:px-20">
      <div className="relative mx-auto w-full max-w-7xl">

        {/* Section Header */}
        <FadeUp whileInView>
          <div className="flex items-center justify-between mb-10 md:mb-16">
            <h2 className="text-3xl font-semibold text-teal-600 sm:text-4xl md:text-5xl">
              Projects
            </h2>
          </div>
        </FadeUp>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <FadeUp key={index} whileInView delay={index * 0.1}>
              <Link to={project.href || "#"} className="group block h-full">
                <div className="flex flex-col h-full rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-teal-100 overflow-hidden">

                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                    {project.image?.LIGHT ? (
                      <img
                        src={project.image.LIGHT}
                        alt={project.title}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-400">
                        No image available
                      </div>
                    )}
                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-teal-900/0 transition-colors duration-300 group-hover:bg-teal-900/5"></div>
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col flex-grow p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-teal-600">
                        {project.title}
                      </h3>
                      <div className="text-teal-600 opacity-0 transform -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <ArrowTopRight />
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags?.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-semibold tracking-wide text-teal-700 bg-teal-50/80 rounded-full border border-teal-100/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        {/* View All Button */}
        <FadeUp whileInView delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-50 text-teal-700 font-semibold rounded-full border border-teal-100 hover:bg-teal-100 transition-colors"
            >
              See all projects <ArrowTopRight />
            </Link>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
