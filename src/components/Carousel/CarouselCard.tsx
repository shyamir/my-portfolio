import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";
import Typography from "../Typography/Typography";
import cn from "../../util/cn";
import { useNavigate } from "react-router-dom";

const cardStyles = cva(
  "flex flex-col gap-2 rounded-3xl overflow-hidden bg-clip-border",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-image-primary bg-cover text-neutral-soft4x hover:cursor-pointer hover:bg-gradient-image-primary-hover",
        secondary: "bg-neutral-bold opacity-50 hover:cursor-pointer",
      },
      size: {
        lg: "h-[58vh] w-[82vw] md:h-[68vh] md:w-[48vw] lg:h-[70vh] lg:w-[50vw]",
        md: "h-[57.5vh] w-[81.5vw] md:h-[67.5vh] md:w-[47.5vw] lg:h-[69.5vh] lg:w-[49.5vw]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface CarouselProps extends VariantProps<typeof cardStyles> {
  children?: ReactNode;
  items?: [];
  projectName?: string;
  projectType?: string;
  projectImage?: string;
  projectUrl: string;
  layout: boolean;
}

const CarouselCard: React.FC<CarouselProps> = ({
  variant,
  size,
  projectName,
  projectType,
  projectImage,
  projectUrl,
  layout,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(projectUrl);
  };

  return (
    <div className={cn(cardStyles({ variant, size }))} onClick={handleClick}>
      {layout ? (
        <div className="md:pl-10 pl-6 md:pt-10 pt-6">
          <Typography
            as="h3"
            variant="heading2"
            className={
              variant === "primary"
                ? "text-neutral-soft2x"
                : "text-neutral-main"
            }
          >
            {projectName}
          </Typography>
          <Typography as="h3" variant="heading7">
            {projectType}
          </Typography>
          <div className="mt-auto ml-auto mb-[0px]">
            <img src={projectImage} alt="Project 1 cover" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center absolute h-full w-full">
          <Typography as="h3" variant="heading7">
            {projectType}
          </Typography>
          <Typography as="h3" variant="heading7" className="text-neutral-soft">
            coming soon
          </Typography>
        </div>
      )}
    </div>
  );
};

export default CarouselCard;
