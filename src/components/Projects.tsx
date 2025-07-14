import React from "react";

interface ProjectProps {
  tag: string;
  title: string;
  description: string;
  link?: string;
}

const ProjectItem: React.FC<ProjectProps> = ({
  tag,
  title,
  description,
  link,
}) => {
  const getImageUrl = () => {
    if (tag === "NPM Package") {
      return process.env.PUBLIC_URL + "/images/projects/npm_image.png";
    }
    if (tag === "Maven Package") {
      return (
        process.env.PUBLIC_URL + "/images/projects/Apache_Maven_logo.svg.png"
      );
    }
    if (tag === "CI/CD") {
      return (
        process.env.PUBLIC_URL + "/images/projects/testPipelineprocess.png"
      );
    }
    return (
      process.env.PUBLIC_URL + "/images/projects/default_project_image.png"
    );
  };

  const imageElement = (
    <img src={getImageUrl()} className="projects-image img-fluid" alt={title} />
  );

  return (
    <div className="col-lg-3 col-md-6 col-12 mb-4">
      <div className="projects-thumb">
        <div className="projects-info">
          <small className="projects-tag">
            {tag === "NPM Package" && (
              <i className="bi-box-seam project-tag-icon"></i>
            )}
            {tag === "Maven Package" && (
              <i className="bi-filetype-java project-tag-icon"></i>
            )}
            {tag === "CI/CD" && (
              <i className="bi-filetype-ci-cd project-tag-icon"></i>
            )}
            {tag}
          </small>
          <h3 className="projects-title">{title}</h3>
          <p>{description}</p>
        </div>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="popup-image"
          >
            {imageElement}
          </a>
        ) : (
          imageElement
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      tag: "NPM Package",
      title: "playwright-cucumber-ts-steps",
      description: "Run Playwright using Cucumber BDD syntax with ease.",
      link: "https://www.npmjs.com/package/playwright-cucumber-ts-steps",
    },
    {
      tag: "NPM Package",
      title: "K6-cucumber-steps",
      description: "Run k6 performance tests using Cucumber BDD syntax.",
      link: "https://www.npmjs.com/package/k6-cucumber-steps",
    },
    {
      tag: "Maven Package",
      title: "Selenium-cucumber-java-steps",
      description:
        "Selenium WebDriver with Java and Cucumber testing automation steps definition.",
      link: "https://github.com/qaPaschalE/selenium-cucumber-java-steps",
    },
    {
      tag: "NPM Package",
      title: "k6-slack-ms-teams-reporter",
      description:
        "Send k6 performance/load tests reports to Slack and MS Teams.",
      link: "https://www.npmjs.com/package/k6-slack-ms-teams-reporter",
    },
    {
      tag: "CI/CD",
      title: "Automation Pipeline Setup",
      description:
        "Set up test automation pipelines for regression with daily scheduled reporting on GitLab.",
    },
    // The "Internal Tools" project has been removed from this list.
  ];

  return (
    <section className="projects section-padding" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12 ms-auto">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
              <img
                src={process.env.PUBLIC_URL + "/images/projectsImage.png"}
                className="avatar-image img-fluid"
                alt=""
              />
              <h2 className="text-white ms-4 mb-0">Projects</h2>
            </div>
          </div>
          <div className="clearfix"></div>
          {projects.map((proj, index) => (
            <ProjectItem key={index} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
