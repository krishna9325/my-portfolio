import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import SkillsPage from "./Components/SkillsPage";
import ExperiencePage from "./Components/ExperiencePage";
import ProjectsPage from "./Components/ProjectsPage";
import ContactPage from "./Components/ContactPage";
import Navbar from "./Components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      {/* Sections with IDs */}
      <div
        style={{
          background: "linear-gradient(90deg, #101010 0%, #101010 100%)",
        }}
      >
        <section id="home">
          <HomePage />
          {/* <hr class="border border-white opacity-100 m-0" /> */}
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="skills">
          <SkillsPage />
        </section>
        <section id="experience">
          <ExperiencePage />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </div>
    </div>
  );
};

export default App;
