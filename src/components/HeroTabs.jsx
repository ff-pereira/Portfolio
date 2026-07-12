import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import AnimatedBlob from "./AnimatedBlob.jsx";

const HeroTabs = ({ slides }) => {
  const [currentId, setCurrentId] = useState(null);
  const sliderRef = useRef(null);
  const tabsRef = useRef([]);
  const containerRef = useRef(null);
  const tabContainerHeight = 70;

  useEffect(() => {
    const handleScroll = () => {
      checkTabContainerPosition();
      findCurrentTab();
    };

    const handleResize = () => {
      if (currentId) setSliderCss(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Set initial slider
    findCurrentTab();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentId]);

  const scrollToSlide = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - tabContainerHeight + 1,
        behavior: "smooth",
      });

      // Add this timeout to ensure slider updates if scroll event doesn't fire
      setTimeout(() => {
        setCurrentId(id);
      }, 500);
    }
  };

  const checkTabContainerPosition = () => {
    if (!containerRef.current) return;
    const offset =
        containerRef.current.parentElement.offsetTop +
        containerRef.current.parentElement.offsetHeight -
        tabContainerHeight;

    if (window.scrollY > offset) {
      containerRef.current.classList.add("et-hero-tabs-container--top");
    } else {
      containerRef.current.classList.remove("et-hero-tabs-container--top");
    }
  };

  const findCurrentTab = () => {
    let newCurrentId = null;
    let closestDistance = Infinity;

    slides.forEach((slide) => {
      const el = document.getElementById(slide.id);
      const offsetTop = el.offsetTop - tabContainerHeight;
      const offsetBottom = el.offsetTop + el.offsetHeight - tabContainerHeight;

      if (window.scrollY >= offsetTop && window.scrollY <= offsetBottom) {
        newCurrentId = slide.id;
      }

      // Find closest section for better accuracy
      const distance = Math.abs(window.scrollY - offsetTop);
      if (distance < closestDistance) {
        closestDistance = distance;
        newCurrentId = slide.id;
      }
    });

    if (currentId !== newCurrentId) {
      setCurrentId(newCurrentId);
      setSliderCss(newCurrentId);
    }
  };

  const setSliderCss = (id) => {
    const index = slides.findIndex((slide) => slide.id === id);
    if (index >= 0 && tabsRef.current[index]) {
      const tab = tabsRef.current[index];
      sliderRef.current.style.width = `${tab.offsetWidth}px`;
      sliderRef.current.style.left = `${tab.offsetLeft}px`;
    }
  };

  return (
      <section className="et-hero-tabs bg-teal-50 z-40 relative">
        <a href="/CV_Filipe_Pereira.pdf" download
           className="text-white hover:text-secondary z-50 bg-secondary hover:bg-white border hover:scale-105 active:scale-95 border-secondary transform transition ease-in-out duration-200 absolute top-4 md:top-8 right-4 md:right-8 rounded-full shadow-lg p-4 md:p-6 flex flex-col justify-center items-center gap-1 md:gap-2">
          <svg className="w86 md:w-12 h-8 md:h-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/>
          </svg>
          <div className="font-semibold text-sm md:text-base">Download my CV</div>
        </a>

        <AnimatedBlob/>

        <div className="z-30 bg-white text-teal-800 rounded-xl shadow-lg mx-12 md:mx-0 md:-mt-18 p-6 md:p-12">
          <div className="hidden md:block tracking-tight text-6xl font-bold">Filipe Fernandez Pereira</div>
          <div className="md:hidden tracking-tight text-5xl font-bold">Filipe Pereira</div>
          <div className="hidden md:block mt-2 text-2xl">System Integrator and Full-Stack Software Engineer</div>
          <div className="md:hidden mt-2 text-xl">System Integrator and <br/> Full-Stack Software Engineer</div>
        </div>

        <div className="et-hero-tabs-container" ref={containerRef}>
          {slides.map((slide, index) => (
              <a
                  key={slide.id}
                  ref={(el) => (tabsRef.current[index] = el)}
                  className="et-hero-tab text-[0.65rem] md:text-[0.8rem]"
                  href={`#${slide.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSlide(slide.id);
                    // Remove setSliderCss call from here
                  }}
              >
                {slide.title}
              </a>
          ))}
          <span className="et-hero-tab-slider" ref={sliderRef}></span>
        </div>
      </section>
  );
};

export default HeroTabs;
