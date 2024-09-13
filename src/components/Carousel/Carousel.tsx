import { useState, useEffect, useRef } from "react";
import CarouselCard from "./CarouselCard";

type CarouselProps = {
  items: {
    name: string;
    type: string;
    image: any;
    url: string;
    isAvailable: boolean;
  }[];
};

let transitioning = false;
export default function Carousel({ items }: CarouselProps) {
  const [carouselState, setCarouselState] = useState({
    prevOfPrev: items.length - 2,
    prev: items.length - 1,
    active: 0,
    next: 1,
    nextOfNext: 2,
    downScroll: true,
  });
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: any;

    const scrollHandler = (e: WheelEvent) => {
      e.stopPropagation();
      e.preventDefault();

      if (transitioning) return;
      transitioning = true;

      const isDownScrolled = e.deltaY > 0;

      return updateStates(isDownScrolled);
    };

    let touches = new Map<number, { start: number }>();
    const touchStartHandler = (e: TouchEvent) => {
      // only checking the first touch for now
      const firstTouch = e.changedTouches?.[0];
      if (!firstTouch) return;

      touches.set(firstTouch.identifier, { start: firstTouch.screenX });
    };

    const touchCancelHandler = (e: TouchEvent) => {
      const firstTouch = e.changedTouches?.[0];
      if (!firstTouch) return;
      touches.delete(firstTouch.identifier);
    };

    const touchEndHandler = (e: TouchEvent) => {
      const firstTouch = e.changedTouches[0];
      if (!firstTouch) return;

      const touchObj = touches.get(firstTouch.identifier);

      if (!touchObj) return;

      const touchEndY = firstTouch.screenX;
      const delta = touchEndY - touchObj.start;

      if (delta < 10 && delta > -10) return;
      e.preventDefault();
      e.stopPropagation();

      const isDownScrolled = delta > 0;
      return updateStates(isDownScrolled);
    };

    const updateStates = (isDownScrolled: boolean) => {
      let active = 0;
      let prev = 0;
      let prevOfPrev = 0;
      let next = 0;
      let nextOfNext = 0;
      let downScroll = true;

      setCarouselState((curr) => {
        if (isDownScrolled) {
          active = curr.next;
          prev = curr.active;
          prevOfPrev = curr.prev;
          next = curr.nextOfNext;
          nextOfNext = next + 1 > items.length - 1 ? 0 : next + 1;
          downScroll = true;
        } else {
          active = curr.prev;
          prev = curr.prevOfPrev;
          prevOfPrev = prev - 1 < 0 ? items.length - 1 : prev - 1;
          next = curr.active;
          nextOfNext = curr.next;
          downScroll = false;
        }

        return {
          prevOfPrev,
          prev,
          active,
          next,
          nextOfNext,
          downScroll,
        };
      });

      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        transitioning = false;
      }, 1000);
    };

    carouselContainerRef?.current?.addEventListener?.("wheel", scrollHandler);
    carouselContainerRef?.current?.addEventListener?.(
      "touchstart",
      touchStartHandler
    );
    carouselContainerRef?.current?.addEventListener?.(
      "touchend",
      touchEndHandler
    );
    carouselContainerRef?.current?.addEventListener?.(
      "touchcancel",
      touchCancelHandler
    );

    return () => {
      if (timeout) clearTimeout(timeout);
      carouselContainerRef?.current?.removeEventListener(
        "wheel",
        scrollHandler
      );
      carouselContainerRef?.current?.removeEventListener(
        "touchstart",
        touchStartHandler
      );
      carouselContainerRef?.current?.removeEventListener(
        "touchend",
        touchEndHandler
      );
      carouselContainerRef?.current?.removeEventListener(
        "touchcancel",
        touchCancelHandler
      );
    };
  }, [items.length]);

  return (
    <div
      ref={carouselContainerRef}
      className="relative w-full h-full flex flex-row gap-10 justify-center items-center"
    >
      {items.map((item, index) => {
        const isActive = carouselState.active === index;
        const isNext = carouselState.next === index;
        const isNextOfNext = carouselState.nextOfNext === index;
        const isPrev = carouselState.prev === index;
        const isPrevOfPrev = carouselState.prevOfPrev === index;
        const isDownScrolled = carouselState.downScroll;
        const shouldAddTransition =
          isActive ||
          isPrev ||
          isNext ||
          (isDownScrolled && isPrevOfPrev) ||
          (!isDownScrolled && isNextOfNext);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [variant, setVariant] = useState(
          isActive ? "primary" : "secondary"
        );

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          if (!isActive) setVariant("secondary");
        }, [isActive]);

        if (!isActive && !isPrev && !isNext && !isPrevOfPrev && !isNextOfNext) {
          return <></>;
        }

        return (
          <div
            key={index}
            className={`mb-20 md:mb-24 absolute 
              ${
                shouldAddTransition &&
                "transition-transform duration-1000 ease-in-out "
              }
              ${isActive ? "t-[100%] z-10" : "z-0"} 
              ${isPrev && "translate-x-[103%] translate-y-[-15%]"} 
              ${isNext && "translate-x-[-103%] translate-y-[25%]"}
              ${isPrevOfPrev && "translate-x-[222%] translate-y-[-30%]"}
              ${isNextOfNext && "translate-x-[-222%] translate-y-[50%]"}`}
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