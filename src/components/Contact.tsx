import React, { useState } from "react";
import { toast } from "react-toastify";

const CustomToastMessage = () => (
  <div>
    <strong>Success!</strong>
    <p style={{ margin: 0, fontSize: "14px" }}>Your message has been sent.</p>
  </div>
);

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success(<CustomToastMessage />, {
          icon: (
            <i className="bi bi-envelope-check" style={{ color: "white" }} />
          ),
          onClose: () => window.location.reload(),
        });

        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    }
  };

  return (
    <section className="contact section-padding" id="section_7">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/aerial-view-man-using-computer-laptop-wooden-table.jpg"
                }
                className="avatar-image img-fluid"
                alt=""
              />
              <h2 className="text-white ms-4 mb-0">Say Hi</h2>
            </div>
          </div>

          <div className="clearfix"></div>

          {/* --- RESTORED "STAY CONNECTED" COLUMN --- */}
          <div className="col-lg-3 col-md-6 col-12 pe-lg-0">
            <div className="contact-info contact-info-border-start d-flex flex-column">
              <strong className="site-footer-title d-block mb-3">
                Services
              </strong>
              <ul className="social-icon">
                <li className="social-icon-item">
                  <a
                    href="https://github.com/qaPaschalE"
                    className="social-icon-link bi-github"
                  ></a>
                </li>
                <li className="social-icon-item">
                  <a
                    href="https://www.linkedin.com/in/chetachi-enyimiri-05237a144/"
                    className="social-icon-link bi-linkedin"
                  ></a>
                </li>
                <li className="social-icon-item">
                  <a
                    href="https://x.com/paschal_cheps"
                    className="social-icon-link bi-twitter"
                  ></a>
                </li>
                {/* <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-instagram"></a>
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-youtube"></a>
                </li> */}
              </ul>

              <strong className="site-footer-title d-block mt-4 mb-3">
                Start a Project
              </strong>
              <p className="mb-0">I’m available for freelance projects</p>
            </div>
          </div>

          {/* --- RESTORED "ABOUT" & CONTACT INFO COLUMN --- */}
          <div className="col-lg-3 col-md-6 col-12 ps-lg-0">
            <div className="contact-info d-flex flex-column">
              <strong className="site-footer-title d-block mb-3">About</strong>
              <p className="mb-2">
                I am a professional Software Quality Assurance Engineer. Feel
                free to get in touch with me.
              </p>

              <strong className="site-footer-title d-block mt-4 mb-3">
                Email
              </strong>
              <p>
                <a href="mailto:paschal.enyimiri@gmail.com">
                  paschal.enyimiri@gmail.com
                </a>
              </p>

              <strong className="site-footer-title d-block mt-4 mb-3">
                Call
              </strong>
              <p className="mb-0">
                <a href="tel:+2347062641241">+2347062641241</a>
              </p>
            </div>
          </div>

          {/* --- FUNCTIONAL CONTACT FORM --- */}
          <div className="col-lg-6 col-12 mt-5 mt-lg-0">
            <form
              action="https://formspree.io/f/mjkrdopo"
              method="POST"
              className="custom-form contact-form"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email address</label>
                  </div>
                </div>
                <div className="col-lg-12 col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Tell me about the project"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <label htmlFor="message">Tell me about the project</label>
                  </div>
                </div>
                <div className="col-lg-3 col-12 ms-auto">
                  <button type="submit" className="form-control">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
