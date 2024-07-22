import Typography from "../Typography/Typography";

type BasicCardProps = {
  items: { name?: string; description?: string; icon: any }[];
  layout: "design-process" | "tools";
  // icon: React.ElementType;
};

export default function BasicCard({ items, layout }: BasicCardProps) {
  return (
    <>
      {layout === "design-process" ? (
        <>
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-neutral-bold flex rounded-xl flex-col gap-4 md:gap-6 p-4 bg-none border w-full rounded-xl border-neutral-bold"
            >
              {item.icon}

              <Typography as="p" variant="body1">
                <span className="text-neutral-soft2x">{item.name}</span>{" "}
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
