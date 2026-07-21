import { useNavigate, useLocation } from "react-router-dom";

export default function useScrollToSection() {
  const navigate = useNavigate();
  const location = useLocation();

  return (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };
}