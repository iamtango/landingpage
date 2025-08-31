import { useState, useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SKILLS = [
  { id: 1, name: "React" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "TypeScript" },
  { id: 4, name: "Node.js" },
  { id: 5, name: "Python" },
  { id: 6, name: "Next.js" },
  { id: 7, name: "Tailwind CSS" },
  { id: 8, name: "MongoDB" },
  { id: 9, name: "GraphQL" },
  { id: 10, name: "AWS" },
  { id: 11, name: "React" },
  { id: 12, name: "JavaScript" },
];

export const CARDS = [
  {
    content: "Lorem",
    bgColor: "bg-gray-400",
    zIndex: 1,
  },
  {
    content: "Lorem",
    bgColor: "bg-gray-500",
    zIndex: 2,
  },
  {
    content: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    hasBottomSection: true,
    bgColor: "bg-gray-800",
    zIndex: 3,
  },
];

export function useLandingController() {
  const [scale, setScale] = useState(1);
  const [broken, setBroken] = useState(false);
  const [tilt, setTilt] = useState(0);

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const zoomWrapperRef = useRef(null);
  const zoomImgRef = useRef(null);
  const zoomHeroRef = useRef(null);
  const splitContainer = useRef(null);
  const left = useRef(null);
  const center = useRef(null);
  const right = useRef(null);
  const circleMask = useRef(null);

  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const text = "LOREM IPSUM";

  const imgUrl =
    "https://images.unsplash.com/photo-1589848315097-ba7b903cc1cc?q=80&w=2070&auto=format&fit=crop";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = window.innerHeight;

      // scale effect
      const newScale = Math.min(20, 1 + 0.005 * scrollTop);
      setScale(newScale);

      // tilt effect
      if (scrollTop > triggerPoint * 0.5) {
        setTilt(Math.min(15, (scrollTop - triggerPoint * 0.5) * 0.05));
      } else {
        setTilt(0);
      }

      // break apart effect
      setBroken(scrollTop > triggerPoint * 0.8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skillPositions = useMemo(() => {
    const total = SKILLS.length;
    return SKILLS.map((_, i) => ({
      left: `${(i + 0.5) * (100 / total)}%`, // distribute evenly
    }));
  }, [SKILLS.length]);

  useEffect(() => {
    /**  Zoom Effect */
    const zoomCtx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: zoomWrapperRef.current,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: true,
          },
        })
        .to(zoomImgRef.current, {
          scale: 2,
          z: 350,
          transformOrigin: "center center",
          ease: "power1.inOut",
        })
        .to(
          zoomHeroRef.current,
          {
            scale: 1.1,
            transformOrigin: "center center",
            ease: "power1.inOut",
          },
          "<"
        );
    }, zoomWrapperRef);

    /**  Split Animation */
    const splitCtx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: splitContainer.current,
            start: "top top",
            end: "+=400%",
            scrub: true,
            pin: true,
          },
        })
        .to(left.current, { yPercent: -50, opacity: 0, ease: "none" })
        .to(right.current, { yPercent: -50, opacity: 0, ease: "none" }, "<")
        .to(center.current, { scale: 2, ease: "none" }, ">")
        .fromTo(
          circleMask.current,
          { clipPath: "circle(0% at 50% 50%)", opacity: 0 },
          {
            clipPath: "circle(50% at 50% 50%)",
            opacity: 1,
            ease: "power1.out",
          },
          "<0.2"
        )
        .to(center.current, { scaleX: 3, ease: "power1.inOut" }, "<0.5")
        .to(center.current, { opacity: 0, ease: "power1.out" }, "<0.3");
    }, splitContainer);

    return () => {
      zoomCtx.revert();
      splitCtx.revert();
    };
  }, []);

  useEffect(() => {
    function animateStackCards() {
      const container = containerRef.current;
      const items = itemsRef.current;
      if (!container || !items.length) return;

      const windowHeight = window.innerHeight;

      items.forEach((item, index) => {
        if (!item) return;

        const itemRect = item.getBoundingClientRect();
        const itemTop = itemRect.top;

        const scrollProgress = Math.max(
          0,
          Math.min(1, (windowHeight - itemTop) / windowHeight)
        );

        const scale = Math.max(0.85, 1 - scrollProgress * 0.15);
        const stackOffset = (CARDS.length - 1 - index) * 20;

        // Update via CSS vars (better perf)
        item.style.setProperty("--stack-offset", `${stackOffset}px`);
        item.style.setProperty("--scale", scale);
      });
    }

    animateStackCards();
    const handleScroll = () => requestAnimationFrame(animateStackCards);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", animateStackCards);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", animateStackCards);
    };
  }, []);

  const globeRef = useRef(null);
  const orbitRef = useRef(null);

  const skills = [
    "React.js",
    "Next.js",
    "Tailwind",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Redux",
    "GSAP",
    "HTML",
    "CSS",
  ];

  useEffect(() => {
    // Move globe from center to left on scroll
    gsap.to(globeRef.current, {
      x: "-35vw",
      scrollTrigger: {
        trigger: globeRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    // Start orbit animation after globe moves
    const orbitTween = gsap.to(orbitRef.current, {
      rotation: 360,
      transformOrigin: "50% 50%",
      repeat: -1,
      ease: "linear",
      paused: true, // initially paused
      duration: 10,
    });

    // Start orbit when globe reaches left
    ScrollTrigger.create({
      trigger: globeRef.current,
      start: "top 20%",
      onEnter: () => orbitTween.play(),
    });
  }, []);

  return {
    // Hero Section
    scale,
    tilt,
    broken,
    text,

    // Skill Box
    SKILLS,
    skillPositions,
    hoveredSkill,
    setHoveredSkill,

    // Zoom Section
    zoomWrapperRef,
    zoomImgRef,
    zoomHeroRef,
    splitContainer,
    left,
    center,
    right,
    circleMask,
    imgUrl,

    // Stacked Cards Section
    containerRef,
    itemsRef,
    CARDS,

    // Globe Scroll Animation
    globeRef,
    orbitRef,
    skills,
  };
}
