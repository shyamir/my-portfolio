// components
import ContentTab from "../components/Tabs/ContentTab";
import Typography from "../components/Typography/Typography";
import CompoundButton from "../components/Button/CompoundButton";
import MainCard from "../components/Card/MainCard";
import DefaultCard from "../components/Card/DefaultCard";

// assets
import Image1 from "../assets/project2/image1.png";
import Video1 from "../assets/project2/amk.mp4";
import IA from "../assets/project2/ia.png";
import Wireframe from "../assets/project2/wireframe.png";
import Palette from "../assets/project2/palette.png";
import Before from "../assets/project2/before.png";
import After from "../assets/project2/after.png";
import NavBefore from "../assets/project2/nav-before.png";
import NavAfter from "../assets/project2/nav-after.png";
import HomeBefore from "../assets/project2/home-before.png";
import HomeAfter from "../assets/project2/home-after.png";
import ServiceBefore from "../assets/project2/service-before.png";
import ServiceAfter from "../assets/project2/service-after.png";

import BackIcon from "../icons/BackIcon";

const projectArray = [
  "Highlights",
  "Overview",
  "Research & Analysis",
  "Structure",
  "Wireframes",
  "Visual Design",
  "Before and After",
];

const researchArray = [
  {
    name: "Cluttered Layout",
    description:
      "Information is presented in a disorganized and cluttered manner, overwhelming users and making it hard to focus on key content.",
  },
  {
    name: "Inconsistent User Experience",
    description:
      "The user experience varies across different pages, leading to a lack of cohesion and confusion for users.",
  },
  {
    name: "Outdated Visual Design",
    description:
      "The current design feels outdated and does not align with modern web design standards, potentially harming the brand's image.",
  },
];

function Project2() {
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
            children="AM Kreations Revamp"
            className="text-center"
          ></Typography>
          <Typography
            as="h6"
            variant="heading7"
            children="Web Design"
            className="text-center text-neutral-soft"
          ></Typography>
        </div>

        <div className="flex flex-col gap-16">
          {/* Highlights */}
          <div id="Highlights" className="section">
            <MainCard
              video1="video1"
              video2="image2"
              layout={"project"}
              topic="highlights"
              sentence1="A website revamp for a marketing consultant"
              image1={Video1}
              sentence2="featuring a fresh design and improved user experience"
              image2={Image1}
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
                  -- Research, Information Architecture, Wireframes, Visual
                  Design, Prototyping, Logo Design
                </Typography>
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                <Typography as="h3" variant="heading5">
                  timeline{" "}
                </Typography>
                <Typography as="p" variant="body1">
                  2 months
                </Typography>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col gap-2 md:gap-3">
              <Typography as="h3" variant="heading5">
                overview
              </Typography>
              <div className="flex flex-col gap-4">
                <Typography as="p" variant="body1">
                  The marketing consultant's website had an outdated design and
                  lacked the structure to effectively highlight their services.
                  While functional, it missed opportunities to enhance user
                  experience and content flow.
                </Typography>
                <Typography as="p" variant="body1">
                  For the revamp, I led the complete redesign, focusing on a
                  modern, intuitive layout that aligns with the consultant's
                  brand and goals. The updated website now offers a streamlined
                  user journey, improved engagement, and a refreshed visual
                  identity, boosting both client and user satisfaction.
                </Typography>
              </div>
            </div>
          </div>

          {/* Research & Analysis */}
          <div id="Research & Analysis" className="section flex flex-col gap-3">
            <Typography as="h3" variant="heading5">
              Research & Analysis
            </Typography>
            <div className="flex flex-row gap-6">
              <DefaultCard items={researchArray} layout={"project"} />
            </div>
          </div>

          {/* Structure */}
          <div id="Structure" className="section flex flex-col gap-3">
            <Typography as="h3" variant="heading5">
              Structure
            </Typography>
            <div className="container w-full bg-gradient-to-r from-neutral-bold2x via-primary-soft to-neutral-bold2x rounded-2xl pt-0.5">
              <div className="h-full w-full bg-neutral-bold2x rounded-2xl px-6 md:px-10 lg:px-20 pt-8 pb-6 md:pb-8 xl:pb-12 flex flex-col items-center justify-center gap-4 md:gap-6">
                <img src={IA} alt="Information Architecture" />
              </div>
            </div>
          </div>

          {/* Wireframes */}
          <div id="Wireframes" className="section flex flex-col gap-3">
            <Typography as="h3" variant="heading5">
              Wireframes
            </Typography>
            <Typography as="p" variant="body1">
              The wireframes provide a clear guide for the structure and layout
              with the help of the Information Architecture, ensuring a focus on
              usability and content placement before final design elements are
              applied.
            </Typography>
            <img src={Wireframe} className="p-10" alt="Wireframes" />
            <div className="flex justify-end">
              <Typography as="p" variant="body3">
                <span className="font-bold	">5.0</span> AM Kreations Wireframes{" "}
                <span className="bg-neutral-bold py-1 px-2 rounded-xl text-neutral-main">
                  IMAGE
                </span>
              </Typography>
            </div>
          </div>

          {/* Visual Design */}
          <div id="Visual Design" className="section flex flex-col gap-3">
            <Typography as="h3" variant="heading5">
              Visual Design
            </Typography>
            <div className="flex flex-row gap-24 justify-center items-center">
              <div className="w-1/2 flex flex-col gap-8">
                <Typography as="h3" variant="heading3">
                  Balancing Tradition and Innovation
                </Typography>
                <Typography as="p" variant="body1">
                  Since AM Kreations is an established marketing consultancy in
                  Sri Lanka, the redesign aimed to maintain the brand's core
                  identity while modernizing its visual appeal and enhancing
                  user experience. The goal was to preserve the brand’s essence
                  while ensuring the new design reflects contemporary trends and
                  functionality.
                </Typography>
                <div className="flex flex-row gap-8 w-full">
                  <img src={Palette} alt="Colour palette" />
                </div>
              </div>
              <div className="bg-neutral-bold2x rounded-2xl w-1/2 flex flex-row gap-20 p-8 ">
                <div className="flex flex-col  gap-4 items-center">
                  <Typography as="p" variant="body1">
                    Before
                  </Typography>
                  <img src={Before} className="opacity-90" alt="Logo before" />
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Typography as="p" variant="body1">
                    After
                  </Typography>
                  <div className="flex p-4 justify-center py-10">
                    <img src={After} alt="Logo after" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Before & After */}
          <div id="Before and After" className="section flex flex-col gap-">
            <Typography as="h3" variant="heading5">
              Before & After
            </Typography>

            <div className="container w-full bg-gradient-to-r from-neutral-bold2x via-primary-soft to-neutral-bold2x rounded-2xl pt-0.5">
              <div className="h-full w-full bg-neutral-bold2x rounded-2xl px-6 md:px-10 lg:px-20 pt-4 pb-6 md:pb-8 xl:pb-12 flex flex-col items-center justify-center gap-4 md:gap-6">
                <Typography as="h3" variant="heading4" className="mb-5">
                  Navigation
                </Typography>
                <div className="flex flex-col gap-8">
                  <Typography as="p" variant="body1" className="text-center">
                    The navigation was unstructured, so a more intuitive and
                    user-friendly navigation system was proposed using a
                    well-thought-out information architecture, alternating
                    between the light and dark theme.
                  </Typography>
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2 items-center">
                      <img src={NavBefore} alt="Navigation Before" />
                      <Typography as="p" variant="body1">
                        Before
                      </Typography>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                      <img src={NavAfter} alt="Navigation After" />
                      <Typography as="p" variant="body1">
                        After
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container w-full bg-gradient-to-r from-neutral-bold2x via-primary-soft to-neutral-bold2x rounded-2xl pt-0.5">
              <div className="h-full w-full bg-neutral-bold2x rounded-2xl px-6 md:px-10 lg:px-20 pt-4 pb-6 md:pb-8 xl:pb-12 flex flex-col items-center justify-center gap-4 md:gap-6">
                <Typography as="h3" variant="heading4" className="mb-5">
                  Home page
                </Typography>
                <div className="flex flex-col gap-10">
                  <Typography as="p" variant="body1" className="text-center">
                    Initially, the website had separate welcome and home pages,
                    which caused confusion for users. In the redesign, these
                    were merged into a single, streamlined page for clarity
                  </Typography>
                  <div className="flex flex-row gap-10">
                    <div className="flex flex-col gap-4 items-center w-1/2">
                      <img
                        src={HomeBefore}
                        className="opacity-90"
                        alt="Home Before"
                      />
                      <Typography as="p" variant="body1">
                        Before
                      </Typography>
                    </div>
                    <div className="flex flex-col gap-4 items-center w-1/2">
                      <img src={HomeAfter} alt="Home Page After" />
                      <Typography as="p" variant="body1">
                        After
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container w-full bg-gradient-to-r from-neutral-bold2x via-primary-soft to-neutral-bold2x rounded-2xl pt-0.5">
              <div className="h-full w-full bg-neutral-bold2x rounded-2xl px-6 md:px-10 lg:px-20 pt-4 pb-6 md:pb-8 xl:pb-12 flex flex-col items-center justify-center gap-4 md:gap-6">
                <Typography as="h3" variant="heading4" className="mb-5">
                  Services page
                </Typography>
                <div className="flex flex-col gap-10">
                  <Typography as="p" variant="body1" className="text-center">
                    Previously, services were spread across multiple pages,
                    making it difficult to get a quick overview. We’ve
                    simplified this by consolidating everything into one concise
                    page. This update provides a brief description of each
                    service along with examples of the work, offering a clear
                    and streamlined view of our offerings.
                  </Typography>
                  <div className="flex flex-row gap-10">
                    <div className="flex flex-col gap-4 items-center w-1/2">
                      <img
                        src={ServiceBefore}
                        className="opacity-90"
                        alt="Services Page Before"
                      />
                      <Typography as="p" variant="body1">
                        Before
                      </Typography>
                    </div>
                    <div className="flex flex-col gap-4 items-center w-1/2">
                      <img src={ServiceAfter} alt="Services Page After" />
                      <Typography as="p" variant="body1">
                        After
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-2/12">
        <ContentTab items={projectArray} path="website-builder+cms" />
      </div>
    </div>
  );
}

export default Project2;
