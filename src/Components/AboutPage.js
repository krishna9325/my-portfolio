import profilePic from "../images/profile.jpeg";

const AboutPage = () => {
  return (
    <div className="py-5 min-vh-100">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="text-center">
              <div
                className="bg-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                style={{ width: "300px", height: "300px", overflow: "hidden" }}
              >
                <img
                  src={profilePic}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-white">
            <h2 className="display-4 fw-bold mb-4">About Me</h2>
            <p className="lead mb-4">
              I'm a passionate software enginner with expertise in Java
              ecosystem, Android development, and modern web technologies. With
              years of experience in building scalable applications, I've worked
              with various companies to deliver high-quality software solutions.
            </p>
            <p className="mb-4">
              Beyond coding, I'm dedicated to sharing knowledge through my
              YouTube channel where I teach Data Structures & Algorithms,
              helping students prepare for technical interviews and improve
              their problem-solving skills.
            </p>
            <div className="row g-4 mt-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="bg-warning rounded-circle p-2 me-3">
                    <span className="text-dark fw-bold">3.5+</span>
                  </div>
                  <span>Years of Experience</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="bg-warning rounded-circle p-2 me-3">
                    <span className="text-dark fw-bold">300+</span>
                  </div>
                  <span>YouTube Subscribers</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="bg-warning rounded-circle p-2 me-3">
                    <span className="text-dark fw-bold">800+</span>
                  </div>
                  <span>DSA Problems Solved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
