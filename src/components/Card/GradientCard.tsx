import Typography from "../Typography/Typography";

type GradientCardProps = {
  items: { name?: string; description?: string;}[];
  topic: string;
  layout: "future-recommendations" | "skills";
};

export default function GradientCard({
  items,
  topic,
  layout,
}: GradientCardProps) {
  return (
    <div className="container w-full bg-gradient-to-r from-neutral-bold2x via-primary-soft to-neutral-bold2x rounded-2xl pt-0.5">
      <div className="h-full w-full bg-neutral-bold2x rounded-2xl px-6 md:px-10 lg:px-20 pt-4 pb-6 md:pb-8 xl:pb-12 flex flex-col items-center justify-center gap-4 md:gap-6">
        <Typography as="h3" variant="heading4" className="mb-5">
          {topic}
        </Typography>

        {layout === "future-recommendations" ? (
          <div className="flex flex-col md:flex-row gap-8 md:gap-20">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 md:gap-4">
                <Typography as="p" variant="body2"> 
                  {item.name}
                </Typography>
                <Typography as="p" variant="body1">
                  {item.description}
                </Typography>
              </div>
            ))}
          </div>
        ) : (
          <ul className="list-disc flex flex-wrap gap-y-2 gap-x-4 md:gap-x-18 items-center justify-center text-neutral-soft">
            {items.map((item, index) => (
              <li key={index}>
                <Typography
                  as="h6"
                  variant="heading6"
                  className="w-fit px-2 text-center text-neutral-soft"
                >
                  {item.name}
                </Typography>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
