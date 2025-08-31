import React from "react";
import { useLandingController } from "../controller/useLandingController";

const Home = () => {
  const { scale, tilt, broken, text } = useLandingController();
  return (
    <main className="relative w-screen min-h-[2000px] bg-black text-[#F2F2F2] overflow-x-hidden">
      {/* Hero Section */}
      <header
        id="expandable"
        className="fixed top-10 left-0 w-screen text-center font-bold uppercase"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center top",
        }}
      >
        <h1 className="text-[5vw] tracking-wide">
          {text.split("").map((letter, i) => (
            <span
              key={i}
              className={`inline-block transition-all duration-700 ease-out ${
                broken
                  ? i % 2 === 0
                    ? "-translate-y-20 opacity-0 rotate-12"
                    : "translate-y-20 opacity-0 -rotate-12"
                  : "translate-y-0 opacity-100 rotate-0"
              }`}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>
      </header>

      <section
        className="absolute top-[120vh] w-full flex justify-center gap-[120px] px-4"
        aria-label="About lorem ipsum"
      >
        <article
          className="bg-[#39FF14] w-[300px] h-[400px] shadow-xl transition-transform duration-500 flex flex-col rounded-xl"
          style={{ transform: `rotate(${tilt}deg)` }}
        >
          <div className="flex flex-col mt-auto mb-2 p-4">
            <h2 className="text-2xl font-bold mb-2 text-center">Lorem Ipsum</h2>
            <p className="text-sm text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              since the 1500s.
            </p>
          </div>
        </article>

        <article
          className="bg-[#B6FF00] w-[300px] h-[400px] shadow-xl transition-transform duration-500 flex flex-col rounded-xl"
          style={{ transform: `rotate(-${tilt}deg)` }}
        >
          <div className="flex flex-col mt-auto mb-2 p-4">
            <h2 className="text-2xl font-bold mb-2 text-center">Lorem Ipsum</h2>
            <p className="text-sm text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&aps;s standard dummy
              text since the 1500s.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
