import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({ className, variant = "primary", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition";
  const variants = {
    primary:
      "bg-gradient-to-br from-[#FFD369] to-[#FFB703] text-white shadow-[0_4px_20px_rgba(255,179,3,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_12px_rgba(0,0,0,0.2)] px-4 py-2",
    ghost:
      "border border-white/20 text-white hover:text-[#00CCAA] hover:border-[#00CCAA] px-4 py-2 bg-transparent",
  };
  return <button className={clsx(base, variants[variant], className)} {...props} />;
}
