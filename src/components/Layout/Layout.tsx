import { ReactNode } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-black flex h-screen w-screen overflow-hidden relative">
      <div className="flex-1 flex flex-col">
        <header className="h-14 px-4 flex items-center justify-between sm:ml-20">
          <Header />
        </header>
        <main className="bg-black flex-1 p-4 overflow-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
