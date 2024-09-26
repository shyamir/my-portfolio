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

      <AboutCard layout="about" />

      <div className="w-fill flex flex-col gap-3 items-start">
        <Typography as="h3" variant="heading5" className="text-center">
          things my colleagues say
        </Typography>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full">
          <div className="w-fill lg:w-1/2 flex flex-col gap-3">
            <Typography as="p" variant="body1">
              "I had the pleasure of being the UX lead of Shyami for almost two
              years on multiple projects, including the One Studio and DFN ONE
              mobile applications, and I can confidently say she is an
              exceptional UI/UX designer. Shyami has an impressive eye for
              design and consistently demonstrates strong soft skills and
              ethical work practices. Her collaboration with both designers and
              development teams has been seamless, making her a reliable and
              responsible team member. What stands out most about Shyami is her
              commitment to understanding before acting—she never blindly
              follows instructions but always seeks clarity to ensure the best
              outcomes. She is not afraid to discuss and bring in new ideas to
              the table. This is an invaluable trait in a product designer.
              Additionally, her curiosity for exploring new approaches and areas
              within UX has been instrumental in her growth.
              <br />
              <br />
              As someone who has seen her in action firsthand, I highly
              recommend Shyami and am certain she has a bright future ahead."
            </Typography>
            <Typography className="text-right">
              Fahim Feroz, Senior UI/UX Engineer
            </Typography>
          </div>
          <div className="w-fill lg:w-1/2 flex flex-col gap-3">
            <Typography as="p" variant="body1">
              "I had the pleasure of working with Shyami on the CMS v2 project,
              where she spearheaded the entire UX strategy. Her creativity and
              attention to detail are matched only by her strong work ethic and
              commitment to delivering the best user experience possible.
              Shyami's ability to collaborate and her openness to feedback stood
              out to me throughout our interactions. She consistently encouraged
              thoughtful discussions and worked well with the team to ensure
              that the design aligned with both user needs and business goals.
              Her soft skills and approachable nature made her an asset to the
              team, and I have no doubt she will continue to excel in her career
              as a UI/UX designer.

              <br />
              <br />
              I highly recommend Shyami to any team looking for a
              passionate and skilled UI/UX professional!"
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
