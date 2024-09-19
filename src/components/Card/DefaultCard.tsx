import Typography from "../Typography/Typography";

type DefaultCardProps = {
  items: { name?: string; description?: string; icon?: any }[];
  layout: "project" | "";
  // icon: React.ElementType;
};

export default function BasicCard({ items, layout }: DefaultCardProps) {
  return (
    <>
      {layout === "project" ? (
        <>
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-bold2x flex rounded-xl flex-col gap-4 md:gap-6 p-7 w-full rounded-xl"
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
      ) : (
        <>
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-neutral-bold flex rounded-xl flex-row items-center gap-6 p-6 w-full"
            >
              {item.icon}

              <Typography as="p" variant="body1">
                {item.name}
              </Typography>
            </div>
          ))}
        </>
      )}
    </>
  );
}
