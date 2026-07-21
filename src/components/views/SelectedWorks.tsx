import { motion } from "framer-motion";
import { Eye, ArrowUpRight } from "lucide-react";
import { projects } from "./AllPortfolio";
import ProjectSnippet from "../interactive/ProjectSnippet";

export default function SelectedWorks() {
  return (
    <section id="featured-projects" className="w-full flex flex-col items-start gap-y-8 mt-12">
      
      {/* Header */}
      <div className="flex flex-col gap-y-2 text-left w-full">
        <span className="text-[11px] uppercase tracking-widest text-[#a855f7] font-semibold">Featured Work</span>
        <div className="flex justify-between items-end w-full">
          <h2 className="text-[32px] font-bold tracking-tight">Selected Projects</h2>
          <a
            href="/projects"
            className="group flex items-center gap-x-1.5 text-[13px] font-semibold text-[#a855f7] hover:text-[#d946ef] transition-colors duration-200 cursor-pointer"
          >
            Explore all
            <ArrowUpRight size={15} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectSnippet project={project} key={index} index={index} />
        ))}
      </div>

      {/* Footer Explore Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full flex justify-center mt-4"
      >
        <a
          href="/projects"
          className="
            flex items-center gap-x-2 px-6 py-3.5 border-2 border-[#a855f7] rounded-[16px]
            text-[#a855f7] hover:text-[#121212] bg-transparent hover:bg-[#a855f7] font-bold text-[13px] uppercase tracking-wider
            transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(168,85,247,0.15)]
            hover:shadow-[0_0_24px_rgba(168,85,247,0.4)]
          "
        >
          <Eye size={16} />
          View All Projects
        </a>
      </motion.div>

    </section>
  );
}