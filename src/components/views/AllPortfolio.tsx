import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Terminal,
  Globe,
  ExternalLink
} from "lucide-react";

export interface project {
  name: string;
  logo?: string;
  imagesURLs: string[];
  description_short: string;
  description_extended: string;
  tags: string[];
  extended_tags?: string[];
  projectLink?: string;
  repoLink?: string;
  repoLinks?: {
    frontend?: string;
    backend?: string;
  };
  category?: string;
}

export const projects: project[] = [
  {
    name: "Editing Factory",
    logo: "/projectsMediafiles/EF/logo.svg",
    imagesURLs: [
      "/screenshots/EditingFactoryScreen1.webp",
      "/screenshots/EditingFactoryScreen2.webp",
      "/screenshots/EditingFactoryScreen3.webp",
    ],
    description_short:
      "A landing page for a video editing studio, built with React and Tailwind in collaboration with another dev, working directly with the client.",
    description_extended:
      "Editing Factory is a landing page for a video editing studio, built in collaboration with another developer. I managed the complete backend implementation and engineered a significant portion of the frontend. My focus was on building a scalable architecture, developing robust server-side logic, and ensuring seamless integration with responsive, high-performance user interfaces. The project is implemented using React and Tailwind.",
    tags: ["React", "Tailwind", "Figma", "Framer-motion"],
    extended_tags: ["React", "Tailwind", "Figma", "Framer-motion"],
    projectLink: "https://editing-factory.com/",
    category: "frontend",
  },
];

export default function AllPortfolio() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  const activeProject = projects[selectedIdx] || projects[0];

  const handleSelectProject = (idx: number) => {
    setSelectedIdx(idx);
    setImgIndex(0);
  };

  const nextImage = (e: React.MouseEvent, length: number) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent, length: number) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-[60px] px-[20px] lg:px-[40px] relative z-10 overflow-x-clip text-[#F5F5F5]">
      {/* Back navigation */}
      <a
        href="/"
        className="absolute top-[20px] left-[20px] lg:top-[40px] lg:left-[40px] z-50 flex items-center gap-x-1.5 text-[13px] font-semibold text-[#F5F5F5]/45 hover:text-[#A855F7] transition-all duration-200"
      >
        <ChevronLeft size={20} />
        <span>Back to Home</span>
      </a>

      {/* Header */}
      <div className="flex flex-col items-center text-center mt-8 mb-16">
        <motion.h1
          className="uppercase font-extrabold text-[36px] sm:text-[44px] tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#F5F5F5] via-[#F5F5F5] to-[#A855F7]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Selected Works {/* <span className="text-[#A855F7]">.</span> */}
        </motion.h1>
        <motion.p
          className="text-[#F5F5F5]/50 text-[14px] mt-2 max-w-[500px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          An interactive showcase of digital experiences, web apps, and design systems I've crafted.
        </motion.p>
      </div>

      {/* Main Showcase Grid */}
      <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-12 gap-8 z-10 items-start">
        {/* Left Side: Project Navigator (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-y-4 w-full">
          <h3 className="text-[#F5F5F5]/40 text-[11px] uppercase tracking-widest font-bold mb-1 pl-1">
            Projects ({projects.length})
          </h3>

          <div className="flex flex-col gap-y-3.5 w-full">
            {projects.map((project, idx) => {
              const isActive = activeProject && activeProject.name === project.name;
              return (
                <motion.div
                  key={project.name}
                  onClick={() => handleSelectProject(idx)}
                  className={`group relative w-full flex flex-col p-5 rounded-[18px] border cursor-pointer transition-all duration-300 ${isActive
                    ? "bg-[#A855F7]/10 border-[#A855F7]/40 shadow-[0_0_24px_-4px_rgba(168,85,247,0.18)]"
                    : "bg-[#111115]/30 border-[#F5F5F5]/5 hover:bg-[#A855F7]/5 hover:border-[#A855F7]/25"
                    }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-3.5">
                      {project.logo && (
                        <div className="w-[36px] h-[36px] bg-[#121212]/50 rounded-[10px] p-1.5 flex items-center justify-center border border-[#F5F5F5]/5">
                          <img
                            src={project.logo}
                            alt={`${project.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <div className="text-left">
                        <h4 className="font-bold text-[16px] text-[#F5F5F5] group-hover:text-[#A855F7] transition-colors duration-250">
                          {project.name}
                        </h4>
                      </div>
                    </div>
                    <div
                      className={`w-[24px] h-[24px] rounded-full flex items-center justify-center border transition-all duration-300 ${isActive
                        ? "bg-[#A855F7] border-[#A855F7] text-[#121212]"
                        : "border-[#F5F5F5]/10 text-[#F5F5F5]/40 group-hover:border-[#A855F7]/40 group-hover:text-[#A855F7]"
                        }`}
                    >
                      <ChevronRight size={14} />
                    </div>
                  </div>

                  <p className="text-[12.5px] leading-relaxed text-[#F5F5F5]/60 mt-3 text-left line-clamp-2">
                    {project.description_short}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-[#F5F5F5]/5 rounded-[6px] text-[10px] font-medium text-[#F5F5F5]/60 border border-[#F5F5F5]/5"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 bg-[#A855F7]/10 rounded-[6px] text-[10px] font-semibold text-[#A855F7]">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Right Side: Interactive Project Detail Viewer (7 Cols) */}
        <div className="lg:col-span-7 w-full lg:sticky lg:top-[100px]">
          <AnimatePresence mode="wait">
            {activeProject ? (
              <motion.div
                key={activeProject.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="w-full flex flex-col bg-[#111115]/45 border border-[#F5F5F5]/5 rounded-[24px] p-6 lg:p-7 backdrop-blur-xl"
              >
                {/* Media Gallery / Carousel */}
                <div className="relative w-full aspect-[16/10] bg-[#121212]/80 rounded-[16px] overflow-hidden border border-[#F5F5F5]/5 group/gallery">
                  {activeProject.imagesURLs && activeProject.imagesURLs.length > 0 ? (
                    <>
                      <img
                        src={activeProject.imagesURLs[imgIndex]}
                        alt={`${activeProject.name} screenshot`}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlays and arrows */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/50 to-transparent pointer-events-none" />

                      {activeProject.imagesURLs.length > 1 && (
                        <>
                          <button
                            onClick={(e) => prevImage(e, activeProject.imagesURLs.length)}
                            className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-[#A855F7] backdrop-blur-md text-white rounded-full transition-all duration-200 z-25 hover:scale-105"
                          >
                            <ChevronLeft size={18} />
                          </button>
                          <button
                            onClick={(e) => nextImage(e, activeProject.imagesURLs.length)}
                            className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-[#A855F7] backdrop-blur-md text-white rounded-full transition-all duration-200 z-25 hover:scale-105"
                          >
                            <ChevronRight size={18} />
                          </button>

                          {/* Bullet indicators */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-x-2 z-25">
                            {activeProject.imagesURLs.map((_, i) => (
                              <button
                                key={i}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setImgIndex(i);
                                }}
                                className={`h-[6px] rounded-full transition-all duration-300 ${i === imgIndex ? "w-[20px] bg-[#A855F7]" : "w-[6px] bg-white/40"
                                  }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#F5F5F5]/30">
                      No Screenshots Available
                    </div>
                  )}
                </div>

                {/* Project Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-4 mt-6 border-b border-[#F5F5F5]/5 pb-5">
                  <div className="flex items-center gap-x-3.5">
                    {activeProject.logo && (
                      <div className="w-[42px] h-[42px] bg-[#121212] rounded-[12px] p-2 flex items-center justify-center border border-[#F5F5F5]/10 shadow-inner">
                        <img
                          src={activeProject.logo}
                          alt={`${activeProject.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="text-left">
                      <h2 className="font-extrabold text-[22px] tracking-wide text-white">
                        {activeProject.name}
                      </h2>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center gap-x-3 shrink-0">
                    {activeProject.repoLinks ? (
                      <div className="flex gap-x-2.5">
                        <a
                          href={activeProject.repoLinks.frontend}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-x-1.5 px-3 py-1.5 border border-[#F5F5F5]/10 hover:border-[#A855F7]/30 hover:bg-[#A855F7]/5 rounded-[10px] text-[12px] text-[#F5F5F5]/70 hover:text-[#A855F7] transition-all duration-200"
                        >
                          <Terminal size={14} />
                          <span>Frontend Code</span>
                        </a>
                        <a
                          href={activeProject.repoLinks.backend}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-x-1.5 px-3 py-1.5 border border-[#F5F5F5]/10 hover:border-[#A855F7]/30 hover:bg-[#A855F7]/5 rounded-[10px] text-[12px] text-[#F5F5F5]/70 hover:text-[#A855F7] transition-all duration-200"
                        >
                          <Terminal size={14} />
                          <span>Backend Code</span>
                        </a>
                      </div>
                    ) : activeProject.repoLink ? (
                      <a
                        href={activeProject.repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-x-1.5 px-3.5 py-1.5 border border-[#F5F5F5]/10 hover:border-[#A855F7]/30 hover:bg-[#A855F7]/5 rounded-[10px] text-[12px] text-[#F5F5F5]/70 hover:text-[#A855F7] transition-all duration-200 font-medium"
                      >
                        <Terminal size={14} />
                        <span>Source Code</span>
                      </a>
                    ) : null}

                    {activeProject.projectLink && activeProject.projectLink !== "#" && (
                      <a
                        href={activeProject.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-x-1.5 px-4 py-2 bg-gradient-to-r from-[#A855F7] to-[#D946EF] text-[#121212] rounded-[10px] text-[12.5px] font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_22px_rgba(168,85,247,0.5)] transition-all duration-200 hover:scale-[1.03]"
                      >
                        <Globe size={14} />
                        <span>Visit Site</span>
                        <ExternalLink size={11} className="ml-0.5 opacity-80" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Extended Description */}
                <div className="flex flex-col items-start text-left mt-5">
                  <h5 className="text-[12px] font-bold text-[#F5F5F5]/45 uppercase tracking-widest mb-2">
                    Project Overview
                  </h5>
                  <p className="text-[13.5px] leading-relaxed text-[#F5F5F5]/75">
                    {activeProject.description_extended}
                  </p>
                </div>

                {/* Tech Stack Breakdown */}
                <div className="flex flex-col items-start text-left mt-6">
                  <h5 className="text-[12px] font-bold text-[#F5F5F5]/45 uppercase tracking-widest mb-2.5">
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.extended_tags
                      ? activeProject.extended_tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-[#A855F7]/10 border border-[#A855F7]/20 rounded-[8px] text-[#A855F7] text-[11.5px] font-semibold tracking-wide"
                        >
                          {tag}
                        </span>
                      ))
                      : activeProject.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-[#A855F7]/10 border border-[#A855F7]/20 rounded-[8px] text-[#A855F7] text-[11.5px] font-semibold tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="w-full flex items-center justify-center h-[350px] bg-[#111115]/30 border border-[#F5F5F5]/5 rounded-[24px]">
                <p className="text-[#F5F5F5]/30">Select a project to view details</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}