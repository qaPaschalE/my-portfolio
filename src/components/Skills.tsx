import React from "react";
import SkillCard from "./SkillCard";
import { IconInfo } from "../types/IconInfo";
export interface Skill {
  title: string;
  icons: IconInfo[];
}

// The complete list of skills data
const skillsData: Skill[] = [
  {
    title: "Programming Languages",
    icons: [
      { id: "nodejs", color: "#5FA04E" },
      { id: "java", color: "#e91e63" },
      { id: "cucumber", color: "#14b789" },
      { id: "python", color: "#3776AB" },
    ],
  },
  {
    title: " UI Test Automation",
    icons: [
      { id: "cypress", color: "#69D3A7" },
      { id: "playwright", color: "#2EAD33" },
      { id: "selenium", color: "#43B02A" },
      { id: "wdio", color: "#EA5906" },
      { id: "testSigma", color: "#09c0a1" },
      //   { id: "java", color: "#e91e63" },
      //   { id: "javascript", color: "#F7DF1E" },
      //   { id: "typescript", color: "#3178C6" },
      //   { id: "mocha", color: "#8D6748" },
      //   { id: "cucumber", color: "#14b789" },
    ],
  },
  {
    title: "Mobile Test Automation",
    icons: [
      { id: "testSigma", color: "#09c0a1" },
      { id: "appium", color: "#662D91" },
      { id: "playwright", color: "#2EAD33" },
      { id: "selenium", color: "#43B02A" },
      { id: "wdio", color: "#EA5906" },
    ],
  },

  {
    title: "API Testing Tools",
    icons: [
      { id: "postman", color: "#FF6C37" },
      { id: "selenium", color: "#43B02A" },
      { id: "playwright", color: "#2EAD33" },
      { id: "cypress", color: "#69D3A7" },
      { id: "testSigma", color: "#09c0a1" },
    ],
  },
  {
    title: "Load Testing Tools",
    icons: [
      { id: "k6", color: "#F46800" },
      { id: "grafana", color: "#F46800" },
      { id: "jmeter", color: "#D22128" },
      { id: "loadninja", color: "#FF6C37" },
    ],
  },
  {
    title: "Frameworks",
    icons: [
      { id: "cucumber", color: "#14b789" },
      { id: "mocha", color: "#8D6748" },
      { id: "testng", color: "#14b789" },
      { id: "react", color: "#61DAFB" },
      { id: "angular", color: "#DD1100" },
    ],
  },
  {
    title: "DevOps & CI/CD Tools",
    icons: [
      { id: "github", color: "#181717" },
      { id: "gitlab", color: "#FC6D27" },
      { id: "bitbucket", color: "#0052CC" },
      { id: "jenkins", color: "#D24939" },
      { id: "circleci", color: "#343434" },
    ],
  },

  {
    title: "Cloud Platforms",
    icons: [
      { id: "docker", color: "#2496ED" },
      { id: "amazon", color: "#FF9900" },
      { id: "gcloud", color: "#4285F4" },
      { id: "azure", color: "#4285F4" },
    ],
  },
  {
    title: "Product Management Tools",
    icons: [
      { id: "testmo", color: "#65C179" },
      // { id: "browserstack", color: "#2496ED" },
      { id: "jira", color: "#0052CC" },
      { id: "testrail", color: "#65C179" },
      // { id: "azure", color: "#4285F4" },
      // { id: "confluence", color: "#172B4D" },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="services section-padding" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12 mx-auto">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/handshake-man-woman-after-signing-business-contract-closeup.png"
                }
                className="avatar-image img-fluid"
                alt="Skills section visual"
              />
              <h2 className="text-white ms-4 mb-0">Core Skills And Tools</h2>
            </div>

            <div className="row pt-lg-5">
              {/* The map function now renders all 8 skill cards */}
              {skillsData.map((skill, index) => (
                <SkillCard
                  key={index}
                  title={skill.title}
                  icons={skill.icons}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
