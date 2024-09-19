// components
import ContentTab from "../components/Tabs/ContentTab";
import Typography from "../components/Typography/Typography";
import CompoundButton from "../components/Button/CompoundButton";
import GradientCard from "../components/Card/GradientCard";
import SolidCard from "../components/Card/SolidCard";
import MainCard from "../components/Card/MainCard";

// assets
import Image1 from "../assets/project1/image1.png";
// import Video1 from "../assets/project1/video1.mp4";
import Image2 from "../assets/project1/image2.png";
import Layout1On from "../assets/project1/layout1-on.png";
import Layout1Off from "../assets/project1/layout1-off.png";


import CompetitiveAudit from "../assets/project1/competitive-audit.png";
import VisualDesign from "../assets/project1/visual-design/visual-design-1.png";
import PrimaryButtonImage from "../assets/project1/visual-design/primary-button.png";
import SecondaryButtonImage from "../assets/project1/visual-design/secondary-button.png";
import TertiaryButtonImage from "../assets/project1/visual-design/tertiary-button.png";
import BackIcon from "../icons/BackIcon";
import BasicCard from "../components/Card/BasicCard";
import UnderstandIcon from "../icons/Understand";
import DesignIcon from "../icons/DesignIcon";
import DefineIcon from "../icons/DefineIcon";
import IdeateIcon from "../icons/IdeateIcon";
import TestIcon from "../icons/TestIcon";
import OneIcon from "../icons/OneIcon";
import TwoIcon from "../icons/TwoIcon";
import ThreeIcon from "../icons/ThreeIcon";
import ToggleCard from "../components/Card/ToggleCard";


const projectArray = [
  "Highlights",
  "Overview",
  "Design Process",
  "Research & Analysis",
  "Layout",
  "Visual Design",
  "Retrospective",
  "Future Recommendations",
];

const futureArray = {
  topic: "Future Recommendations",
  items: [
    {
      name: "Continuous User Feedback:",
      description:
        "Establish regular user feedback loops to inform design decisions and identify issues early in the development process.",
    },
    {
      name: "User Testing:",
      description:
        "Incorporate end user testing to the prototypes in order to identify pain points the user might experience before going into development.",
    },
  ],
};

const researchArray = [
  {
    name: "No structure or flow for the user.",
    description:
      "Users found it difficult to use due to a lack of proper structure and flow, with no guidance on what to do. They were left to figure things out blindly.",
  },
  {
    name: "Catered to those with technical knowledge.",
    description:
      "For any slightly complex task, users must write CSS. This forces those without coding knowledge to figure out how to write CSS on their own.",
  },
  {
    name: "No branding & aesthetic appeal. ",
    description:
      "The inconsistent visual identity makes the interface look unprofessional and generic, diminishing user engagement and perceived value.",
  },
];

const retroArray = [
  {
    description:
      "It is important to define a project scope in the beginning in order to save time. ",
    icon: <OneIcon />,
  },
  {
    description:
      "Incorporating user feedback early on in the project will benefit.",
    icon: <TwoIcon />,
  },
  {
    description:
      "Following the Agile methodology helped in handling the evolving requirements. ",
    icon: <ThreeIcon />,
  },
];

const processArray = [
  {
    name: "Understand",
    description: "-- Research, Competitive Analysis",
    icon: <UnderstandIcon />,
  },
  {
    name: "Define",
    description: "-- Problem, Requirement Gathering",
    icon: <DefineIcon />,
  },
  {
    name: "Ideate",
    description: "-- Feature Suggestion, User Flow & Stories",
    icon: <IdeateIcon />,
  },
  {
    name: "Design",
    description: "-- Wireframe, Hi-Fi Prototype",
    icon: <DesignIcon />,
  },
  {
    name: "Test",
    description: "-- Feedback, Retrospective",
    icon: <TestIcon />,
  },
];


function Project1() {
  return (
    <div className="flex flex-row pt-16">
      <div className="flex w-full	flex-col gap-6 md:gap-8 pb-16 px-6 md:px-16">
        <div className="w-full bg-neutral-bold3x fixed py-3 md:py-2">
          <CompoundButton
            icon={BackIcon}
            children="Back to Projects"
            label="Linkedin"
            variant="secondary"
            size="md"
            href="/"
          />
        </div>

        <div className="flex w-full	flex-col gap-2 pt-14 md:pt-12">
          <Typography
            as="h1"
            variant="heading1"
            children="Website Builder + CMS"
            className="text-center"
          ></Typography>
          <Typography
            as="h6"
            variant="heading7"
            children="UX Design"
            className="text-center text-neutral-soft"
          ></Typography>
        </div>

        <div className="flex flex-col gap-16">
          {/* Highlights */}
          <div id="Highlights" className="section">
            <MainCard
              video1="image1"
              video2="image2"
              layout={"project"}
              topic="highlights"
              sentence1="An end-to-end, B2B SaaS website builder"
              image1={Image1}
              sentence2="with an embedded content management system"
              image2={Image2}
            />
          </div>

          {/* Overview */}
          <div
            id="Overview"
            className="section flex flex-col md:flex-row gap-6 md:gap-16"
          >
            <div className="md:w-1/2 flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col gap-2 md:gap-3">
                <Typography as="h3" variant="heading5">
                  my role
                </Typography>
                <Typography as="p" variant="body1">
                  <span className="text-neutral-soft2x">UI/UX Designer </span>
                  -- Research, Competitive Analysis, Wireframes, Visual Design,
                  Prototyping, Design System, Style Guide, Documentation
                </Typography>
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                <Typography as="h3" variant="heading5">
                  timeline{" "}
                </Typography>
                <Typography as="p" variant="body1">
                  8 months
                </Typography>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col gap-2 md:gap-3">
              <Typography as="h3" variant="heading5">
                overview
              </Typography>
              <div className="flex flex-col gap-4">
                <Typography as="p" variant="body1">
                  Version 1 of the internal website builder was done at a rapid
                  pace with no research done prior to development. While it
                  serves its basic purpose of creating a website, there’s a lot
                  that can be done to speed up the process.
                </Typography>
                <Typography as="p" variant="body1">
                  For the revamp, I led the end-to-end design direction for a
                  new and improved website builder with an embedded content
                  management system. The launch of version 2 was met with
                  improved efficiency for the in-house developers & designers,
                  as well as clients.
                </Typography>
              </div>
            </div>
          </div>

          {/* Design Process */}
          <div id="Design Process" className="section flex flex-col gap-3">
            <Typography as="h3" variant="heading5">
              Design Process
            </Typography>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
              <BasicCard items={processArray} layout="design-process" />
            </div>
          </div>

          {/* Research & Analysis */}
          <div id="Research & Analysis" className="section flex flex-col gap-3">
            <Typography as="h3" variant="heading5">
              Research & Analysis
            </Typography>
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-20">
              <div className="md:w-1/2">
                <SolidCard items={researchArray} layout={"project"} />
              </div>
              <div className="md:w-1/2 flex flex-col gap-4 md:gap-8">
                <Typography as="h3" variant="heading3">
                  To tackle these limitations, we conducted a competitive audit.
                </Typography>
                <div className="bg-neutral-bold2x p-4 md:p-6 rounded-2xl">
                  <img
                    src={CompetitiveAudit}
                    alt="competitive audit"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Layout */}
          <div id="Layout" className="section flex flex-col gap-3">
            <Typography as="h3" variant="heading5">
              Layout
            </Typography>
            <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
              <div className="md:w-1/2 flex flex-col gap-4">
                <ToggleCard
                  image1={Layout1Off}
                  image2={Layout1On}
                  text="Heirachical Grid"
                />
                <Typography as="p" variant="body1">
                  The layout was focused on placement based on importance as
                  well as convenience. Following the Hierarchical Grid was most
                  suitable for the Editor.
                </Typography>
              </div>
              <div className="md:w-1/2 flex flex-col gap-4">
                <ToggleCard
                  image1={Layout1Off}
                  image2={Layout1On}
                  text="Column Grid"
                />
                <Typography as="p" variant="body1">
                  Whereas for the CMS layout, a Column Grid layout was well
                  suited to meet its requirements.{" "}
                </Typography>
              </div>
            </div>
          </div>

          {/* Visual Design */}
          <div id="Visual Design" className="section flex flex-col gap-3">
            <Typography as="h3" variant="heading5">
              Visual Design
            </Typography>

            <div className="bg-neutral-bold2x rounded-xl flex flex-col gap-12 lg:gap-4 lg:flex-row px-4 py-8 lg:px-4 lg:py-12 items-center">
              <img
                src={VisualDesign}
                alt="Button"
                className="px-16 w-9/12	lg:w-1/3 lg:border-r border-none md:pr-20 pb-2 md:pb-8 md:pb-0 border-r-0 lg:border-b-0 border-b border-neutral-main"
              />
              <div className="w-full lg:w-2/3 flex flex-col gap-8">
                <div className="flex flex-row gap md:gap-10 items-center px-2 md:px-10 w-fill">
                  <Typography as="p" variant="body1" className="md:w-1/4 w-1/3">
                    Primary
                  </Typography>
                  <img src={PrimaryButtonImage} alt="" className="w-2/3" />
                </div>

                <div className="flex flex-row gap md:gap-10 items-center px-2 md:px-10 w-fill">
                  <Typography as="p" variant="body1" className="md:w-1/4 w-1/3">
                    Secondary
                  </Typography>
                  <img src={SecondaryButtonImage} alt="" className="w-2/3" />
                </div>

                <div className="flex flex-row gap md:gap-10 items-center px-2 md:px-10 w-fill">
                  <Typography as="p" variant="body1" className="md:w-1/4 w-1/3">
                    Tertiary
                  </Typography>
                  <img src={TertiaryButtonImage} alt="" className="w-2/3" />
                </div>
              </div>
            </div>
          </div>

          {/* Retrospective */}
          <div id="Retrospective" className="section flex flex-col gap-3">
            <Typography as="h3" variant="heading5">
              retrospective
            </Typography>
            <div className="flex flex-col md:flex-row gap-4">
              <Typography
                as="h3"
                variant="heading3"
                className="md:w-1/2 text-neutral-soft2x"
              >
                Project Takeaways:
              </Typography>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <BasicCard items={retroArray} layout={"design-process"} />
              </div>
            </div>
          </div>

          {/* Future Recommendations */}
          <div id="Future Recommendations" className="section">
            <GradientCard
              items={futureArray.items}
              topic={futureArray.topic}
              layout="future-recommendations"
            />
          </div>
        </div>
      </div>

      <div className="lg:w-2/12">
        <ContentTab items={projectArray} path="website-builder+cms" />
      </div>
    </div>
  );
}

export default Project1;
