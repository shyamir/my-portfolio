import AboutCard from "../components/Card/MainCard";
import Typography from "../components/Typography/Typography";

// assets
import Image1 from "../assets/about/image1.png";
import Image2 from "../assets/about/image2.png";
import Image3 from "../assets/about/image3.png";
import Image4 from "../assets/about/image4.png";
import Image5 from "../assets/about/image5.png";
import Image6 from "../assets/about/image6.png";
import Image7 from "../assets/about/image7.png";
import Image8 from "../assets/about/image8.png";
import Image9 from "../assets/about/image9.png";
import Image10 from "../assets/about/image10.png";

function About() {
  return (
    <div className="flex flex-col gap-6 md:gap-10 w-full pt-16 pb-16 px-6 md:px-16">
      <Typography
        as="h1"
        variant="heading1"
        children="About"
        className="text-center"
      ></Typography>

      <AboutCard layout="about"/>

      <div className="w-fill flex flex-col gap-3 items-start">
        <Typography as="h3" variant="heading5" className="text-center">
          things my colleagues say
        </Typography>
        <div className="flex flex-col md:flex-row gap-6 md:gap-32 w-full">
          <div className="w-fill flex flex-col gap-3">
            <Typography as="p" variant="body1">
              "Donec velit lectus bibendum diam quis libero augue eleifend
              pellentesque. Diam sagittis velit elementum dolor convallis velit
              maecenas orci. Sed sagittis aliquet egestas eu pellentesque.
              Integer et varius mauris sit nisi. Auctor nunc viverra sed mi
              lectus porttitor varius. Tortor ac ut blandit aliquam euismod.
              Fermentum quis eleifend dolor sed tortor metus neque. Consequat
              amet elit arcu quis nam morbi et vel scelerisque. Mattis aliquet
              ut tellus aenean"
            </Typography>
            <Typography className="text-right">
              Fahim Feroz, Senior UI/UX Engineer
            </Typography>
          </div>
          <div className="w-fill flex flex-col gap-3">
            <Typography as="p" variant="body1">
              "Donec velit lectus bibendum diam quis libero augue eleifend
              pellentesque. Diam sagittis velit elementum dolor convallis velit
              maecenas orci. Sed sagittis aliquet egestas eu pellentesque.
              Integer et varius mauris sit nisi. Auctor nunc viverra sed mi
              lectus porttitor varius. Tortor ac ut blandit aliquam euismod.
              Fermentum quis eleifend dolor sed tortor metus neque. Consequat
              amet elit arcu quis nam morbi et vel scelerisque. Mattis aliquet
              ut tellus aenean"
            </Typography>
            <Typography className="text-right">
              Devaka Kumarasinghe, Senior Software Engineer
            </Typography>
          </div>
        </div>
      </div>

      <div className="w-fill flex flex-col items-start gap-4">
        <Typography as="h3" variant="heading5" className="mb-2 text-center">
          In my spare time...
        </Typography>
        <div className="grid grid-cols-4 gap-2 md:gap-4 md:grid-cols-5 items-center">
          <img src={Image1} alt="Concert"></img>
          <img src={Image2} alt="3 cute cats in a bag"></img>
          <img src={Image3} alt="Airplane wing from the window"></img>
          <img src={Image4} alt="Shyami with her mother and sister"></img>
          <img src={Image5} alt="Art Science Museum"></img>
          <img src={Image6} alt="Painting of the sky"></img>
          <img src={Image7} alt="Shyami with her friends"></img>
          <img src={Image8} alt="Pizza"></img>
          <img src={Image10} alt="Beach"></img>
          <img src={Image9} alt="Shyami on a kayak with a dog"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
