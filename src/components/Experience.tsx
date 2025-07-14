import React from "react";

interface ExperienceProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  tools?: string;
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  title,
  company,
  duration,
  description,
  tools,
}) => (
  <div className="col-lg-6 col-12 mb-4">
    <div className="profile-thumb">
      <div className="profile-title">
        <h4 className="mb-0">{title}</h4>
        <p>
          <strong>{company}</strong> | <em>{duration}</em>
        </p>
      </div>
      <div className="profile-body">
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {tools && (
          <p>
            <strong>Tools:</strong> {tools}
          </p>
        )}
      </div>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const experiences: ExperienceProps[] = [
    {
      title: "Senior Quality Assurance Engineer",
      company: "Indicina",
      duration: "April 2022 - Present",
      description: [
        "Create and Organise Workshops and Seminars on new processes and latest updates in the QA.",
        "Lead and mentor a team of QA Engineers.",
        "Creating and maintaining automated tests.",
      ],
      tools: "Cypress, Cucumber, Typescript, Postman, k6-cucumber-steps",
    },
    {
      title: "Software Quality Assurance Analyst",
      company: "SeamlessHR (contract)",
      duration: "Feb 2025 - Present",
      description: [
        "Lead and mentor a team of QA Automation engineers, fostering a collaborative and high-performance culture.",
        "Creating and maintaining automated test pipelines.",
        "Gained Mentorship skills, Playwright testing.",
      ],
      tools: "Cypress, Cucumber, Postman, k6-cucumber-steps, Typescript",
    },
    {
      title: "QA Tech Lead",
      company: "Deel (contract)",
      duration: "Dec 2023 - Feb 2024",
      description: [
        "Organized workshops on new QA processes.",
        "Led and mentored a team of QA engineers.",
        "Created and maintained automated tests.",
      ],
      tools: "Playwright, Postman, JavaScript",
    },
    {
      title: "Senior Quality Assurance Engineer/Tech Lead",
      company: "Kobo360 (Tech Adoption team)",
      duration: "Jun 2019 - Nov 2022",
      description: [
        "Developed Project Test Strategy and Test Cases.",
        "Performed manual and automation testing.",
        "Led tech adoption team with resolution of tech issues.",
        "Worked with DevOps teams to manage test CI/CD pipelines.",
      ],
      tools: "Postman, Cypress",
    },
  ];

  return (
    <section className="featured section-padding" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12 mx-auto">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
              <h2 className="text-white ms-4 mb-0">Work Experience</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
