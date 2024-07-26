// import React, { ReactNode } from "react";
// import { cva, VariantProps } from "class-variance-authority";
// import classNames from "classnames";

// const buttonStyles = cva("flex items-center justify-center rounded-lg", {
//   variants: {
//     variant: {
//       primary:
//         "text-neutral-soft4x bg-gradient-to-br from-primary-main to-secondary-main hover:from-primary-bold hover:to-secondary-bold hover:text-neutral-soft3x",
//       secondary: "bg-none text-neutral-main hover:text-neutral-soft",
//     },
//     size: {
//       sm: "py-2 px-3 text-xs",
//       md: "py-2 px-4 text-sm",
//       lg: "py-2 px-5 text-md",
//     },
//   },
//   defaultVariants: {
//     variant: "primary",
//     size: "md",
//   },
// });

// interface TextButtonProps extends VariantProps<typeof buttonStyles> {
//   label: string;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
//   href?: string;
//   [x: string]: any;
//   children: ReactNode;
// }

// const TextButton: React.FC<TextButtonProps> = ({
//   label,
//   variant,
//   size,
//   onClick,
//   href,
//   className,
//   children,
//   ...props
// }) => {
  
//   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//     if (onClick) {
//       onClick(e);
//     }
//     if (href) {
//       window.open(href, "_blank", "noopener,noreferrer");
//     }
//   };
//   return (
//     <button
//       aria-label={label}
//       className={classNames(buttonStyles({ variant, size }), className)}
//       onClick={handleClick}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default TextButton;

import React, { ReactNode } from "react";
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
      sm: "py-2 px-3 text-xs",
      md: "py-2 px-4 text-sm",
      lg: "py-2 px-5 text-md",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface TextButtonProps extends VariantProps<typeof buttonStyles> {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  [x: string]: any;
  children: ReactNode;
}

const TextButton: React.FC<TextButtonProps> = ({
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
      // Create an anchor element
      const link = document.createElement("a");
      link.href = href;
      link.download = "Shyami-Abeysekera.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button
      aria-label={label}
      className={classNames(buttonStyles({ variant, size }), className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default TextButton;
