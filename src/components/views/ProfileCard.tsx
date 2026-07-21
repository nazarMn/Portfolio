import { Mail, Phone } from "lucide-react";
import nazarAvatar from "../../assets/nazar_avatar.jpg";
import githubIcon from "../../assets/socialMedia/github.svg";
// import telegramIcon from "../../assets/socialMedia/telegram.svg";
// import instIcon from "../../assets/socialMedia/inst.svg";
import useScrollToSection from "../utils/scrollToView";

export default function ProfileCard() {
  const scrollToSection = useScrollToSection();

  const socialMedia = [
    {
      icon: <img src={githubIcon} alt="GitHub" className="w-[18px] h-[18px]" />,
      link: "https://github.com/nazarMn",
      label: "GitHub",
    },
    // {
    //   icon: <img src={telegramIcon} alt="Telegram" className="w-[18px] h-[18px] filter invert" />,
    //   link: "",
    //   label: "Telegram",
    // },
    // {
    //   icon: <img src={instIcon} alt="Instagram" className="w-[18px] h-[18px] filter invert" />,
    //   link: "",
    //   label: "Instagram",
    // },
  ];

  const navLinks = [
    { label: "About Me", target: "about" },
    { label: "Selected Works", target: "featured-projects" },
    { label: "Tech Stack", target: "skills" },
    { label: "FAQ", target: "faq" },
  ];

  return (
    <aside className="w-full lg:w-[360px] lg:h-screen lg:sticky lg:top-0 bg-[#111115]/60 lg:bg-[#111115]/30 backdrop-blur-xl border-b lg:border-b-0 lg:border-r border-[#F5F5F5]/5 flex flex-col p-8 z-20 shrink-0 select-none">

      {/* Avatar & Info */}
      <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5 lg:gap-6 mt-2 lg:mt-6">
        <div className="relative w-[85px] h-[85px] lg:w-[130px] lg:h-[130px] rounded-full overflow-hidden border-2 border-[#a855f7]/30 shadow-[0_0_24px_rgba(168,85,247,0.15)] bg-gradient-to-b from-[#a855f7]/5 to-transparent shrink-0">
          <img
            src={`${nazarAvatar}?v=2`}
            alt="Nazar"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="text-left">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/25 text-[#10b981] text-[10px] font-semibold tracking-wider uppercase mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
            </span>
            Available for projects
          </div>

          <h1 className="text-[26px] lg:text-[34px] font-bold tracking-tight text-[#F5F5F5]">
            Nazar
          </h1>
          <p className="text-[13px] lg:text-[14px] font-light text-[#F5F5F5]/60 mt-1 leading-normal">
            Full-stack Developer &<br className="hidden lg:block" /> Software Engineer
          </p>
        </div>
      </div>

      <hr className="my-6 border-[#F5F5F5]/5 w-full" />

      {/* Navigation (Desktop only) */}
      <nav className="hidden lg:flex flex-col gap-y-3.5 text-left flex-1">
        {navLinks.map((link, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(link.target)}
            className="group w-fit flex items-center gap-x-2 text-[13px] font-medium tracking-wide text-[#F5F5F5]/45 hover:text-[#a855f7] cursor-pointer transition-colors duration-250 pb-[2px] relative"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#a855f7] transition-all duration-200" />
            {link.label}
          </button>
        ))}
      </nav>

      <hr className="hidden lg:block my-6 border-[#F5F5F5]/5 w-full" />

      {/* Footer Info & Actions */}
      <div className="flex flex-col gap-4 mt-auto w-full">
        {/* Contact Info */}
        <div className="flex flex-col gap-y-2 text-left">
          <a
            href="mailto:nazarmn2008@gmail.com"
            className="group flex items-center gap-x-2.5 text-[12.5px] text-[#F5F5F5]/60 hover:text-[#a855f7] transition-colors duration-200"
          >
            <Mail size={15} className="text-[#a855f7] shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="truncate">nazarmn2008@gmail.com</span>
          </a>
          <a
            href="tel:+380961162173"
            className="group flex items-center gap-x-2.5 text-[12.5px] text-[#F5F5F5]/60 hover:text-[#a855f7] transition-colors duration-200"
          >
            <Phone size={15} className="text-[#a855f7] shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span>+380 (96) 116-21-73</span>
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-x-3 items-center justify-start py-1">
          {socialMedia.map((media, index) => (
            <a
              href={media.link}
              key={index}
              target="_blank"
              rel="noreferrer"
              aria-label={media.label}
              className="w-[36px] h-[36px] rounded-lg border border-[#F5F5F5]/10 bg-[#F5F5F5]/5 text-[#F5F5F5]/60 hover:text-[#a855f7] hover:border-[#a855f7]/30 hover:bg-[#a855f7]/5 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-[0_4px_6px_rgba(0,0,0,0.1)] group"
            >
              <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-200 group-hover:scale-105 flex items-center justify-center">
                {media.icon}
              </span>
            </a>
          ))}
        </div>

        {/* Action Button */}
        {/* <a
          href="/CV-2026.pdf"
          download="Resume.pdf"
          className="
            flex-1 lg:w-full flex items-center justify-center gap-x-2
            px-4 py-3 border border-[#a855f7] rounded-[12px] bg-[#a855f7]/10 hover:bg-[#a855f7]
            text-[#a855f7] hover:text-[#121212] font-semibold text-[13px] uppercase tracking-wider
            transition-all duration-250 cursor-pointer text-center
            shadow-[0_0_12px_rgba(168,85,247,0.15)]
            hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]
          "
        >
          <Download size={15} />
          Get Resume
        </a> */}
      </div>

    </aside>
  );
}
