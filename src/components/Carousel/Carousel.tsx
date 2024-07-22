import { useState, useEffect } from "react";
import CarouselCard from "./CarouselCard";

type CarouselProps = {
  items: { name: string; type: string; image: any; url: string }[];
};

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="relative w-full h-screen flex flex-row gap-10 justify-center items-center">
      {items.map((item, index) => {
        const isActive = index === currentIndex;
        const isPrev =
          index === (currentIndex - 1 + items.length) % items.length;
        const isNext = index === (currentIndex + 1) % items.length;

        return (
          <div
            key={index}
            className={`top-[-25px] absolute transition-transform duration-1000 ease-in-out ${
              isActive ? "t-[100%] z-10" : "z-0"
            } ${isPrev ? "translate-x-[111%] translate-y-[-15%]" : ""} ${
              isNext ? "translate-x-[-111%] translate-y-[25%]" : ""
            }`}
          >
            {isActive}
            <CarouselCard
              variant={isActive ? "primary" : "secondary"}
              size={isActive ? "lg" : "md"}
              projectName={item.name}
              projectType={item.type}
              projectImage={item.image}
              projectUrl={item.url}
            />
          </div>
        );
      })}
    </div>
  );
}
