import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Rahul from "@/assets/hero_image.png";
import bgElement from "@/assets/hero-banner-bg-element.png";

export default function Hero() {
  return (
    <section
      className="
        relative isolate overflow-hidden pt-10 sm:pt-24 pb-16 min-h-[calc(100dvh-64px)] sm:min-h-[75vh] lg:min-h-[70vh]
      "
    >
      {/* Brand gradient background */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#00CCAA_0%,#009C8C_40%,#202125_100%)]" />

      {/* Centered decorative background element (no stretch) */}
      <img
        src={bgElement}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute -z-10
          left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[60vmin] max-w-[520px] h-auto
          opacity-20 sm:opacity-25
          transition-transform duration-500 ease-out
        "
      />

      <Container>
        {/* grid: image first on mobile, text second; swap on lg */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Right on desktop / First on mobile: Portrait */}
          <div className="order-1 lg:order-2 flex justify-center lg:space-evenly">
            <div
              className="
                group relative
                rounded-2xl p-[6px]
                bg-white/5 backdrop-blur-sm
                ring-1 ring-white/10
                transition-transform duration-500
                hover:scale-[1.02]
              "
            >
              {/* soft teal glow on hover */}
              <div className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(closest-side,rgba(0,204,170,0.25),transparent)]" />
              <img
                src={Rahul}
                alt="Rahul Deb"
                className="
                 block aspect-square
    h-[52vw] max-h-[340px]    /* mobile: responsive & bounded */
    sm:h-[45vmin] sm:max-h-[420px]
    lg:h-[45vmin] lg:max-h-[520px]
    rounded-xl object-cover
    shadow-[0_10px_30px_rgba(0,0,0,0.25)]
    transition-all duration-500 ease-out
    group-hover:rotate-[-1.5deg] group-hover:scale-[1.02]
                "
              />
            </div>
          </div>

          {/* Left on desktop / Second on mobile: Text */}
          <div className="order-2 lg:order-1 text-white">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
              An Engineer{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD369] to-[#FFB703]">
                by Mind
              </span>{" "}
              <span className="text-white/90">&amp;</span>{" "}
              a Coder {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD369] to-[#FFB703]">
                by Soul
              </span>
              .
            </h1>

            {/* Description with accent bar */}
            <div className="relative mt-5 pl-4 sm:pl-5 max-w-2xl">
              <span className="pointer-events-none absolute left-0 top-1 bottom-1 w-1 rounded-full bg-gradient-to-b from-[#00CCAA] via-[#009C8C] to-[#FFB703]" />
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                3+ years of shaping ideas into{" "}
                <span className="font-semibold text-white">design systems</span>,
                building{" "}
                <span className="font-semibold text-white">responsive websites</span>,
                and sharing what I learn along the way — with a dream of becoming a{" "}
                <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD369] to-[#FFB703]">
                  Top Freelancer
                </span>{" "}
                one day.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex items-center gap-3">
              <Button
                variant="primary"
                onClick={() => (window.location.href = "/projects")}
                className="group"
              >
                <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
                  See My Work
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}