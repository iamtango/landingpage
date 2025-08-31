import { useLandingController } from "../controller/useLandingController";

export default function StackedCardsSection() {
  const { containerRef, itemsRef, CARDS: cards } = useLandingController();

  return (
    <main className="bg-black min-h-screen py-20">
      {/* Intro */}
      <header className="mb-12">
        <h1 className="text-white text-5xl md:text-6xl font-bold text-right mr-4">
          Where Can I Get Some?
        </h1>
      </header>

      {/* Stack Cards */}
      <section ref={containerRef} className="relative w-[95%] mx-auto px-4">
        {cards.map((card, index) => (
          <article
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`sticky top-20 w-full rounded-3xl ${card.bgColor} mb-8 shadow-2xl overflow-hidden will-change-transform`}
            style={{
              zIndex: card.zIndex,
              minHeight: "500px",
              transform:
                "translateY(var(--stack-offset, 0)) scale(var(--scale, 1))",
              transformOrigin: "center top",
              transition: "transform 0.2s ease-out",
              boxShadow: "-28px -17px 64.7px 0px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="p-12 h-full flex flex-col">
              {/* Main content */}
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-white text-6xl md:text-8xl font-bold leading-tight">
                  {card.content}
                </h2>
              </div>

              {/* Bottom section (last card only) */}
              {card.hasBottomSection && (
                <section className="mt-6">
                  <header className="mb-8">
                    <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                      Where Can I Get Some?
                    </h3>
                    <p className="text-gray-300 text-base max-w-2xl">
                      {card.description}
                    </p>
                  </header>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-2">
                    <div className="w-full h-[250px] sm:h-[300px] md:h-[500px] rounded-[30px] bg-white"></div>

                    <div className="flex flex-col justify-center max-w-full md:max-w-lg">
                      <h4 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        Where Can I Get Some?
                      </h4>
                      <p className="text-gray-300 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>

                    <div className="flex flex-col justify-center max-w-full md:max-w-lg">
                      <p className="text-gray-300 mb-2 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                        See More
                      </h4>
                    </div>

                    <div className="w-full h-[150px] sm:h-[200px] md:h-[300px] rounded-[30px] bg-white"></div>
                  </div>
                </section>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
