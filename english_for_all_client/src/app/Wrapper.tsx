"use client";
import SiteBar from "@/components/sidebar";
import React, { ReactNode, FC } from "react";
import { Provider } from "jotai";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/Navbar/MobileNav";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <Provider>
      <main className="relative">
        <div className="lg:flex lg:gap-6  w-full">
          <div>
            <SiteBar />
          </div>
          <div className="flex-1 ">
            <MobileNav />
            <Navbar />
            <div className="px-5 lg:px-0">{children}</div>
          </div>
        </div>
      </main>
    </Provider>
  );
};

export default Wrapper;
