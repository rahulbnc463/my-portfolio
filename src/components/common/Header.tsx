import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/Rahuldeb_logo.svg";
import Container from "@/components/ui/Container";

const nav = [
  { to: "/", label: "Home" },
  { to: "/meet-rahul", label: "Meet Rahul" },
  { to: "/what-i-do", label: "What I Do" },
  { to: "/projects", label: "Projects" },
  { to: "/lets-talk", label: "Let’s Talk" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // shrink header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-[#00b69d]/70 bg-[#202125]/90 transition-[height,padding] duration-200`}
    >
      <Container>
        <div
          className={`flex items-center justify-between transition-[height] duration-200 ${
            scrolled ? "h-14" : "h-20"
          }`}
        >
        {/* Logo */}
<Link to="/" className="flex items-center gap-2" aria-label="Rahul Deb — Home">
  <img
    src={logo}
    alt="Rahul Deb"
    className={[
      "transition-all duration-200 will-change-transform w-auto",
      // bigger on desktop, still shrinks on scroll
      scrolled ? "h-8 md:h-10" : "h-10 md:h-12",
    ].join(" ")}
  />
</Link>


          {/* Desktop Nav */}
<nav className="hidden md:flex items-center gap-8">
  {nav.map((n) => (
    <div key={n.to} className="flex items-center">
     <NavLink
  key={n.to}
  to={n.to}
  className={({ isActive }) =>
    [
      "group relative cursor-pointer text-white/80 hover:text-white transition",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB703]/50 rounded px-1 py-1",
      isActive ? "text-white font-medium" : "",
    ].join(" ")
  }
  children={({ isActive }) => (
    <span className="relative inline-block">
      {/* label */}
      <span>{n.label}</span>

      {/* hover underline (gold) */}
      <span
        className={[
          "pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0",
          "bg-gradient-to-r from-[#FFD369] to-[#FFB703]",
          "transition-transform duration-200 group-hover:scale-x-100",
        ].join(" ")}
      />

      {/* active underline (smooth in/out) */}
      <span
        data-active={isActive}
        className={[
          "pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full",
          "bg-gradient-to-r from-[#FFD369] via-[#FFB703] to-[#FFD369]",
          "transition-all duration-500 ease-out",
          "opacity-0 scale-x-0",
          "data-[active=true]:opacity-100 data-[active=true]:scale-x-100",
          "glow-gold animate-gradient-move",
        ].join(" ")}
      />
    </span>
  )}
/>



      {/* Desktop-only divider after 'Projects' */}
      {n.label === "Projects" && (
        <span className="hidden md:block mx-2 pl-2 text-white/25 select-none">|</span>
      )}
    </div>
  ))}
</nav>


          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00CCAA]/50 rounded p-1"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? (
              /* Close */
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger */
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden mt-2 flex flex-col gap-1 pb-4">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  [
                    "block rounded px-3 py-2 cursor-pointer transition",
                    "text-white/85 hover:text-white hover:bg-white/10",
                    isActive ? "bg-white/10 text-white font-medium" : "",
                  ].join(" ")
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}
