import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/NavBar";

const NextLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <div className="min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="px-6 mx-auto">{children}</main>
        <footer>
          <p className="px-6 my-4">Footer</p>
        </footer>
      </div>
    </NextUIProvider>
  );
};

export default NextLayout;
