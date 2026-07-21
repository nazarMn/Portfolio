import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Globe } from "lucide-react";

const languages = [
  { language: "Ukrainian", level: "Native", percentage: 100 },
  { language: "English", level: "B2", percentage: 65 },
];

const timelineEvents = [
  {
    year: "2025 - Present",
    type: "education",
    title: "Lviv Polytechnic National University student",
    institution: "Lviv Polytechnic",
    description: "Gained foundational knowledge in smart systems and computational intelligence, alongside core principles of algorithms, database design.",
  },
  {
    year: "2024 - 2025",
    type: "experience",
    title: "Freelance projects within Creator IT Academy",
    institution: "Creator IT Academy",
    description: "Freelance projects within Creator IT Academy Developed custom client pages and commercial-focused web project under academic mentorship.",
  },
  {
    year: "2024 - Present",
    type: "experience",
    title: "Pet-Projects & Open Source",
    institution: "GitHub",
    description: "Engineered website ,portfolios,using React, TypeScript, Node.js.",
  },
  {
    year: "2022 - 2025",
    type: "education",
    title: "Creator IT Academy",
    institution: "Extended Web Development & UI/UX Streams",
    description: "Completed extended Web Development course.",
  },
  {
    year: "2014 - 2025",
    type: "education",
    title: "School of Shklo",
    institution: "Secondary Education",
    description: "General primary and secondary education.",
  },
];

export default function DevProfile() {
  return (
    <section id="about" className="w-full flex flex-col items-start gap-y-12">

      {/* Title */}
      <div className="flex flex-col gap-y-2 text-left">
        <span className="text-[11px] uppercase tracking-widest text-[#a855f7] font-semibold">About Me</span>
        <h2 className="text-[32px] font-bold tracking-tight">Biography & Path</h2>
      </div>

      {/* Intro Text */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[14px] leading-relaxed text-[#F5F5F5]/70 text-left max-w-[800px]"
      >
        Hi! 👋 I’m Nazar, a full-stack developer and student from Lviv, Ukraine. I build high-performance, responsive web applications with a focus on clean, scalable code.

        My IT journey began with algorithms and self-directed learning, quickly evolving into designing robust backend systems and databases, as well as frontend development. I enjoy tackling complex technical challenges and making applications efficient—both under the hood and in the user interface.

        I am responsible and result-oriented in my work, while being easy-going and always open to learning new things outside of it. I know how to manage deadlines, adapt quickly, and value great teamwork where everyone is driven by shared success.
      </motion.p>

      {/* Languages Panel */}
      <div className="w-full max-w-[800px] flex flex-col gap-y-4 text-left border border-[#F5F5F5]/5 bg-[#111115]/30 p-6 rounded-[16px] backdrop-blur-md">
        <div className="flex items-center gap-x-2.5 text-[#a855f7]">
          <Globe size={18} />
          <h3 className="font-bold text-[16px] uppercase tracking-wider">Languages</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          {languages.map((lang, index) => (
            <div key={index} className="flex flex-col gap-y-2">
              <div className="flex justify-between text-[12px] text-[#F5F5F5]/70">
                <span>{lang.language}</span>
                <span className="font-semibold text-[#F5F5F5]">{lang.level}</span>
              </div>
              <div className="h-[6px] w-full bg-[#a855f7]/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.15 }}
                  className="h-full bg-gradient-to-r from-[#a855f7] to-[#d946ef] rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="w-full max-w-[800px] flex flex-col gap-y-8 text-left mt-4">
        <h3 className="font-bold text-[20px] text-[#F5F5F5] tracking-tight">Education & Experience Timeline</h3>

        <div className="relative border-l border-[#F5F5F5]/10 pl-6 ml-4 flex flex-col gap-y-8">
          {timelineEvents.map((item, index) => {
            const isEducation = item.type === "education";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Point */}
                <div className={`absolute -left-[31px] top-1.5 w-[9px] h-[9px] rounded-full border-2 border-[#0a0a0c] ${isEducation
                  ? "bg-[#a855f7] shadow-[0_0_8px_#a855f7]"
                  : "bg-[#d946ef] shadow-[0_0_8px_#d946ef]"
                  }`} />

                {/* Card Container */}
                <div className="flex flex-col gap-y-1.5 bg-[#111115]/20 border border-[#F5F5F5]/5 hover:border-[#a855f7]/10 p-5 rounded-[12px] transition-colors duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${isEducation
                      ? "bg-[#a855f7]/10 text-[#a855f7]"
                      : "bg-[#d946ef]/10 text-[#d946ef]"
                      }`}>
                      {item.year}
                    </span>
                    <span className="text-[11px] text-[#F5F5F5]/45 flex items-center gap-x-1">
                      {isEducation ? <GraduationCap size={13} /> : <Briefcase size={12} />}
                      {item.institution}
                    </span>
                  </div>
                  <h4 className="font-bold text-[16px] text-[#F5F5F5]">{item.title}</h4>
                  <p className="text-[12px] leading-relaxed text-[#F5F5F5]/60 mt-1">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}