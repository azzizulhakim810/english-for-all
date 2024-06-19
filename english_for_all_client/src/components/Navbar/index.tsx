"use client";

// import core package

// import image

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowBack, IoMdNotificationsOutline } from "react-icons/io";
import { Typography } from "../ui/Typography";
// import { User, auth, currentUser } from "@clerk/nextjs/server";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
// import type { User } from "@clerk/nextjs/api";

const Navbar = () => {
  const location = usePathname();

  const { isLoaded, userId } = useAuth();
  const { isSignedIn, user } = useUser();
  const { firstName, lastName, fullName, id, imageUrl, primaryEmailAddress } =
    user || {};

  /*  console.log({
    firstName,
    lastName,
    fullName,
    id,
    imageUrl,
    primaryEmailAddress,
  }); */

  return (
    <div className="bg-white border sticky  top-0 left-0 !z-[9999] hidden lg:block">
      <div className=" py-3 flex items-center justify-between px-8  ">
        <div className="flex items-center ">
          {/* Sidebar  */}
          <Link href={"/"}>
            <div
              className={`${
                location === "/" ? "hidden" : "block"
              } pr-4 py-3 cursor-pointer`}
            >
              <IoIosArrowBack className={`text-3xl text-primary `} />
            </div>
          </Link>
          <div>
            <Typography variant="Medium_H6" className="block text-primary">
              {location === "/" && firstName
                ? `Hi ${firstName}, Good Afternoon !`
                : "English for Career Development"}
            </Typography>
            <Typography
              variant="Regular_H7"
              className="block text-brand_black !text-[13px]"
            >
              {location === "/" && firstName
                ? "Adjectives and Adverbs"
                : "Lets learn something new today"}
            </Typography>
          </div>
        </div>

        {/* Right Nav  */}

        {userId ? (
          <div className="flex gap-[200px] items-center">
            {/* <div
            className={`${
              location === "/" ? "hidden" : "block"
            } flex gap-6 items-center`}
          >
            <div className="flex gap-1">
              <Image
                src={point}
                alt="icon"
                height={30}
                width={30}
                className="object-cover"
              />
              <Typography variant="Regular_H6" className="text-brand_black">
                Points <span className="text-orange_">05/100</span>
              </Typography>
            </div>
            <Image
              src={certificate}
              alt="icon"
              height={30}
              width={30}
              className="object-cover"
            />
          </div> */}

            <div className="flex gap-6 items-center">
              <div>
                <IoMdNotificationsOutline className="text-2xl cursor-pointer" />
              </div>

              <div className="flex items-center gap-4">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>

            {/*  {userId ? (
            <div className="flex gap-4 items-center">
              <Link href="/dashboard">Dashboard</Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Link href="/sign-up">Sign up</Link>
              <Link href="/sign-in">Sign In</Link>
            </div>
          )} */}
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <Link href="/sign-up">
              <Typography
                variant="Regular_H6"
                className="bg-primary/80 hover:bg-primary duration-300 transition-all text-white px-4 py-2"
              >
                Sign up
              </Typography>
            </Link>
            <Link href="/sign-in">
              <Typography
                variant="Regular_H6"
                className="bg-primary/80 hover:bg-primary duration-300 transition-all text-white px-4 py-2"
              >
                Sign in
              </Typography>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
