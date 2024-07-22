import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";
import Typography from "../Typography/Typography";
import cn from "../../util/cn";
import { useNavigate } from "react-router-dom";


const cardStyles = cva(
  "flex flex-col pl-10 pt-10 gap-2 rounded-3xl overflow-hidden bg-clip-border",
  {
    variants: {
      variant: {
        primary: "bg-gradient-image-primary bg-cover text-neutral-soft4x",
        secondary: "bg-neutral-bold opacity-30",
      },
      size: {
        lg: "h-[550px] w-[700px]",
        md: "h-[500px] w-[600px]",
        sm: "h-[300px] w-[400px]",
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
  projectName: string;
  projectType: string;
  projectImage: string;
  projectUrl: string;
}

const CarouselCard: React.FC<CarouselProps> = ({
  variant,
  size,
  projectName,
  projectType,
  projectImage,
  projectUrl,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(projectUrl);
  };

  return (
    <div className={cn(cardStyles({ variant, size }))} onClick={handleClick}>
      <Typography
        as="h3"
        variant="heading2"
        className={
          variant === "primary" ? "text-neutral-soft2x" : "text-neutral-main"
        }
      >
        {projectName}
      </Typography>
      <Typography as="h3" variant="heading7">
        {projectType}
      </Typography>
      <div className="mt-auto ml-auto mr-[-100px] mb-[-35px]">
        <img src={projectImage} alt="Project 1 cover" />
      </div>
    </div>
  );
};

export default CarouselCard;
