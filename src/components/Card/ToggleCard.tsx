import React, { useState } from "react";
import Typography from "../Typography/Typography";

type ToggleCardProps = {
  image1: string;
  image2: string;
  text: string;
};

export default function ToggleCard({ image1, image2, text }: ToggleCardProps) {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const toggleImage = () => {
    setIsFirstImage(!isFirstImage);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-neutral-bold2x p-4 rounded-lg shadow-md">
        <img
          src={isFirstImage ? image1 : image2}
          alt="Toggle"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <label className="flex gap-4 align-right justify-end items-center mt-4 cursor-pointer w-full ">
        <div className="relative rounded-full hover:drop-shadow-md">
          <input
            type="checkbox"
            checked={!isFirstImage}
            onChange={toggleImage}
            className="sr-only"
          />
          <div
            className={`block border border-neutral-main w-14 h-8 rounded-full ${
              isFirstImage
                ? "bg-none"
                : "border-none bg-gradient-to-br from-primary-main to-secondary-main"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform ${
              isFirstImage
                ? "bg-neutral-soft"
                : "transform translate-x-6 bg-neutral-bold3x"
            }`}
          ></div>
        </div>
        <Typography as="p" variant="body1">
          {text}
        </Typography>
      </label>
    </div>
  );
}
