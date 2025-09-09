import Container from "../../components/ui/Container";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/Rahuldeb_logo.svg"

const nav = [
  { to: "/", label: "Home" },
  { to: "/meet-rahul", label: "Meet Rahul" },
  { to: "/what-i-do", label: "What I Do" },
  { to: "/projects", label: "Projects" },
  { to: "/lets-talk", label: "Let’s Talk" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#202125]/70 bg-[#202125]/90 border-b border-white/10">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="sr-only">Rahul Deb</span>
            {/* put your signature SVG here */}
            <div className="h-7 w-auto">
              <img className="h-7" src={logo} alt="Rahul Deb" />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-white/80 hover:text-white transition ${
                    isActive ? "text-white" : ""
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/projects" className="md:hidden text-white/80 hover:text-white">
            Menu
          </Link>
        </div>
      </Container>
    </header>
  );
}
