import style from './Contect.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome for icons

function Contect() {
  return (
    <>
      <div className={`container ${style.containers}`}>
        <div className="row align-items-center">
          <div className="col-md-6 col-12 d-flex justify-content-center mt-4 mt-md-5">
            <img
              style={{
                width: "20rem",
                height: "20rem",
                borderRadius: "50%",
              }}
              className="img-fluid"
              src="/media/images/profile.jpg"
              alt="Profile"
            />
          </div>

          <div className="col-md-6 col-12 text-center text-md-start mt-4 mt-md-5">
            <h4
              className={`text-black fw-bold fs-4 mt-3 mt-md-5 text-primary ${style.about}`}
              style={{ fontFamily: "monospace" }}
            >
              Hello! I'm Dikshit, a third-year Computer Science student specializing in the MERN stack, with a strong passion for developing efficient and innovative solutions. As a full-stack software engineer, I thrive in creating responsive, user-friendly applications. My journey in tech has been fueled by a commitment to mastering the latest web technologies and delivering impactful projects.
            </h4>

            {/* Social Media Links Section */}
            <div className="d-flex justify-content-center justify-content-md-start mt-4">
              <a
                href="https://www.linkedin.com/in/dikshit-rawal-771322244/"
                className={`me-3 ${style.socialIcon}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a
                href="https://github.com/rawal21"
                className={`me-3 ${style.socialIcon}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contect;
