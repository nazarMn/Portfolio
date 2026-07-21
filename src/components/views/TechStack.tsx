import { motion } from "framer-motion";

import html from "../../assets/techIcons/html.svg?react";
import css from "../../assets/techIcons/css.svg?react";
import javascript from "../../assets/techIcons/javascript.svg?react";
import typescript from "../../assets/techIcons/typescript.svg?react";
import react from "../../assets/techIcons/react.svg?react";
import electron from "../../assets/techIcons/electron.svg?react";
import tailwind from "../../assets/techIcons/tailwind.svg?react";
import zustand from "../../assets/techIcons/zustand.svg?react";

import nodejs from "../../assets/techIcons/nodeJS.svg?react";
import mongodb from "../../assets/techIcons/mongoDB.svg?react";
import swagger from "../../assets/techIcons/swagger.svg?react";
import postgresql from "../../assets/techIcons/postgresql.svg?react";
import nextjs from "../../assets/techIcons/nextJS.svg?react";

import shopify from "../../assets/techIcons/shopify.svg?react";
import figma from "../../assets/techIcons/figma.svg?react";
import git from "../../assets/techIcons/git.svg?react";
import docker from "../../assets/techIcons/docker.svg?react";

import type { FC, SVGProps } from "react";

type SVGComponent = FC<SVGProps<SVGSVGElement>>;

interface SkillItem {
  name: string;
  icon: SVGComponent;
}

const skillsData: Record<string, SkillItem[]> = {
  frontend: [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "TypeScript", icon: typescript },
    { name: "React", icon: react },
    { name: "Electron", icon: electron },
    { name: "Tailwind", icon: tailwind },
    { name: "Zustand", icon: zustand },
  ],
  backend: [
    { name: "Node.js", icon: nodejs },
    { name: "MongoDB", icon: mongodb },
    { name: "Swagger", icon: swagger },
    { name: "PostgreSQL", icon: postgresql },
    { name: "Next.js", icon: nextjs },
  ],
  tools: [
    // { name: "Shopify", icon: shopify },
    { name: "Figma", icon: figma },
    { name: "Git", icon: git },
    { name: "Docker", icon: docker },
  ],
};

export default function TechStack() {
  return (
    <section id="skills" className="w-full flex flex-col items-start gap-y-8 mt-12">

      {/* Header */}
      <div className="flex flex-col gap-y-2 text-left w-full">
        <span className="text-[11px] uppercase tracking-widest text-[#a855f7] font-semibold">Abilities</span>
        <h2 className="text-[32px] font-bold tracking-tight">Technical Stack</h2>
      </div>

      {/* Grid of group cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Frontend Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-[#F5F5F5]/5 bg-[#111115]/20 hover:border-[#a855f7]/15 p-6 rounded-[16px] backdrop-blur-md flex flex-col gap-y-5 text-left"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-[18px] text-[#F5F5F5]">Frontend</h3>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#a855f7] bg-[#a855f7]/10 px-2.5 py-0.5 rounded-full">Client</span>
          </div>
          <div className="h-[2px] w-full bg-gradient-to-r from-[#a855f7] to-transparent rounded-full" />
          <div className="grid grid-cols-2 gap-3.5">
            {skillsData.frontend.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="group flex items-center gap-x-2.5 hover:text-[#a855f7] transition-colors duration-200">
                  <div className="w-[20px] h-[20px] shrink-0 text-[#F5F5F5]/60 group-hover:text-[#a855f7] transition-colors duration-200">
                    <Icon className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[12px] text-[#F5F5F5]/70 group-hover:text-[#F5F5F5] transition-colors duration-200 font-medium">{item.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Backend Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-[#F5F5F5]/5 bg-[#111115]/20 hover:border-[#d946ef]/15 p-6 rounded-[16px] backdrop-blur-md flex flex-col gap-y-5 text-left"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-[18px] text-[#F5F5F5]">Backend</h3>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#d946ef] bg-[#d946ef]/10 px-2.5 py-0.5 rounded-full">Server</span>
          </div>
          <div className="h-[2px] w-full bg-gradient-to-r from-[#d946ef] to-transparent rounded-full" />
          <div className="grid grid-cols-2 gap-3.5">
            {skillsData.backend.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="group flex items-center gap-x-2.5 hover:text-[#d946ef] transition-colors duration-200">
                  <div className="w-[20px] h-[20px] shrink-0 text-[#F5F5F5]/60 group-hover:text-[#d946ef] transition-colors duration-200">
                    <Icon className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[12px] text-[#F5F5F5]/70 group-hover:text-[#F5F5F5] transition-colors duration-200 font-medium">{item.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Tools Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border border-[#F5F5F5]/5 bg-[#111115]/20 hover:border-[#a855f7]/15 p-6 rounded-[16px] backdrop-blur-md flex flex-col gap-y-5 text-left"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-[18px] text-[#F5F5F5]">Tools & Devops</h3>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#a855f7] bg-[#a855f7]/10 px-2.5 py-0.5 rounded-full">Systems</span>
          </div>
          <div className="h-[2px] w-full bg-gradient-to-r from-[#a855f7] to-transparent rounded-full" />
          <div className="grid grid-cols-2 gap-3.5">
            {skillsData.tools.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="group flex items-center gap-x-2.5 hover:text-[#a855f7] transition-colors duration-200">
                  <div className="w-[20px] h-[20px] shrink-0 text-[#F5F5F5]/60 group-hover:text-[#a855f7] transition-colors duration-200">
                    <Icon className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[12px] text-[#F5F5F5]/70 group-hover:text-[#F5F5F5] transition-colors duration-200 font-medium">{item.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>

    </section>
  );
}