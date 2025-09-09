import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";

export default function NotFoundPage() {
  return (
    <Container>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg text-white/80 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-md bg-gradient-to-br from-[#FFD369] to-[#FFB703] text-white font-semibold shadow-[0_4px_20px_rgba(255,179,3,0.4)] hover:-translate-y-0.5 transition"
        >
          Back to Home
        </Link>
      </div>
    </Container>
  );
}
