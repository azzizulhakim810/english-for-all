"use client";
import { siteBarAtom, siteBarExpandAtom } from "@/app/jotaiStore";
import { useAtom, useSetAtom } from "jotai";
import Image from "next/image";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import logo from "@/assets/logo.svg";

const MobileNav = () => {
  const [expand, setExpand] = useAtom(siteBarExpandAtom);
  const setSidebarAtom = useSetAtom(siteBarAtom);

  return (
    <div className="block lg:hidden sticky px-6 top-0 left-0 !z-[999] py-3 bg-primary">
      <div className="flex justify-between items-center gap-6">
        <div>
          <Image src={logo} alt="logo" className="h-8 w-auto" />
        </div>
        <div
          onClick={() => {
            setExpand(!expand);
            setSidebarAtom(false);
          }}
        >
          {!expand ? (
            <IoMenu className="text-2xl text-white" />
          ) : (
            <RxCross2 className="text-2xl text-white" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
