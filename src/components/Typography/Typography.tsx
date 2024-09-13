import React from "react";
import classNames from "classnames";

const variantClasses = {
  heading1:
    "uppercase tracking-widest text-neutral-soft2x font-bold text-lg md:text-xl",
  heading2: "text-neutral-soft font-bold text-lg md:text-xl lg:text-2xl",
  heading3: "text-neutral-soft text-lg md:text-xl lg:text-2xl",
  heading4:
    "tracking-widest bg-gradient-to-br from-primary-main to-secondary-main text-transparent bg-clip-text uppercase font-thin text-2xs md:text-xs",
  heading5:
    "uppercase tracking-widest text-neutral-main font-thin text-2xs md:max-lg:flex:text-xs",
  heading6: "text-lg md:max-lg:flex:text-xs",
  heading7: "uppercase tracking-widest text-md md:max-lg:flex:text-xs",
  body1: "text-neutral-soft text-xs lg:text-sm leading-5 font-light",
  body2: "text-neutral-soft4x text-sm leading-6 font-light",
  body3: "text-neutral-main text-xs leading-6 font-light",
  body4: "text-neutral-main text-sm",
  body5: "text-neutral-soft2x text-xs leading-6 font-light",
};

type Variant = keyof typeof variantClasses;

interface TypographyProps {
  as?: React.ElementType;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Typography: React.FC<TypographyProps> = ({
  as: Component = "p",
  variant = "body1",
  className = "",
  children,
}) => {
  const classes = classNames(variantClasses[variant], className);

  return <Component className={classes} >{children}</Component>;
};

export default Typography;
