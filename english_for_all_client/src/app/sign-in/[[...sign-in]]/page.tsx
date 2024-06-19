import { Typography } from "@/components/ui/Typography";
import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-10">
      <Typography variant="Regular_H3" className="">
        Enter into Your Existing Account
      </Typography>
      <SignIn />
    </div>
  );
};

export default Page;
