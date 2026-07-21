import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const questions = [
  {
    question: "What are your primary areas of technical expertise?",
    answer: "I specialize in building full-stack web applications using React, Next.js, Node.js, and TypeScript, alongside writing high-performance web automation solutions. Concurrently, I am deeply expanding my expertise in C/C++ for low-level logic and performance-critical systems, as well as Python for scripting and data processing."
  },
  {
    question: "What are you currently studying at Lviv Polytechnic?",
    answer: "I am specializing in 'Computational Intelligence of Smart Systems'. My studies provide me with a rigorous theoretical foundation in algorithms, computer networks, and systems programming, which I directly translate into writing optimized full-stack software and high-performance applications."
  },
  {
    question: "How do you integrate AI tools in your engineering workflow?",
    answer: "I leverage AI as a powerful copilot for rapid prototyping, syntax reference, and refactoring, frequently deploying local open-source models on my own hardware. However, I maintain a strict rule: I never ship code without a thorough manual review, custom debugging, and architectural refinement to ensure full code ownership and maintainability."
  },
  {
    question: "What is your experience with freelance and team collaboration?",
    answer: "I have hands-on experience working on independent freelance projects and collaborating closely with other developers. I am fully comfortable with Agile workflows, strict Git version control, structured peer reviews, and maintaining transparent communication to consistently deliver high-quality code on schedule."
  },
  {
    question: "Are you open to different types of roles or projects?",
    answer: "Yes, I am actively looking for full-stack developer roles, internships, or freelance projects. I'm highly adaptable and ready to take on any challenging development tasks—whether it's web apps, databases, or automation—as long as my current skillset aligns with your needs."
  },
];

export default function QnA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full flex flex-col items-start gap-y-8 mt-12 mb-12">

      {/* Header */}
      <div className="flex flex-col gap-y-2 text-left w-full">
        <span className="text-[11px] uppercase tracking-widest text-[#a855f7] font-semibold">Inquiries</span>
        <h2 className="text-[32px] font-bold tracking-tight">Questions & Answers</h2>
      </div>

      <div className="w-full max-w-[800px] flex flex-col gap-3 z-10 overflow-hidden">
        {questions.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`w-full rounded-[12px] border transition-colors duration-300 ${isOpen
                ? "border-[#a855f7]/30 bg-[#a855f7]/5"
                : "border-[#F5F5F5]/10 bg-[#F5F5F5]/5 hover:border-[#a855f7]/20"
                }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
              >
                <span
                  className={`text-[14px] sm:text-[15px] font-medium transition-colors duration-200 ${isOpen ? "text-[#a855f7]" : "text-[#F5F5F5]"
                    }`}
                >
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className={`shrink-0 ${isOpen ? "text-[#a855f7]" : "text-[#F5F5F5]/50"
                    }`}
                >
                  <Plus size={18} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-[13px] sm:text-[14px] leading-relaxed text-[#F5F5F5]/70 text-left font-mono">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}