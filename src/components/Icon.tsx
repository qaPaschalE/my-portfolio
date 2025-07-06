// src/components/Icon.tsx
import React, { ComponentType } from "react";
import {
  SiCypress,
  SiJavascript,
  SiTypescript,
  SiMocha,
  SiCucumber,
  SiSelenium,
  SiAppium,
  SiPostman,
  SiJenkins,
  SiGitlab,
  SiDocker,
  SiAmazon,
  SiGrafana,
  SiGithubactions,
  SiGithub,
  SiBitbucket,
  SiCircleci,
  SiGooglecloud,
  SiK6,
  SiApachejmeter,
  SiPython,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";

import { VscAzureDevops } from "react-icons/vsc";
import TestNGIcon from "../icons/TestNGIcon";
import { RiJavaFill } from "react-icons/ri";
import PlaywrightIcon from "../icons/PlaywrightIcon";
import TestSigmaIcon from "../icons/TestSigmaIcon";
import LoadNinjaIcon from "../icons/loadNinjaIcon";
import WdioIcon from "../icons/WdioIcon";
// Cast all icons to ComponentType with optional color prop
type IconComponent = ComponentType<{ color?: string }>;
const IconCypress = SiCypress as IconComponent;
const IconJavascript = SiJavascript as IconComponent;
const IconTypescript = SiTypescript as IconComponent;
const IconMocha = SiMocha as IconComponent;
const IconCucumber = SiCucumber as IconComponent;
const IconSelenium = SiSelenium as IconComponent;
const IconAppium = SiAppium as IconComponent;
const IconPostman = SiPostman as IconComponent;
const IconJenkins = SiJenkins as IconComponent;
const IconGitlab = SiGitlab as IconComponent;
const IconDocker = SiDocker as IconComponent;
const IconAmazon = SiAmazon as IconComponent;
const IconGrafana = SiGrafana as IconComponent;
const IconJava = RiJavaFill as IconComponent;
const IconPlaywright = PlaywrightIcon as IconComponent;
const IcontestSigma = TestSigmaIcon as IconComponent;
const IconGithubActions = SiGithubactions as IconComponent;
const IconGithub = SiGithub as IconComponent;
const IconBitbucket = SiBitbucket as IconComponent;
const IconCircleci = SiCircleci as IconComponent;
const IconGoogle = SiGooglecloud as IconComponent;
const IconAzure = VscAzureDevops as IconComponent;
const IconK6 = SiK6 as IconComponent;
const IconNodejs = FaNode as IconComponent;
const Iconjmeter = SiApachejmeter as IconComponent;
const IconLoadNinja = LoadNinjaIcon as IconComponent;
const IconWdio = WdioIcon as IconComponent;
const IconTestNG = TestNGIcon as IconComponent;
const IconPython = SiPython as IconComponent;

interface IconProps {
  id: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ id, color }) => {
  switch (id) {
    case "python":
      return <IconPython color={color} />;
    case "cypress":
      return <IconCypress color={color} />;
    case "javascript":
      return <IconJavascript color={color} />;
    case "typescript":
      return <IconTypescript color={color} />;
    case "mocha":
      return <IconMocha color={color} />;
    case "cucumber":
      return <IconCucumber color={color} />;
    case "selenium":
      return <IconSelenium color={color} />;
    case "appium":
      return <IconAppium color={color} />;
    case "postman":
      return <IconPostman color={color} />;
    case "jenkins":
      return <IconJenkins color={color} />;
    case "gitlab":
      return <IconGitlab color={color} />;
    case "docker":
      return <IconDocker color={color} />;
    case "amazon":
      return <IconAmazon color={color} />;
    case "grafana":
      return <IconGrafana color={color} />;
    case "java":
      return <IconJava color={color} />;
    case "playwright":
      return <IconPlaywright color={color} />;
    case "testSigma":
      return <IcontestSigma color={color} />;
    case "wdio":
      return <IconWdio color={color} />;
    case "githubActions":
      return <IconGithubActions color={color} />;
    case "github":
      return <IconGithub color={color} />;
    case "bitbucket":
      return <IconBitbucket color={color} />;
    case "circleci":
      return <IconCircleci color={color} />;
    case "gcloud":
      return <IconGoogle color={color} />;
    case "azure":
      return <IconAzure color={color} />;
    case "k6":
      return <IconK6 color={color} />;
    case "jmeter":
      return <Iconjmeter color={color} />;
    case "loadninja":
      return <IconLoadNinja color={color} />;
    case "testng":
      return <IconTestNG color={color} />;
    case "nodejs":
      return <IconNodejs color={color} />;
    default:
      return null;
  }
};

export default Icon;
