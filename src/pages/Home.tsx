// import Carousel from "../components/Carousel/Carousel";
import Typography from "../components/Typography/Typography";
import Project1 from "../assets/home/project1.png";
import Project2 from "../assets/home/project2.png";
import Project3 from "../assets/home/project3.png";
import Project4 from "../assets/home/project4.png";
import Project5 from "../assets/home/project5.png";
import Carousel from "../components/Carousel/Carousel";

const carouselItems = [
  {
    name: "Website Builder + CMS",
    type: "UX DESIGN",
    image: Project1,
    url: "/website-builder+cms",
  },
  {
    name: "A M Kreations Revamp",
    type: "UX DESIGN",
    image: Project2,
    url: "/am-kreations-revamp",
  },
  {
    name: "AR Application Name",
    type: "AR design",
    image: Project3,
    url: "/ar-application-name",
  },
  {
    name: "AR Application Name",
    type: "AR design",
    image: Project4,
    url: "/ar-application-name",
  },
  {
    name: "Project 4",
    type: "Something design",
    image: Project5,
    url: "/ar-application-name",
  },
];

function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex md:w-5/12 flex-col gap-y-4 px-6 pt-20 md:px-16">
        <p className="text-neutral-main tracking-widest">
          A<span className="font-bold">YUB</span>O
          <span className="font-bold">VAN! | HELLO!</span>
        </p>
        <div className="flex flex-col md:gap-2">
          <Typography as="p" variant="body1">
            I'm <span className="font-bold">Shyami</span>
          </Typography>
          <Typography as="p" variant="body1">
            a Product Designer who does a bit of coding..
          </Typography>
        </div>
      </div>

      <div className="w-full h-full text-neutral-main flex items-center justify-center">
        <Carousel items={carouselItems} />
      </div>
    </div>
  );
}

export default Home;
