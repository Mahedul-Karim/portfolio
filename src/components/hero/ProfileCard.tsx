import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
const ProfileCard = () => {
  return (
    <Card className="bg-transparent shadow-none gap-2 border-border rounded-full h-max max-w-[320px] mx-auto">
      <CardHeader className="items-center justify-center px-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          alt=""
          className="w-full aspect-square object-cover rounded-full"
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
