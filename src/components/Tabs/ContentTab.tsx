import React, { useEffect, useState } from "react";
import Typography from "../Typography/Typography";
import TextButton from "../Button/TextButton";
import { Link, useLocation } from "react-router-dom";

type ContentTabProps = {
  items: string[];
  path: "resume" | "website-builder+cms";
};

export default function ContentTab({ items, path }: ContentTabProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.6,
    });

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    const section = document.getElementById(id);
    const offsetTop = section?.offsetTop || 0;
    const windowHeight = window.innerHeight;
    const scrollPosition = offsetTop - windowHeight / 4;
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
    console.log("clicked");
    setActiveSection(id);
  };

  return (
    <div className="hidden lg:fixed lg:h-[90%] lg:flex lg:flex-col lg:justify-between lg:pb-6">
      <div className="lg:mt-4 lg:flex lg:flex-col lg:gap-4">
        <Typography as="h3" variant="heading5">
          Contents
        </Typography>
        {items.map((item, index) => (
          <Link to={`/${path}#${item}`}>
            <div
              className="flex gap-2 items-center"
              key={index}
              onClick={() => handleClick(item)}
            >
              <Typography
                as="p"
                variant={activeSection === item ? "body5" : "body3"}
              >
                {item}
              </Typography>
              {activeSection === item && (
                <div className="w-1 h-1 bg-neutral-soft2x rounded-full"></div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {location.pathname === "/resume" && (
        <TextButton
          children="Download CV"
          className="w-fit"
          label="download cv"
          href="/docs/Shyami-Abeysekera-CV.pdf"
        />
      )}
    </div>
  );
}
