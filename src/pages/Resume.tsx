// components
import EducationCard from "../components/Card/SolidCard";
import GradientCard from "../components/Card/GradientCard";
import ContentTab from "../components/Tabs/ContentTab";
import ExperienceSection from "../components/Typography/ExperienceSection";
import Typography from "../components/Typography/Typography";
import TextButton from "../components/Button/TextButton";
import BasicCard from "../components/Card/BasicCard";

// assets
import CssIcon from "../icons/CssIcon";
import FigmaIcon from "../icons/FigmaIcon";
import HtmlIcon from "../icons/HtmlIcon";
import IllustratorIcon from "../icons/IllustratorIcon";
import JavascriptIcon from "../icons/JavascriptIcon";
import MayaIcon from "../icons/MayaIcon";
import PhotoshopIcon from "../icons/PhotoshopIcon";
import ReactIcon from "../icons/ReactIcon";
import TailwindIcon from "../icons/TailwindIcon";
import ThreeIcon from "../icons/ThreejsIcon";
import UnityIcon from "../icons/UnityIcon";
import XdIcon from "../icons/XdIcon";

const resumeArray = ["Experience", "Education", "Tools", "Skills"];

const toolsArray = [
  {
    name: "Figma",
    icon: <FigmaIcon />,
  },
  {
    name: "AdobeXD",
    icon: <XdIcon />,
  },
  {
    name: "ReactJS",
    icon: <ReactIcon />,
  },
  {
    name: "Tailwind",
    icon: <TailwindIcon />,
  },
  {
    name: "HTML",
    icon: <HtmlIcon />,
  },
  {
    name: "CSS",
    icon: <CssIcon />,
  },
  {
    name: "JavaScript",
    icon: <JavascriptIcon />,
  },
  {
    name: "Illustrator",
    icon: <IllustratorIcon />,
  },
  {
    name: "Photoshop",
    icon: <PhotoshopIcon />,
  },
  {
    name: "Threejs",
    icon: <ThreeIcon />,
  },
  {
    name: "Unity",
    icon: <UnityIcon />,
  },
  {
    name: "Maya",
    icon: <MayaIcon />,
  },
];

const experienceArray = [
  {
    company: "DirectFN",
    position: "UI/UX Engineer",
    duration: "Feb 2023 - Present",
    description:
      "I revamped a mobile trade app to enhance engagement and designed an app builder with an integrated feature store. I led user research for a website builder and improved a web-based builder with a CMS. Additionally, I managed design documentation, style guides, and the company’s brand guide to ensure cohesive branding across projects.",
  },
  {
    company: "CreativeHub",
    position: "Associate UI/UX Engineer",
    duration: "Nov 2022 - Feb 2023",
    description:
      "I led the design for Serendib Hotels Malawi's user-centric website, created the CreativeHub app to streamline client management, and established a user-centered design process within the company, fostering a culture of design thinking.",
  },
  {
    company: "WSO2",
    position: "Software Engineering Intern",
    duration: "Jul 2020 - Jul 2021",
    description:
      "I enhanced the UX of WSO2 Integration Studio with acclaimed features, developed a prototype for Smart on FHIR leading to client integration, and revamped the WSO2 FHIR API hub with React for improved usability.",
  },
];

const skillsArray = {
  topic: "Skills",
  items: [
    {
      name: "UI/UX design",
    },
    {
      name: "Product design",
    },
    {
      name: "UX research",
    },
    {
      name: "User-centered design",
    },
    {
      name: "Design thinking",
    },
    {
      name: "Interaction design",
    },
    {
      name: "Wireframing",
    },
    {
      name: "Prototyping",
    },
    {
      name: "Front-end development",
    },
    {
      name: "Interactive media development",
    },
    {
      name: "Branding",
    },
  ],
};

const educationArray = [
  {
    name: "Meta AR Developer",
    date: "Present",
    program: "Professional Certificate",
  },
  {
    name: "Google UX Design",
    date: "Oct 2022",
    program: "Professional Certificate",
  },
  {
    name: "BSc (Hons) Computer Science",
    description: "Relevant Modules: Web Design & Development, Advance Client-side Development, 3D Interactive Media Development, Mobile User Experience, Advance Interactive Media Development",
    date: "Sep 2022",
    program: "University of Westminster -- ",
    qualification: "First Class",
  },
];

function Resume() {
  return (
    <div className="flex flex-col md:flex-row pt-16 h-full">
      <div className="flex w-full	flex-col gap-8 md:gap-10 px-6 md:px-16 lg:mr-8">
        {/* Header */}
        <Typography
          as="h1"
          variant="heading1"
          children="Resume"
          className="text-center"
        ></Typography>

        {/* Body */}
        <div className="flex flex-col gap-12 md:gap-16 pb-28">
          {/* Experience */}
          <div id="Experience" className="section flex flex-col">
            <Typography as="h3" variant="heading5" className="mb-2">
              Experience
            </Typography>

            <ExperienceSection items={experienceArray} />
          </div>

          {/* Education */}
          <div id="Education" className="section flex flex-col">
            <Typography as="h3" variant="heading5" className="mb-2">
              Education
            </Typography>
            <EducationCard items={educationArray} layout={"education"} />
          </div>

          {/* Tools */}
          <div id="Tools" className="section flex flex-col gap-2">
            <Typography as="h3" variant="heading5" className="mb-2">
              Tools
            </Typography>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
              <BasicCard items={toolsArray} layout="tools" />
            </div>
          </div>

          {/* Skills */}
          <div id="Skills" className="section">
            <GradientCard
              items={skillsArray.items}
              topic={skillsArray.topic}
              layout="skills"
            />
          </div>

          {/* Download CV Button */}
          <div className="lg:hidden flex flex-end w-full justify-end">
            <TextButton
              size="lg"
              label="download cv"
              href="/docs/Shyami-Abeysekera-CV.pdf"
            >
              
              Download CV
            </TextButton>
          </div>
        </div>
      </div>

      <div className="lg:w-2/12">
        <ContentTab items={resumeArray} path="resume" />
      </div>
    </div>
  );
}

export default Resume;
