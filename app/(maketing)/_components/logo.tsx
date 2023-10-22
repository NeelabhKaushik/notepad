import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});
export const logo = () => {
  return (
    <div className="hidden md:flex items=center gap-2">
      <Image src="/logo.svg" height={40} width={40} alt="logo" />
      <p className={cn("font-semibold", font.className)}>NotePad</p>
    </div>
  );
};

export default logo;
