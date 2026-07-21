import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { project } from "../views/AllPortfolio";

interface ProjectCardProps {
  project: project;
  index?: number;
}

export default function ProjectSnippet({ project, index = 0 }: ProjectCardProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSlideDirection(1);
    setCurrentImgIndex((prev) =>
      prev === project.imagesURLs.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSlideDirection(-1);
    setCurrentImgIndex((prev) =>
      prev === 0 ? project.imagesURLs.length - 1 : prev - 1
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="
        relative w-full flex flex-col h-auto min-h-[340px]
        rounded-[16px] bg-[#F5F5F5]/5 border border-transparent
        cursor-pointer transition-all duration-300 group
        hover:bg-[#A855F7]/5 hover:border-[#A855F7]/30 hover:-translate-y-1
        hover:shadow-[0_0_16px_rgba(168,85,247,0.15)]
        overflow-hidden
      "
    >
      <div className="relative w-full h-[180px] group/carousel bg-black/20 overflow-hidden">
        <AnimatePresence initial={false} custom={slideDirection}>
          <motion.img
            key={currentImgIndex}
            src={project.imagesURLs[currentImgIndex]}
            alt={`${project.name} screenshot ${currentImgIndex + 1}`}
            custom={slideDirection}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {project.imagesURLs?.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 hover:bg-black/80 backdrop-blur-sm text-white rounded-full opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 transition-all duration-200 z-20"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextImage}
              className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 hover:bg-black/80 backdrop-blur-sm text-white rounded-full opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 transition-all duration-200 z-20"
            >
              <ChevronRight size={18} />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-x-1.5 z-20">
              {project.imagesURLs.map((_, i) => (
                <div
                  key={i}
                  className={`h-[6px] rounded-full transition-all duration-300 ${
                    i === currentImgIndex
                      ? "w-[16px] bg-[#A855F7] shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                      : "w-[6px] bg-[#F5F5F5]/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col flex-1 p-[16px]">
        <div className="w-full flex justify-between items-start">
          <div className="flex items-center gap-x-3">
            {project.logo && (
              <div className="w-[32px] h-[32px]">
                <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <h4 className="font-semibold text-[18px] text-[#F5F5F5] group-hover:text-[#A855F7] transition-colors duration-200">
              {project.name}
            </h4>
          </div>

          <div className="flex gap-x-3">
            {project.repoLinks && (
              <div className="flex gap-x-2">
                <div className="flex items-center gap-x-1">
                  <a
                    href={project.repoLinks.frontend}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#F5F5F5]/60 hover:text-[#A855F7] transition-all duration-200 hover:[filter:drop-shadow(0_0_6px_rgba(168,85,247,0.8))]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Terminal size={22} />
                  </a>
                  <p className="text-[10px] text-[#F5F5F5]/70">(f)</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <a
                    href={project.repoLinks.backend}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#F5F5F5]/60 hover:text-[#A855F7] transition-all duration-200 hover:[filter:drop-shadow(0_0_6px_rgba(168,85,247,0.8))]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Terminal size={22} />
                  </a>
                  <p className="text-[10px] text-[#F5F5F5]/70">(b)</p>
                </div>
              </div>
            )}
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noreferrer"
                className="text-[#F5F5F5]/60 hover:text-[#A855F7] transition-all duration-200 hover:[filter:drop-shadow(0_0_6px_rgba(168,85,247,0.8))]"
                onClick={(e) => e.stopPropagation()}
              >
                <Terminal size={22} />
              </a>
            )}
            {project.projectLink && project.projectLink !== "#" && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noreferrer"
                className="text-[#F5F5F5]/60 hover:text-[#A855F7] transition-all duration-200 hover:[filter:drop-shadow(0_0_6px_rgba(168,85,247,0.8))]"
                onClick={(e) => e.stopPropagation()}
              >
                <Globe size={22} />
              </a>
            )}
          </div>
        </div>

        <p className="w-full flex-1 text-[13px] leading-relaxed text-[#F5F5F5]/70 text-justify mt-3 line-clamp-3">
          {project.description_short}
        </p>

        <div className="w-full flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, index) => (
            <div
              key={index}
              className="px-2.5 py-1 bg-[#A855F7]/10 border border-[#A855F7]/20 rounded-[6px] text-[#A855F7] text-[11px] font-medium tracking-wide"
            >
              {tag.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
