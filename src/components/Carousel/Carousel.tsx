import { useState, useEffect } from "react";
import CarouselCard from "./CarouselCard";

type CarouselProps = {
  items: { name: string; type: string; image: any; url: string; isAvailable: boolean }[];
};

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(items.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => {
        setPrevIndex(current);
        if (current === items.length - 1) return 0;

        return current + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  
  return (
    <div className="relative w-full h-full flex flex-row gap-10 justify-center items-center">
      {items.map((item, index) => {
        const isFirstItem = index === 0;
        const isLastItem = index === items.length - 1;
        const showFirstItem = currentIndex === items.length - 1;
        const showLastItem = currentIndex === 0;
        const isActive = index === currentIndex;

        const isNext =
          index === currentIndex + 1 || (isFirstItem && showFirstItem);

        const isPrev =
          index === currentIndex - 1 || (isLastItem && showLastItem);

        const isPrevOfPrev =
          index === prevIndex - 1 || (isLastItem && prevIndex === 0);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [variant, setVariant] = useState(
          isActive ? "primary" : "secondary"
        );

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          if (!isActive) setVariant("secondary");
        }, [isActive]);

        return (
          <div
            key={index}
            className={`mb-20 md:mb-24 absolute transition-transform duration-1000 ease-in-out ${
              isActive ? "t-[100%] z-10" : "z-0"
            } ${isPrev ? "translate-x-[103%] translate-y-[-15%]" : ""} ${
              isNext ? "translate-x-[-103%] translate-y-[25%]" : ""
            } ${isPrevOfPrev ? "translate-x-[222%] translate-y-[-30%]" : ""}
            ${
              !isActive && !isPrev && !isNext && !isPrevOfPrev
                ? "translate-x-[-222%] translate-y-[50%] invisible"
                : ""
            }`}
            onTransitionEnd={(e) => {
              const isTransform = e.nativeEvent.propertyName === "transform";
              if (!isTransform) return;
              setVariant(isActive ? "primary" : "secondary");
            }}
          >
            <CarouselCard
              variant={variant as any}
              size={isActive ? "lg" : "md"}
              projectName={item.name}
              projectType={item.type}
              projectImage={item.image}
              projectUrl={item.url}
              layout={item.isAvailable}
            />
          </div>
        );
      })}
    </div>
  );
}
