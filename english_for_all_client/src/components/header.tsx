import { UserButton, useAuth } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const Header = () => {
  // const { userId, isLoaded } = useAuth();

  return (
    <div className="bg-black text-neutral-100">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default Header;
