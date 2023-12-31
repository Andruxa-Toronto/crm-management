import { Button } from "@/components/ui/button";
import mongodb from "@/lib/mongodb";

import Logo from "./logo";

const Footer = async () => {

  const userName = await mongodb() || "Name";

  return (
  <div className="flex items-center w-full p-6 bg-background dark:bg-[#1f1f1f]">
    <Logo />
    <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
            Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
            Terms and Conditions
        </Button>
        <div>
        {userName}
        </div>
        
    </div>
  </div>
  );
};

export default Footer;