const SkillsPage = () => {
  const skills = [
    {
      name: "Java",
      level: 95,
      icon: "☕",
      description: "Expert in Core Java, OOP, Collections, Multithreading",
    },
    {
      name: "Data Structures & Algorithms",
      level: 95,
      icon: "🧮",
      description: "Problem Solving",
    },
    {
      name: "Spring Boot",
      level: 85,
      icon: "🚀",
      description: "REST APIs, WebSocket, redis, JPA, Security",
    },
    {
      name: "Microservices",
      level: 85,
      icon: "🔄",
      description: "Service Discovery, Circuit Breakers, API Gateway, gRPC",
    },
    {
      name: "React.js",
      level: 85,
      icon: "⚛️",
      description: "Hooks, Context, State Management, Testing",
    },
    {
      name: "Android Development",
      level: 85,
      icon: "📱",
      description: "Native Android, Kotlin, MVVM, Room Database",
    },
    {
      name: "Apache Kafka",
      level: 80,
      icon: "📊",
      description: "Event Streaming, Message Queues, Real-time Processing",
    },
    {
      name: "AWS",
      level: 70,
      icon: "☁️",
      description: "EC2, S3, Lambda, Api gateway, cloudfront",
    },
    {
      name: "Linux",
      level: 80,
      icon: "🐧",
      description: "Command Line, Shell Scripting, System Administration, C",
    },
    {
      name: "Docker",
      level: 80,
      icon: "🐳",
      description: "Containerization, Docker Compose, Multi-stage builds",
    },
    {
      name: "Databases",
      level: 80,
      icon: "🗄️",
      description: "Postgres, SQLite, MongoDB",
    },
  ];

  return (
    <div className="py-5 min-vh-100">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-3 fw-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="lead text-light mb-5">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={skill.name} className="col-lg-6 col-xl-4">
              <div className="card h-100 bg-white bg-opacity-10 border-0 text-white backdrop-blur">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <span className="fs-2 me-3">{skill.icon}</span>
                    <h5 className="card-title mb-0 fw-bold">{skill.name}</h5>
                  </div>
                  <p className="card-text mb-3 text-light">
                    {skill.description}
                  </p>
                  <div className="progress mb-2" style={{ height: "8px" }}>
                    <div
                      className="progress-bar bg-warning"
                      style={{
                        width: `${skill.level}%`,
                        animation: `progressAnimation 2s ease-in-out ${
                          index * 0.1
                        }s both`,
                      }}
                    ></div>
                  </div>
                  <small className="text-warning fw-bold">{skill.level}%</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes progressAnimation {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
        .backdrop-blur {
          backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  );
};

export default SkillsPage;
