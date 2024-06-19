import { Typography } from "@/components/ui/Typography";
import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-10">
      <Typography variant="Regular_H3" className="">
        Welcome to Our English Arena
      </Typography>
      <SignUp />
    </div>
  );
};

export default Page;
