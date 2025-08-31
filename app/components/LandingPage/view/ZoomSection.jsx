import { useLandingController } from "../controller/useLandingController";

export default function ZoomSection() {
  const {
    zoomWrapperRef,
    zoomImgRef,
    zoomHeroRef,
    splitContainer,
    left,
    center,
    right,
    circleMask,
    imgUrl,
  } = useLandingController();

  return (
    <main
      className="relative w-full max-w-full overflow-x-hidden"
      style={{ maxWidth: "100vw" }}
    >
      {/* 🔹 Combined Zoom + Split */}
      <section
        ref={zoomWrapperRef}
        className="relative w-full max-w-full overflow-hidden"
        aria-label="Hero Zoom Section"
      >
        {/* Main Background Image */}
        <div
          ref={zoomHeroRef}
          className="w-full h-screen bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />

        {/* Foreground Image for Zoom */}
        <div className="absolute inset-0 z-10 perspective-[500px] overflow-hidden">
          <img
            ref={zoomImgRef}
            src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
            alt="Main visual zoom effect"
            className="w-full h-full object-cover object-center will-change-transform"
            loading="eager"
          />
        </div>
      </section>

      {/* 🔹 Split Animation (Reuses Same Image) */}
      <section
        className="relative w-full h-full min-h-screen overflow-hidden bg-black"
        ref={splitContainer}
        aria-label="Image Split Scroll Animation"
      >
        {/* Left slice */}
        <div
          ref={left}
          className="absolute top-0 left-0 w-1/3 h-full bg-cover bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: "0% center", // show left part
            backgroundSize: "300% 100%", // make image span 3 slices
          }}
        />

        {/* Center slice */}
        <div
          ref={center}
          className="absolute top-0 left-1/3 w-1/3 h-full bg-cover bg-no-repeat flex items-center justify-center will-change-transform"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: "50% center", // show middle part
            backgroundSize: "300% 100%",
          }}
        >
          {/* Circle Reveal */}
          <div
            ref={circleMask}
            className="absolute w-full h-full top-0 left-0 overflow-hidden opacity-0"
            style={{ clipPath: "circle(0% at 50% 50%)" }}
          >
            <article className="flex flex-col w-full h-full bg-[#B6FF00] items-center justify-center p-6 text-black">
              <h1 className="text-3xl font-bold text-center mb-4">
                Lorem. Ipsum. Lorem.
              </h1>
              <p className="text-lg text-center max-w-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
            </article>
          </div>
        </div>

        {/* Right slice */}
        <div
          ref={right}
          className="absolute top-0 right-0 w-1/3 h-full bg-cover bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: "100% center", // show right part
            backgroundSize: "300% 100%",
          }}
        />
      </section>
    </main>
  );
}
