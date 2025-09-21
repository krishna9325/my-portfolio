import {
  ChevronRight,
  ExternalLink,
  Github,
  Youtube,
  Play,
} from "lucide-react";
import stockImg from "../images/stock.jpg";
import resumeImg from "../images/resume.jpg";
import cppImg from "../images/cpp.jpg";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Stock Market Breakouts App (Android)",
      description:
        "A full-featured stocks breakout Android app with real-time notifications, interactive chart views, progress tracking, and automated update reports.",
      image: stockImg,
      githubUrl: "https://github.com/krishna9325/stock-market",
      technologies: [
        "Android",
        "Java",
        "Firebase",
        "MVVM",
        "Room Database",
        "Firestore",
        "FCM",
      ],
      features: [
        "User authentication",
        "View breakout charts",
        "Update progress",
        "Modify progress",
        "Track progress",
        "Real-time stock breakout charts (intraday, swing, indices)",
      ],
    },
    {
      id: 2,
      title: "Expense Tracker",
      description:
        "Personal finance management app with budget planning and expense categorization.",
      image: stockImg,
      youtube: "https://play.google.com/store/apps/details?id=com.yourapp3",
      playstoreURL: "https://github.com/yourusername/expense-tracker",
      technologies: [
        "Android",
        "Kotlin",
        "Room",
        "Charts Library",
        "Biometric Auth",
      ],
      features: [
        "Expense categories",
        "Budget planning",
        "Visual reports",
        "Data export",
        "Secure login",
      ],
    },
    {
      id: 3,
      title: "Resume Builder App (Android)",
      description:
        "A resume builder Android app with 10K+ downloads on Play Store. Users can create multiple resumes, choose templates, customize fonts, colors, spacing, and download them as PDF. Built with MVVM architecture and Room Database for offline storage.",
      image: resumeImg,
      note: "Currently unavailable on Play Store as the application does not support the latest Android devices. It will be updated and brought back online soon.",
      youtube: "https://play.google.com/store/apps/details?id=your_app_id",
      playstoreURL: "https://github.com/yourusername/resume-builder",
      technologies: ["Android", "Java", "MVVM", "Room Database", "SQLite"],
      features: [
        "Create and manage multiple resumes offline",
        "Save resume data using Room persistence library",
        "Choose from multiple templates",
        "Customize fonts, colors, and spacing",
        "Download resumes in PDF format",
      ],
    },
    {
      id: 4,
      title: "Learn C++ App (Android)",
      description:
        "A C++ learning Android app with 40K+ downloads on Play Store. It offers tutorials, code examples, a built-in compiler, quizzes, and interview questions with a beautiful UI. Built with MVVM architecture and SQLite for managing quizzes and progress.",
      note: "Currently unavailable on Play Store as the application does not support the latest Android devices. It will be updated and brought back online soon.",
      image: cppImg,
      youtube: "https://youtu.be/your_demo_video",
      playstoreURL:
        "https://play.google.com/store/apps/details?id=com.yourapp2",
      technologies: ["Android", "Java", "MVVM", "SQLite", "RecyclerView"],
      features: [
        "Comprehensive C++ tutorials and code examples",
        "Built-in C++ compiler",
        "Quiz section with SQLite storage",
        "Interview questions for preparation",
        "Beautiful UI with expandable RecyclerView",
      ],
    },
  ];

  return (
    <div className="py-5 min-vh-100">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-3 fw-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="lead text-white mb-5">
            Showcase of my recent work and applications
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-6">
              <div className="card h-100 bg-white bg-opacity-10 border-0 text-white backdrop-blur">
                <div className="card-body p-4">
                  <h3 className="card-title fw-bold text-warning">
                    {project.title}
                  </h3>
                  <p className="card-text mb-3">{project.description}</p>
                  {project.note && (
                    <p className="card-text mb-3">
                      <strong className="text-danger fw-bold">Note:</strong>
                      <small> {project.note}</small>
                    </p>
                  )}

                  {/* Image preview */}
                  <div className="overflow-hidden rounded-top mb-3">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid w-100"
                      style={{
                        objectFit: "contain", // 👈 changed from "cover" to "contain"
                        maxHeight: "250px",
                        transition: "transform 0.3s ease",
                        marginTop: "20px",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.10)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <h6 className="fw-bold mb-2 text-warning">Key Features:</h6>
                    <ul className="list-unstyled">
                      {project.features.map((feature, i) => (
                        <li key={i} className="mb-1">
                          <ChevronRight
                            size={14}
                            className="text-warning me-2"
                          />
                          <small>{feature}</small>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-3">
                    <h6 className="fw-bold mb-2 text-warning">Technologies:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="badge bg-warning text-dark px-2 py-1"
                          style={{ fontSize: "0.7rem" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card-footer border-0 bg-transparent p-4 pt-0">
                  <div className="d-flex gap-2">
                    {project.youtube && (
                      <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-danger btn-sm flex-fill"
                      >
                        <Youtube size={16} className="me-1" />
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light btn-sm flex-fill"
                      >
                        <Github size={16} className="me-1" />
                        Source
                      </a>
                    )}
                    {project.playstoreURL && (
                      <a
                        href={project.playstoreURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light btn-sm flex-fill"
                      >
                        <Play size={16} className="me-1" />
                        Playstore
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a
            href="https://github.com/krishna9325?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-lg"
          >
            <Github className="me-2" />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
