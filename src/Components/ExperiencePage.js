import { ChevronRight } from "lucide-react";

const ExperiencePage = () => {
  const experiences = [
    {
      id: 1,
      company: "Infosys private Ltd",
      position: "Specialist programmer",
      duration: "May 2022 - Jan 2025",
      location: "Hybrid(Bangalore/Remote)",
      description:
        "Engineered high-performance I/O, monitoring, and automation for distributed systems",
      technologies: [
        "Java",
        "Swing",
        "Python",
        "Linux",
        "Shell scripting",
        "Jetty",
        "Docker",
        "NIO",
        "React",
        "C++",
      ],
      achievements: [
        "Engineered Java NIO + POSIX shared memory for terabyte-scale DDN I/O, boosting throughput by 40%.",
        "Developed test infra for many-to-many Linux data transfer mappings, expanding coverage.",
        "Automated NFS/RDMA (RoCE) I/O tests with Jython, reducing validation time by 90%.",
        "Built monitoring dashboard (InfiniBand, GPU, memory, containers, nodes), reducing troubleshooting by 87%.",
        "Designed cron-driven rsync pipeline with retries, logging, and pause/resume, removing manual monitoring.",
        "Created Python client for image server, enabling non-browser access and reducing workflow dependency.",
        "Dockerized two web services — Image Server and Data Management System (DMS) — in a distributed environment",
      ],
    },
    {
      id: 2,
      company: "Myelin foundry pvt ltd",
      position: "SDE intern",
      duration: "Jun 2020 - Jun 2021",
      location: "Remote",
      description:
        "Developed native Android applications with focus on user experience and performance. Integrated Firebase services and implemented clean architecture patterns.",
      technologies: [
        "Android",
        "Kotlin",
        "Java",
        "AWS",
        "OpenGL",
        "Exoplayer",
        "Express.js",
        "Postgres",
        "React.js",
      ],
      achievements: [
        "Enhanced a media player app and optimized cloud operations, achieving a 40% reduction in cloud costs.",
        "Developed RESTful APIs with Express.js and built an interactive analytics dashboard using React.js.",
        "Resolved critical client integration issues for 5M+ active users, ensuring uninterrupted functionality.",
        "Transferred U and V plane splitting logic to OpenGL, significantly reducing processing costs.",
        "Integrated RenderScript flow into existing infrastructure, improving compatibility with lower-end Snapdragon devices and expanding device coverage by 28%.",
      ],
    },
  ];

  return (
    <div className="py-5 min-vh-100">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-3 fw-bold text-white mb-4">Work Experience</h2>
          <p className="lead text-white mb-5">
            My professional journey and key accomplishments
          </p>
        </div>

        <div
          className="timeline position-relative mx-auto"
          style={{ maxWidth: "900px" }}
        >
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="timeline-item d-flex mb-5 position-relative"
            >
              {/* Circle */}
              <div className="timeline-marker me-4"></div>

              {/* Card */}
              <div className="card bg-white bg-opacity-10 border-0 text-white backdrop-blur flex-grow-1">
                <div className="card-body p-4">
                  <h3 className="card-title fw-bold mb-2 text-warning">
                    {exp.position}
                  </h3>
                  <h5 className="card-subtitle mb-3 text-light">
                    {exp.company}
                  </h5>
                  <p className="text-warning fw-bold mb-1">{exp.duration}</p>
                  <p className="mb-3">{exp.location}</p>
                  <p className="card-text mb-3">{exp.description}</p>

                  <div className="mb-3">
                    <h6 className="fw-bold mb-2 text-warning">
                      Key Implementations:
                    </h6>
                    <ul className="list-unstyled">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="mb-1">
                          <ChevronRight
                            size={16}
                            className="text-warning me-2"
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h6 className="fw-bold mb-2 text-warning">
                      Technologies Used:
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="badge bg-warning text-dark px-3 py-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
