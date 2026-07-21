import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import githubIcon from "../../assets/socialMedia/github.svg";
// import instIcon from "../../assets/socialMedia/inst.svg";
// import telegramIcon from "../../assets/socialMedia/telegram.svg";
import useScrollToSection from "../utils/scrollToView";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const ContactRow = ({
  href,
  Icon,
  label,
}: {
  href: string;
  Icon: typeof Mail;
  label: string;
}) => (
  <a
    href={href}
    className="group flex items-center gap-x-2 w-fit transition-colors duration-200"
  >
    <Icon className="w-4 h-4 text-[#A855F7] opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
    <span className="text-[14px] text-[#F5F5F5]/50 group-hover:text-[#F5F5F5]/90 transition-colors duration-200">
      {label}
    </span>
  </a>
);

export default function FooterBlock() {
  const scrollToSection = useScrollToSection();
  const socialMedia = [
    { icon: githubIcon, alt: "Github", link: "https://github.com/nazarMn" },
    // { icon: telegramIcon, alt: "Telegram", link: "" },
    // {
    //   icon: instIcon,
    //   alt: "Instagram",
    //   link: "",
    // },
  ];

  const links = [
    {
      label: "About Me",
      link: "about",
    },
    {
      label: "Projects",
      link: "featured-projects",
    },
    {
      label: "Skills",
      link: "skills",
    },
    {
      label: "FAQ",
      link: "faq",
    },
  ];

  return (
    <footer className="w-full border-t border-[#F5F5F5]/10 p-[20px] lg:p-[40px] relative z-10 overflow-hidden">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 overflow-hidden">
        <motion.div className="flex flex-col gap-y-4" {...fadeUp(0)}>
          <div className="text-left">
            <h1 className="uppercase font-bold text-[32px] tracking-wider">
              Let's build together  {/* <span className="text-[#A855F7]">.</span> */}
            </h1>
            <p className="text-[12px] text-[#F5F5F5]/40 mt-1 max-w-[380px]">
              Looking for a full-stack engineer, need to automate web workflows, or want to discuss a new project? Let's connect.
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <ContactRow
              href={`mailto:nazarmn2008@gmail.com`}
              Icon={Mail}
              label="nazarmn2008@gmail.com"
            />
            <ContactRow
              href={`tel:+380961162173`}
              Icon={Phone}
              label="+380 (96) 116-21-73"
            />
          </div>
        </motion.div>

        <motion.div className="flex flex-col gap-y-6" {...fadeUp(0.15)}>
          <div className="flex gap-x-5">
            {socialMedia.map((media, i) => (
              <a
                href={media.link}
                key={i}
                target="_blank"
                className="w-[26px] h-[26px]"
              >
                <img
                  src={media.icon}
                  alt={media.alt}
                  className="w-full h-full icon-hover"
                />
              </a>
            ))}
          </div>
          <nav className="flex flex-col gap-y-1">
            {links.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.link)}
                className="
      relative text-[13px] tracking-[0.07em] font-normal
      text-[#F5F5F5]/40 cursor-pointer no-underline pb-[3px] w-fit
      transition-[color,text-shadow,filter] duration-200
      after:content-[''] after:absolute after:bottom-0
      after:left-1/2 after:right-1/2 after:h-px
      after:bg-[#F5F5F5]/50
      after:transition-[left,right,box-shadow] after:duration-250
      hover:text-[#F5F5F5]/95
      hover:[text-shadow:0_0_8px_rgba(255,255,255,0.4)]
      hover:[filter:drop-shadow(0_0_6px_rgba(168,85,247,0.8))_drop-shadow(0_0_12px_rgba(168,85,247,0.5))]
      hover:after:left-0 hover:after:right-0
      hover:after:[box-shadow:0_0_6px_rgba(255,255,255,0.5)]
    "
              >
                {link.label}
              </button>
            ))}
          </nav>
        </motion.div>
      </div>
      <motion.div className="flex flex-col gap-y-4 mt-8" {...fadeUp(0)}>
        <p className="text-[11px] text-[#F5F5F5]/20 w-full flex justify-center">
          © {new Date().getFullYear()} Nazar
        </p>
      </motion.div>
    </footer>
  );
}
