import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";
import Typography from "../Typography/Typography";
import cn from "../../util/cn";
import { useNavigate } from "react-router-dom";

const cardStyles = cva(
  "flex flex-col rounded-3xl overflow-hidden bg-clip-border",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-image-primary bg-cover text-neutral-soft4x hover:cursor-pointer hover:bg-gradient-image-primary-hover",
        secondary: "bg-neutral-bold opacity-50 hover:cursor-pointer",
      },
      size: {
        lg: "h-[52vh] w-[82vw] md:h-[54vh] md:w-[65vw] xl:h-[65vh] lg:w-[50vw]",
        md: "h-[52vh] w-[82vw] md:h-[54vh] md:w-[65vw] xl:h-[65vh] lg:w-[50vw]",
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
        <div className="h-full flex flex-col justify-start gap-4 lg:gap-10">
          <div className="flex mt-6 ml-6 md:mt-8 md:ml-10 flex-col lg:gap-2">
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
          </div>
          <div className="flex w-full h-full relative px-4 justify-center items-center">
            <img src={projectImage} alt="Project cover" className=""/>
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
