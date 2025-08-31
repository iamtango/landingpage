import { useLandingController } from "../controller/useLandingController";

export default function GlobeScrollAnimation() {
  const { globeRef, orbitRef, SKILLS } = useLandingController();
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-black text-white overflow-hidden py-40">
      {/* Globe + Orbit Container */}
      <div
        ref={globeRef}
        className="relative w-[400px] h-[400px] flex items-center justify-center"
      >
        {/* Disco Ball / Globe */}
        <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-gray-200 via-gray-500 to-gray-800 shadow-[0_0_50px_rgba(255,255,255,0.6)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)] opacity-40 animate-spin-slow"></div>
        </div>

        {/* Orbiting Skills Container */}
        <div
          ref={orbitRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          {SKILLS.map((skill, i) => {
            const angle = (360 / SKILLS.length) * i;
            return (
              <span
                key={i}
                className="absolute text-sm font-bold px-2 py-1 rounded-full bg-white text-black shadow-md"
                style={{
                  transform: `rotate(${angle}deg) translateX(308px)`,
                  transformOrigin: "0 0",
                }}
              >
                {skill.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
