import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";

const buttonStyles = cva("flex items-center justify-center rounded-lg", {
  variants: {
    variant: {
      primary:
        "text-neutral-soft4x bg-gradient-to-br from-primary-main to-secondary-main hover:from-primary-bold hover:to-secondary-bold hover:text-neutral-soft3x",
      secondary: "bg-none text-neutral-main hover:text-neutral-soft",
    },
    size: {
      sm: "h-6 w-6",
      md: "h-8 w-8",
      lg: "h-10 w-10",
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
}

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  label,
  variant,
  size,
  onClick,
  href,
  className,
  ...props
}) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    if (href) {
        window.open(href, "_blank", "noopener,noreferrer");
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
    </button>
  );
};

export default IconButton;
