import { useState } from "react";
import {
  Github,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Download,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:krishnachikhale174@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`${message}`)}`;

    // Open default mail client
    window.location.href = mailtoLink;

    // Reset form
    // setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="py-5 min-vh-100">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-3 fw-bold text-white mb-4">Get In Touch</h2>
          <p className="lead text-white mb-5">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="row g-5">
          <div className="col-lg-6">
            <div className="card bg-white bg-opacity-10 border-0 text-white backdrop-blur h-100">
              <div className="card-body p-5">
                <h3 className="fw-bold mb-4 text-warning">
                  Contact Information
                </h3>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <Mail className="text-warning me-3" size={24} />
                    <div>
                      <h6 className="mb-1 fw-bold">Email</h6>
                      <a
                        href="mailto:your.email@gmail.com"
                        className="text-light text-decoration-none"
                      >
                        krishnachikhale174@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <Phone className="text-warning me-3" size={24} />
                    <div>
                      <h6 className="mb-1 fw-bold">Phone</h6>
                      <a
                        href="tel:+919876543210"
                        className="text-light text-decoration-none"
                      >
                        +91 9175169772
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-4">
                    <MapPin className="text-warning me-3" size={24} />
                    <div>
                      <h6 className="mb-1 fw-bold">Location</h6>
                      <span className="text-light">
                        Udgir, Maharastra, India
                      </span>
                    </div>
                  </div>
                </div>

                <h4 className="fw-bold mb-3 text-warning">Connect With Me</h4>
                <div className="d-flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/krishnachikhale/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light d-flex align-items-center gap-2"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/krishna9325"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light d-flex align-items-center gap-2"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  <a
                    href="https://www.youtube.com/@codingX_krishna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger d-flex align-items-center gap-2"
                  >
                    <Youtube size={20} />
                    YouTube
                  </a>
                </div>

                <div className="mt-4 pt-4 border-top border-light border-opacity-25">
                  <a
                    href="/resume.pdf"
                    download
                    className="btn btn-warning d-flex align-items-center gap-2 w-100 justify-content-center"
                  >
                    <Download size={20} />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card bg-white bg-opacity-10 border-0 text-white backdrop-blur h-100">
              <div className="card-body p-5">
                <h3 className="fw-bold mb-4 text-warning">Send Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control border-0 text-dark"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control border-0 text-dark"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control border-0 text-dark"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control border-0 text-dark"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-warning w-100 py-3 fw-bold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
