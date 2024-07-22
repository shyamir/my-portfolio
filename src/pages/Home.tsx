import Carousel from "../components/Carousel/Carousel";
import Typography from "../components/Typography/Typography";
import Project1 from "../assets/home/project1.png";

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
    image: Project1,
    url: "/am-kreations-revamp",
  },
  {
    name: "AR Application Name",
    type: "AR design",
    image: Project1,
    url: "/ar-application-name",
  },
];

function Home() {
  return (
    <div className="flex flex-col gap-6 overscroll-none	">
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

      <div className="w-full h-full text-neutral-main">
        <Carousel items={carouselItems} />
      </div>
    </div>
  );
}

export default Home;
