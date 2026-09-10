import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
const ProfileCard = () => {
  return (
    <Card className="bg-transparent shadow-none gap-2 border-border rounded-full h-max max-w-[320px] mx-auto">
      <CardHeader className="items-center justify-center px-8">
        <img
          src="/formal_image.png"
          alt=""
          className="w-full aspect-square object-contain rounded-full bg-white"
        />
      </CardHeader>
    </Card>
  );
};

/**
 * <Button asChild size={"icon"} className="bg-glass hover:bg-glass rounded-full overflow-clip">
          <Link href={"/"}>
            <Image src={"/github.png"} alt="" height={20} width={20} className="invert" />
          </Link>
        </Button>
        <Button asChild size={"icon"} className="bg-glass hover:bg-glass rounded-full overflow-clip">
          <Link href={"/"}>
            <Image src={"/facebook.png"} alt="" height={20} width={20} className="invert" />
          </Link>
        </Button>
 */

export default ProfileCard;
