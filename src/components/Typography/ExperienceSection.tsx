import Typography from "./Typography";

type ExperienceSectionProps = {
  items: {
    company: string;
    position: string;
    duration: string;
    description: string;
  }[];
};


export default function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
      {items.map((item, index) => (
        <div className="flex flex-col md:flex-row justify-between" key={index}>
          <div className="w-2/6">
            <Typography as="h3" variant="heading3">
              {item.company}
            </Typography>
          </div>

          <div className="md:w-full lg:w-4/6 flex flex-col gap-4">
            <div className="flex md:flex-col gap-1 justify-between">
              <Typography as="p" variant="body2">
                {item.position}
              </Typography>
              <Typography as="p" variant="body4">
                {item.duration}
              </Typography>
            </div>
            <Typography as="p" variant="body1">
              {item.description}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
}
