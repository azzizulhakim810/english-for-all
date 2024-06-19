"use client";
// import core package
import IcoDashboard from "@/assets/svg/IcoDashboard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Typography } from "../ui/Typography";

import logo from "@/assets/logo.svg";
import logo2 from "@/assets/Logo2.svg";

import IcoExit from "@/assets/svg/IcoExit";
import IcoSetting from "@/assets/svg/IcoSetting";
import IcoVideo from "@/assets/svg/IcoVide";
import Image from "next/image";

// ** import jotai **
import { siteBarAtom, siteBarExpandAtom } from "@/app/jotaiStore";
import { useAtom } from "jotai";
import { IoIosArrowBack } from "react-icons/io";

const SiteBar = () => {
  const location = usePathname();
  const [sidebar, setSidebar] = useAtom(siteBarAtom);
  const [expand, setExpand] = useAtom(siteBarExpandAtom);

  return (
    <div
      className={` bg-primary fixed top-12 lg:top-0 ${
        expand ? "left-0" : "-left-[300px]"
      } lg:left-0  z-[99999] duration-300 transition-all lg:sticky lg:block w-full!`}
    >
      <div className="relative pt-10 h-dvh">
        {!sidebar ? (
          <div className="pl-7">
            <div onClick={() => setExpand(false)} className="hidden lg:block">
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo"
                  height={63}
                  width={155}
                  className="object-cover ml-2  h-[63px] w-[155px]"
                />
              </Link>
            </div>
            <div>
              <ul className="lg:mt-[44px] space-y-4 lg:space-y-6 ">
                <li onClick={() => setExpand(false)}>
                  <Link href="/">
                    <div
                      className={`${
                        location === "/"
                          ? "bg-gray-100 text-primary"
                          : "text-white bg-transparent"
                      }  w-full py-3  font-medium flex items-center px-6 lg:px-10 gap-5`}
                    >
                      <IcoDashboard />

                      <Typography
                        variant="Medium_H7"
                        className="text-base md:!text-lg"
                      >
                        Dashboard
                      </Typography>
                    </div>
                  </Link>
                </li>
                <li onClick={() => setExpand(false)}>
                  <Link href="/course">
                    <div
                      className={`${
                        location === "/course"
                          ? "bg-gray-100 text-primary"
                          : "text-white bg-transparent"
                      }  w-full py-3  font-medium flex items-center px-6 lg:px-10   gap-5`}
                    >
                      <IcoVideo />

                      <Typography
                        variant="Medium_H7"
                        className="text-base md:!text-lg"
                      >
                        All Course
                      </Typography>
                    </div>
                  </Link>
                </li>
                <li onClick={() => setExpand(false)}>
                  <Link href="/setting">
                    <div
                      className={`${
                        location === "/setting"
                          ? "bg-gray-100 text-primary"
                          : "text-white bg-transparent"
                      }  w-full py-3  font-medium flex items-center px-6 lg:px-10  gap-5`}
                    >
                      <IcoSetting />

                      <Typography
                        variant="Medium_H7"
                        className="text-base md:!text-lg"
                      >
                        Setting
                      </Typography>
                    </div>
                  </Link>
                </li>
                <li onClick={() => setExpand(false)}>
                  <div
                    className={` bg-primary text-white w-full py-3  font-medium flex items-center px-6 lg:px-10  gap-5`}
                  >
                    <IcoExit />

                    <Typography
                      variant="Medium_H7"
                      className="text-base md:!text-lg"
                    >
                      Exit
                    </Typography>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="px-7 hidden lg:block ">
            <Link href="/">
              <Image
                src={logo2}
                alt="logo"
                height={46}
                width={57}
                className="object-cover ml-2 h-[46px] w-[57px]"
              />
            </Link>
            <div>
              <ul className="mt-[52px] space-y-6 flex flex-col items-center justify-center ">
                <li>
                  <Link href="/">
                    <div
                      className={`${
                        location === "/"
                          ? "bg-gray-100 text-primary"
                          : "text-white bg-transparent"
                      }  w-full p-4   font-medium flex items-center  gap-5`}
                    >
                      <IcoDashboard />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/course">
                    <div
                      className={`${
                        location === "/course"
                          ? "bg-gray-100 text-primary"
                          : "text-white bg-transparent"
                      }  w-full p-4 h-16  font-medium flex items-center  gap-5`}
                    >
                      <IcoVideo />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/setting">
                    <div
                      className={`${
                        location === "/setting"
                          ? "bg-gray-100 text-primary"
                          : "text-white bg-transparent"
                      }  w-full p-4 h-16  font-medium flex items-center   gap-5`}
                    >
                      <IcoSetting />
                    </div>
                  </Link>
                </li>
                <li>
                  <div
                    className={` bg-primary text-white w-full p-4 h-16  font-medium flex items-center   gap-5`}
                  >
                    <IcoExit />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

        <div
          onClick={() => setSidebar(!sidebar)}
          className="absolute top-6 -right-4  cursor-pointer h-10 w-10 bg-primary lg:flex items-center justify-center rounded-r-full hidden  "
        >
          <IoIosArrowBack
            className={`${
              sidebar ? "-rotate-180" : "rotate-0"
            } text-2xl text-white duration-300 `}
          />
        </div>
      </div>
    </div>
  );
};

export default SiteBar;
