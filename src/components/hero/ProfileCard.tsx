import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <Card className="bg-glass shadow-none gap-2 border-border rounded-2xl h-max max-w-[320px] mx-auto">
      <CardHeader className="items-center justify-center px-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          alt=""
          className="w-full aspect-[16/14] object-cover rounded-2xl"
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-white font-bold text-center text-2xl">John Doe</h2>
        <p className="text-sm text-gradient text-center font-medium">
          Full stack developer
        </p>
        <p className="text-white/80 font-medium text-center text-xl mt-2 underline">
          karimrupo21@gmail.com
        </p>
      </CardContent>
      <CardFooter className="justify-center gap-2">
        <Button asChild size={"icon"} className="bg-glass hover:bg-glass rounded-full overflow-clip">
          <Link href={"/"}>
            <Image src={"/github.png"} alt="" height={20} width={20} className="invert" />
          </Link>
        </Button>
        <Button asChild size={"icon"} className="bg-glass hover:bg-glass rounded-full overflow-clip">
          <Link href={"/"}>
            <Image src={"/facebook.png"} alt="" height={20} width={20} className="invert" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
