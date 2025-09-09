import type { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">{children}</div>;
}
