import Typography from "../Typography/Typography";

type SolidCardProps = {
  items: {
    name?: string;
    description?: string;
    date?: string;
    program?: string;
    qualification?: string;
  }[];

  layout: "education" | "project";
  className?: string;
};

export default function SolidCard({ items, layout }: SolidCardProps) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl overflow-hidden">
      {layout === "education" ? (
        <>
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-bold2x p-6 md:p-8 flex flex-col gap-4 md:gap-2"
            >
              <div className="flex justify-between">
                <Typography as="p" variant="body2">
                  {item.name}
                </Typography>
                <Typography as="p" variant="body4">
                  {item.date}
                </Typography>
              </div>

              <Typography as="p" variant="body4">
                {item.program}
                <span className="text-neutral-soft">{item.qualification}</span>
              </Typography>

              <Typography as="p" variant="body1">
                {item.description}
              </Typography>
            </div>
          ))}
        </>
      ) : (
        <>
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-bold2x p-6 md:p-8 flex flex-col gap-4 md:gap-2"
            >
              <Typography as="p" variant="body2">
                {item.name}
              </Typography>
              <Typography as="p" variant="body1">
                {item.description}
              </Typography>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
