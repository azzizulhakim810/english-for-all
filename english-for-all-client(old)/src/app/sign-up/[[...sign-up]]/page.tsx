import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-10">
      <h1 className="text-3xl">This is sign-up page</h1>
      <SignUp />
    </div>
  );
};

export default Page;
