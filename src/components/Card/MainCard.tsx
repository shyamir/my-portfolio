import Typography from "../Typography/Typography";
import Portrait from "../../assets/about/portrait.png";

interface CardProps {
  topic?: string;
  sentence1?: string;
  sentence2?: string;
  image1?: string;
  image2?: string;
  layout: "project" | "about";
  video1?: "video1" | "image1";
  video2?: "video2" | "image2";
}

export default function MainCard({
  video1,
  video2,
  layout,
  topic,
  sentence1,
  image1,
  sentence2,
  image2,
}: CardProps) {
  return (
    <div className="w-full bg-gradient-to-r from-neutral-bold2x via-primary-soft to-neutral-bold2x rounded-2xl pt-0.5">
      <div className="h-full w-full bg-neutral-bold2x rounded-2xl px-6 md:px-10 lg:px-10 pt-4 pb-6 md:pb-8 xl:pb-10">
        <div className="flex flex-col gap-6 md:gap-8 items-center justify-center">
          {layout === "about" ? (
            <>
              {/* Card Header */}
              <div className="flex flex-col items-center justify-center">
                {/* <Typography as="h3" variant="heading4" className="mb-5">
                  Elevator pitch
                </Typography> */}

                <Typography
                  as="h2"
                  variant="heading3"
                  className="mb-2 lg:w-4/6 text-center"
                >
                  I’m passionate about{" "}
                  <span className="text-neutral-soft2x">
                    innovative designs{" "}
                  </span>
                  that make a{" "}
                  <span className="text-neutral-soft2x">
                    meaningful difference
                  </span>{" "}
                  on people’s lives
                </Typography>
              </div>

              {/* Card Body */}
              <div className="flex flex-col lg:flex-row gap-8 md:gap-12 w-full items-center">
                <img
                  src={Portrait}
                  alt="Shyami Abeysekera"
                  className="rounded-xl w-full h-60 object-cover md:object-cover md:h-96 md:w-full lg:h-auto lg:w-1/3 xl:w-1/5"
                />

                <div className="flex flex-col gap-6 md:gap-4 lg:gap-8 w-full">
                  <div className="w-fill flex flex-col items-start">
                    <Typography
                      as="h3"
                      variant="heading5"
                      className="mb-2 md:text-center"
                    >
                      The answer to 'tell me about yourself'
                    </Typography>
                    <div className="flex flex-col gap-2">
                      <Typography as="p" variant="body1" className="mb-2">
                        I have always been interested in all things design,
                        whether it was fashion, art, or even architecture. It
                        was essential for me to incorporate creativity into my
                        professional life. My goal is to be in the forefront of
                        innovation, and so I found it necessary to have good
                        knowledge in the technical skills. I successfully
                        completed my bachelors in Computer Science achieving a
                        first class honours.
                      </Typography>
                      <Typography as="p" variant="body1" className="mb-2">
                        Having completed my bachelors in Computer Science and an
                        artistic eye, I consider myself a creative hybrid
                        combining design and technology. Since I come from tech,
                        I understand how to bridge the gap between designers &
                        developers, thus making the process much smoother.{" "}
                      </Typography>
                    </div>
                  </div>

                  <div className="flex flex-col xl:flex-row gap-6 xl:gap-20">
                    {/* Skills & Tools */}
                    <div className="w-full md:w-fill flex flex-col items-start">
                      <Typography
                        as="h3"
                        variant="heading5"
                        className="mb-2 text-center"
                      >
                        Skills & Tools
                      </Typography>

                      <div className="flex flex-col gap-0">
                        <Typography as="p" variant="body1" className="mb-2">
                          Product Design -{" "}
                          <span className="text-neutral-soft2x">
                            Figma, Adobe XD
                          </span>
                        </Typography>
                        <Typography as="p" variant="body1" className="mb-2">
                          Front-end Development -{" "}
                          <span className="text-neutral-soft2x">
                            ReactJS, HTML, CSS, JS, TS, Tailwind
                          </span>
                        </Typography>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="w-full md:w-fill flex flex-col items-start">
                      <Typography
                        as="h3"
                        variant="heading5"
                        className="mb-2 text-center"
                      >
                        Contact
                      </Typography>

                      <div className="flex flex-col gap-0">
                        <Typography
                          as="p"
                          variant="body1"
                          className="mb-2 leading-3"
                        >
                          Email -{" "}
                          <span className="text-neutral-soft2x">
                            <a href="mailto:abeysekera.shyami@gmail.com">
                              abeysekera.shyami@gmail.com
                            </a>
                          </span>
                        </Typography>

                        <Typography
                          as="p"
                          variant="body1"
                          className="mb-2 leading-3"
                        >
                          Linkedin -{" "}
                          <span className="text-neutral-soft2x">
                            <a href="https://www.linkedin.com/in/shyami-abeysekera/">
                              shyami-abeysekera
                            </a>
                          </span>
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Typography as="h3" variant="heading4" className="mb-5">
                {topic}
              </Typography>

              <div className="flex flex-col gap-6 md:gap-12">
                <div className="flex flex-col gap-2 md:gap-6">
                  <Typography
                    as="h2"
                    variant="heading3"
                    className="mb-2 text-center"
                  >
                    {sentence1}
                  </Typography>
                  <div>
                    {video1 === "video1" ? (
                      <video
                        className="VideoTag rounded-xl md:h-auto bg-cover"
                        autoPlay
                        loop
                        muted
                        playsInline // prevent fullscreen on mobile
                        disablePictureInPicture // disable PIP (Picture in Picture) on mobile
                        controlsList="nodownload nofullscreen noremoteplayback" // prevent controls
                      >
                        <source src={image1} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={image1}
                        alt="Website builder + CMS"
                        className="rounded-xl md:h-auto bg-cover"
                      />
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:gap-6">
                  <Typography
                    as="h2"
                    variant="heading3"
                    className="mb-2 text-center"
                  >
                    {sentence2}
                  </Typography>
                  {video2 === "video2" ? (
                    <video
                      className="VideoTag rounded-xl md:h-auto bg-cover"
                      autoPlay
                      loop
                      muted
                    >
                      <source src={image2} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={image2}
                      alt="Website builder + CMS"
                      className="rounded-xl md:h-auto bg-cover"
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
