import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const HomePage = ({ setCurrentPage }) => {
  const [text, setText] = useState("");
  const fullText = "Software Enginner & DSA Instructor";

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-5 min-vh-100">
      <div className="min-vh-100 d-flex align-items-center">
        <div className="container text-center text-white">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-2 fw-bold mb-4 animate__animated animate__fadeInUp">
                Hi, I'm <span className="text-warning">Krishna Chikhale</span>
              </h1>
              <h2 className="h3 mb-4 text-light">
                {text}
                <span className="text-warning">|</span>
              </h2>
              <p className="lead mb-5 animate__animated animate__fadeInUp animate__delay-1s">
                Passionate about creating innovative solutions with Java,
                Android, Spring Boot, and modern web technologies. I also teach
                Data Structures & Algorithms on YouTube.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3 animate__animated animate__fadeInUp animate__delay-2s">
                <button
                  className="btn btn-warning btn-lg px-4"
                  onClick={() => handleScroll("projects")}
                >
                  View My Work <ChevronRight size={20} />
                </button>
                <button
                  className="btn btn-white bg-white text-black btn-lg px-4"
                  onClick={() => handleScroll("contact")}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
