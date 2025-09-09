import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-[#202125] font-ubuntu">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
