import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFoundPage() {
  return (
    <section className="relative h-[70vh] flex items-center bg-[linear-gradient(135deg,#00CCAA_0%,#009C8C_40%,#202125_100%)] justify-center text-center text-white">
      <Container>
        <h1 className="text-7xl font-extrabold mb-4">404</h1>
        <p className="text-xl text-white/85 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Button variant="primary" onClick={() => (window.location.href = "/")}>
                      See My Work
                    </Button>
      </Container>
    </section>
  );
}
