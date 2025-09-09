import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative isolate">
      {/* header/hero gradient background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#00CCAA_0%,#009C8C_40%,#202125_100%)]"></div>

      <Container>
        <div className="py-20 sm:py-28 lg:py-32 text-white">
          <p className="text-sm uppercase tracking-wider text-white/80">
            An Engineer by Mind and a Coder by Soul.
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            {/* optional: keep empty; your tagline is the headline */}
          </h1>

          <p className="mt-4 max-w-2xl text-white/85">
            3+ years of shaping ideas into design systems, building responsive websites, and teaching what I learn along the way; with a dream of becoming a Top Freelancer one day.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <Button variant="primary" onClick={() => (window.location.href = "/projects")}>
              See My Work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
