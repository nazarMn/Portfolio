import "./App.css";
import { Route, Routes } from "react-router-dom";
import DevProfile from "./components/views/DevProfile";
import SelectedWorks from "./components/views/SelectedWorks";
import TechStack from "./components/views/TechStack";
import FooterBlock from "./components/views/FooterBlock";
import AllPortfolio from "./components/views/AllPortfolio";
import QnA from "./components/views/QnA";
import ProfileCard from "./components/views/ProfileCard";
import ParticleBackground from "./components/visuals/ParticleBackground";

function App() {
  return (
    <>
      <ParticleBackground />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col lg:flex-row relative z-10 w-full bg-transparent overflow-hidden">
              <ProfileCard />
              <main className="flex-1 lg:h-screen lg:overflow-y-auto custom-scrollbar px-6 sm:px-10 lg:px-16 py-10 lg:py-16 flex flex-col gap-y-20 relative z-10">
                <DevProfile />
                <SelectedWorks />
                <TechStack />
                <QnA />
                <FooterBlock />
              </main>
            </div>
          }
        />
        <Route path="/projects" element={<AllPortfolio />} />
      </Routes>
    </>
  );
}

export default App;
