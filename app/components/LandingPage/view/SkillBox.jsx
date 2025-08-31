import React, { useState, useMemo } from "react";
import { useLandingController } from "../controller/useLandingController";

const SkillBox = () => {
  const {
    SKILLS: skills,
    skillPositions,
    hoveredSkill,
    setHoveredSkill,
  } = useLandingController();
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center p-8"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl w-full space-y-4">
        {/* Header */}
        <header className="text-center mb-16">
          <h2
            id="skills-heading"
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Where does it come from?
          </h2>
        </header>
        <p className="text-lg text-purple-200 max-w-md leading-relaxed ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>

        {/* Skills Container */}
        <div className="relative w-full h-96 overflow-hidden" role="list">
          {/* Background */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-purple-800/50 via-pink-600/30 to-blue-600/50 rounded-3xl backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Skills Row (bottom aligned) */}
          {skills.map((skill, i) => (
            <div
              key={skill.id}
              role="listitem"
              className="absolute transition-transform duration-300 ease-in-out cursor-pointer"
              style={{
                left: skillPositions[i].left,
                bottom: "20px",
                transform: `${
                  hoveredSkill === skill.id
                    ? "translate(-50%, -80px) scale(1.1)"
                    : "translate(-50%, 0) scale(1)"
                }`,
              }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <span
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                  ${
                    hoveredSkill === skill.id
                      ? "bg-white text-purple-700 shadow-xl"
                      : "bg-white/90 text-purple-600 shadow-lg"
                  }
                  backdrop-blur-sm border border-white/20
                `}
              >
                {skill.name}
                {hoveredSkill === skill.id && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-ping" />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillBox;
