import React from "react";
import logo from "@/assets/Rahuldeb_logo.svg";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#202125] text-[rgba(255,255,255,0.85)] px-[8vw] pt-14 pb-5 font-sans">
      {/* -------- TOP: signature + get-in-touch + social -------- */}
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.2fr_0.9fr] gap-7 md:gap-12 items-start">
        {/* signature / logo */}
        <a href="/" className="inline-block mt-2 leading-none">
          <img
            src={logo}
            alt="Rahul_Deb_logo"
            className="h-[58px] w-auto object-contain opacity-90 block"
          />
        </a>

        {/* get in touch */}
        <div>
          <h3 className="text-[#FFD369] text-[18px] uppercase tracking-[0.5px] mb-2">
            Get in touch
          </h3>
          <p className="text-[rgba(255,255,255,0.65)] leading-[1.7] max-w-[60ch]">
            I’m available to design, develop, write, and train. From websites to
            corporate workshops, I bring creativity, code, and clarity together.
          </p>
        </div>

        {/* connect */}
        <div>
          <h3 className="text-[#FFD369] text-[18px] uppercase tracking-[0.5px] mb-2">
            Connect
          </h3>
          <div className="flex gap-[14px] mt-1.5">
            {/* LinkedIn */}
            <a
              aria-label="LinkedIn"
              href="#"
              target="_blank"
              rel="noopener"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#2A2D2F] text-[rgba(255,255,255,0.85)] transition-all duration-200 hover:text-[#00CCAA] hover:shadow-[0_0_0_3px_rgba(0,204,170,0.25)] hover:-translate-y-[2px] active:translate-y-0 active:bg-[#243334]"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 stroke-current fill-none stroke-[1.8]"
              >
                <rect x="3" y="9" width="4" height="12"></rect>
                <circle cx="5" cy="5" r="2"></circle>
                <path d="M10 9h4v2c.6-1 1.8-2.3 4.1-2.3 3 0 4.9 1.9 4.9 5.7V21h-4v-5c0-2-0.7-3-2.3-3-1.8 0-2.7 1.2-2.7 3V21h-4V9z"></path>
              </svg>
            </a>
            {/* GitHub */}
            <a
              aria-label="GitHub"
              href="#"
              target="_blank"
              rel="noopener"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#2A2D2F] text-[rgba(255,255,255,0.85)] transition-all duration-200 hover:text-[#00CCAA] hover:shadow-[0_0_0_3px_rgba(0,204,170,0.25)] hover:-translate-y-[2px] active:translate-y-0 active:bg-[#243334]"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 stroke-current fill-none stroke-[1.8]"
              >
                <path d="M12 .8a11.2 11.2 0 0 0-3.5 21.8c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.3-1.4-1.7-1.4-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.8-.8 1.6-1.1-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.5 1.2-3.4-.1-.3-.6-1.7.1-3.5 0 0 1-.3 3.5 1.3a12.2 12.2 0 0 1 6.4 0c2.5-1.6 3.5-1.3 3.5-1.3.7 1.8.2 3.2.1 3.5.8.9 1.2 2 1.2 3.4 0 4.6-2.7 5.6-5.2 5.9.8.7 1.6 2 1.6 4v3c0 .3.2.7.8.6A11.2 11.2 0 0 0 12 .8z" />
              </svg>
            </a>
            {/* X.com */}
            <a
              aria-label="X"
              href="#"
              target="_blank"
              rel="noopener"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#2A2D2F] text-[rgba(255,255,255,0.85)] transition-all duration-200 hover:text-[#00CCAA] hover:shadow-[0_0_0_3px_rgba(0,204,170,0.25)] hover:-translate-y-[2px] active:translate-y-0 active:bg-[#243334]"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 stroke-current fill-none stroke-[1.8]"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.889-5.97 6.889H1.678l7.73-8.918L1.254 2.25h6.946l4.713 6.231 5.331-6.231zM16.48 19.666h1.833L7.64 4.876H5.675l10.805 14.79z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              aria-label="Facebook"
              href="#"
              target="_blank"
              rel="noopener"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#2A2D2F] text-[rgba(255,255,255,0.85)] transition-all duration-200 hover:text-[#00CCAA] hover:shadow-[0_0_0_3px_rgba(0,204,170,0.25)] hover:-translate-y-[2px] active:translate-y-0 active:bg-[#243334]"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 stroke-current fill-none stroke-[1.8]"
              >
                <path d="M15.5 3H13c-2 0-3.3 1.4-3.3 3.5V9H7v3h2.7v8H13v-8h2.8l.5-3H13V6.8c0-.8.2-1.3 1.3-1.3h1.2V3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* -------- info strip -------- */}
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.2fr_0.9fr] gap-5 md:gap-12 mt-10 items-start">
        <div>
          <div className="text-[#FFD369] uppercase font-bold text-[14px] tracking-[0.7px] mb-2">
            Contact
          </div>
          <a
            href="mailto:hello@rahuldeb.in"
            className="text-[16px] no-underline text-[rgba(255,255,255,0.85)] hover:text-[#00CCAA] hover:underline"
          >
            hello@rahuldeb.in
          </a>
        </div>
        <div>
          <div className="text-[#FFD369] uppercase font-bold text-[14px] tracking-[0.7px] mb-2">
            Call / WhatsApp
          </div>
          <a
            href="tel:+917628952301"
            className="text-[16px] no-underline text-[rgba(255,255,255,0.85)] hover:text-[#00CCAA] hover:underline"
          >
            +91 76289 52301
          </a>
        </div>
        <div>
          <div className="text-[#FFD369] uppercase font-bold text-[14px] tracking-[0.7px] mb-2">
            Biryani / Coffee
          </div>
          <p className="text-[16px] m-0">Tripura – Bengaluru</p>
        </div>
      </div>

      {/* -------- bottom strip -------- */}
      <div className="border-t border-[rgba(255,255,255,0.08)] mt-7 pt-4 flex justify-between items-center flex-wrap text-[14px] text-[rgba(255,255,255,0.65)] gap-3">
        <p>© {year}, Rahul Deb. All rights reserved.</p>
        <img
          src={logo}
          alt="Rahul_Deb_logo"
          className="h-[35px] opacity-90"
        />
        <p className="made-by">
          Made with <span className="text-[#FFB703]">❤️</span> in Tripura by
          Rahul
        </p>
      </div>
    </footer>
  );
};

export default Footer;
