// import Carousel from "../components/Carousel/Carousel";
import Typography from "../components/Typography/Typography";
import Project1 from "../assets/home/project1.png";
import Project2 from "../assets/home/project2.png";
import Carousel from "../components/Carousel/Carousel";

const carouselItems = [
  {
    name: "Website Builder + CMS",
    type: "ux design",
    image: Project1,
    url: "/website-builder+cms",
    isAvailable: true,
  },
  {
    name: "A M Kreations Revamp",
    type: "ux design",
    image: Project2,
    url: "/am-kreations-revamp",
    isAvailable: true,
  },
  {
    name: "",
    type: "accessibility project",
    image: "",
    url: "",
    isAvailable: false,
  },
  {
    name: "",
    type: "ar design project",
    image: "",
    url: "",
    isAvailable: false,
  },
  {
    name: "",
    type: "smart home project",
    image: "",
    url: "",
    isAvailable: false,
  },
];

function Home() {
  return (
    <div className="flex flex-col h-dvh overflow-hidden">
      <div className="flex flex-col gap-y-4 px-6 pt-20 md:px-16 z-50">
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
