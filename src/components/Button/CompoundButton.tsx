import React, { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";

const buttonStyles = cva("flex items-center rounded-lg", {
  variants: {
    variant: {
      primary:
        "text-neutral-soft4x bg-gradient-to-br from-primary-main to-secondary-main hover:from-primary-bold hover:to-secondary-bold hover:text-neutral-soft3x",
      secondary: "flex gap-2 bg-none text-neutral-main hover:text-neutral-soft",
    },
    size: {
      sm: "py-2 text-xs",
      md: "py-2 text-sm",
      lg: "py-2 text-md",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface IconButtonProps extends VariantProps<typeof buttonStyles> {
  icon: React.ElementType;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  [x: string]: any;
  children: ReactNode;
}

const CompoundButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  label,
  variant,
  size,
  onClick,
  href,
  className,
  children,
  ...props
}) => {
  
 const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
   if (onClick) {
     onClick(e);
   }
   if (href) {
     window.location.href = href; // Navigate to the href value in the same tab
   }
 };

  return (
    <button
      type="button"
      className={classNames(buttonStyles({ variant, size }), className)}
      onClick={handleClick}
      aria-label={label}
      {...props}
    >
      <Icon />
      {children}
    </button>
  );
};

export default CompoundButton;
