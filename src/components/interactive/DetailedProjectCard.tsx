import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CodeXml,
  Link as LinkIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { project } from "../views/AllPortfolio";

interface ExtendedProjectCardProps {
  project: project;
  index?: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export default function DetailedProjectCard({
  project,
  index = 0,
}: ExtendedProjectCardProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [imgAspect, setImgAspect] = useState(4 / 3);
  const reversed = index % 2 === 1;

  const handleImgLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalWidth && naturalHeight) {
      setImgAspect(naturalWidth / naturalHeight);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideDirection(1);
    setCurrentImgIndex((prev) =>
      prev === project.imagesURLs.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideDirection(-1);
    setCurrentImgIndex((prev) =>
      prev === 0 ? project.imagesURLs.length - 1 : prev - 1
    );
  };

  const goTo = (i: number) => {
    setSlideDirection(i > currentImgIndex ? 1 : -1);
    setCurrentImgIndex(i);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`w-full flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-10 lg:gap-8`}
    >
      <div
        className="relative w-full aspect-[var(--img-ar)] lg:aspect-auto lg:w-[55%] lg:min-h-[300px] lg:max-h-[320px] rounded-[10px] lg:rounded-[20px] overflow-hidden shadow-[0_0_18px_6px_rgba(168,85,247,0.22)] group/carousel shrink-0 transition-[aspect-ratio] duration-300"
        style={{ "--img-ar": imgAspect } as React.CSSProperties}
      >
        <AnimatePresence initial={false} custom={slideDirection}>
          <motion.div
            key={currentImgIndex}
            custom={slideDirection}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <img
              src={project.imagesURLs[currentImgIndex]}
              alt={`${project.name} screenshot ${currentImgIndex + 1}`}
              onLoad={handleImgLoad}
              className="block w-full h-full object-contain lg:object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/40 to-transparent pointer-events-none" />

        {project.imagesURLs.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-[#A855F7]/80 backdrop-blur-sm text-white rounded-full opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 transition-all duration-200 z-20"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-[#A855F7]/80 backdrop-blur-sm text-white rounded-full opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 transition-all duration-200 z-20"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-x-2 z-20">
              {project.imagesURLs.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(i);
                  }}
                  className={`h-[7px] rounded-full transition-all duration-300 ${i === currentImgIndex
                    ? "w-[22px] bg-[#A855F7] shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    : "w-[7px] bg-[#F5F5F5]/40 hover:bg-[#F5F5F5]/70"
                    }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="w-full lg:w-[45%] flex flex-col text-left">
        <div className="w-full max-w-full flex items-center justify-start gap-x-4 min-w-0">
          {project.logo && (
            <div className="w-[35px] h-[35px] shrink-0">
              <img
                src={project.logo}
                alt={`${project.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <h2 className="font-bold text-[26px] sm:text-[32px] text-[#F5F5F5] text-left min-w-0 truncate">
            {project.name}
          </h2>
        </div>

        <p className="text-[12px] leading-relaxed text-[#F5F5F5]/70 text-left mt-2">
          {project.description_extended}
        </p>

        <div className="w-full flex flex-wrap gap-2 mt-5">
          {project.extended_tags
            ? project.extended_tags.map((tag, i) => (
              <div
                key={i}
                className="px-3 py-1.5 bg-[#A855F7]/10 border border-[#A855F7]/20 rounded-[8px] text-[#A855F7] text-[12px] font-medium tracking-wide"
              >
                {tag.toUpperCase()}
              </div>
            ))
            : project.tags.map((tag, i) => (
              <div
                key={i}
                className="px-3 py-1.5 bg-[#A855F7]/10 border border-[#A855F7]/20 rounded-[8px] text-[#A855F7] text-[12px] font-medium tracking-wide"
              >
                {tag.toUpperCase()}
              </div>
            ))}
        </div>

        <div className="flex items-center gap-x-5 mt-6">
          {project.repoLinks ? (
            <>
              <a
                href={project.repoLinks.frontend}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-x-2 text-[#F5F5F5]/70 hover:text-[#A855F7] transition-all duration-200 hover:[filter:drop-shadow(0_0_8px_rgba(168,85,247,0.6))]"
              >
                <CodeXml size={22} />
                <span className="text-[13px]">Frontend</span>
              </a>
              <a
                href={project.repoLinks.backend}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-x-2 text-[#F5F5F5]/70 hover:text-[#A855F7] transition-all duration-200 hover:[filter:drop-shadow(0_0_8px_rgba(168,85,247,0.6))]"
              >
                <CodeXml size={22} />
                <span className="text-[13px]">Backend</span>
              </a>
            </>
          ) : project.repoLink ? (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-x-2 text-[#F5F5F5]/70 hover:text-[#A855F7] transition-all duration-200 hover:[filter:drop-shadow(0_0_8px_rgba(168,85,247,0.6))]"
            >
              <CodeXml size={22} />
              <span className="text-[13px]">Code</span>
            </a>
          ) : null}

          {project.projectLink && project.projectLink !== "#" && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-x-2 px-4 py-2 bg-[#A855F7] text-[#121212] rounded-[8px] text-[13px] font-semibold transition-transform duration-200 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              <LinkIcon size={16} />
              Live site
            </a>
          )}
        </div>
      </div>
    </motion.section>
  );
}
