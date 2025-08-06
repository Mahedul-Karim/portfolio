import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { Lock } from "lucide-react";
import Nav from "./Nav";

const MobileNav = () => {
  return (
    <div className="flex items-center justify-center md:hidden">
      <Sheet>
        <SheetTrigger>
          <div className="w-8 bg-secondary rounded-md before:rounded-md after:rounded-md h-[1.5px] cursor-pointer navMenu relative before:absolute before:bg-secondary before:w-[20px] before:-top-[10px] before:left-0 before:h-[1.5px] after:absolute after:bg-secondary after:w-[20px] after:h-[1.5px] after:top-[10px] after:right-0 before:transition-all before:duration-300 after:transition-all after:duration-300 block md:hidden" />
        </SheetTrigger>
        <SheetContent side="left" className="border-border overflow-auto">
          <SheetHeader>
            <SheetTitle>
              <div className="flex items-center justify-center border-b border-border pb-2">
                <span className="text-secondary text-2xl font-semibold font-fira tracking-wide">{`<MK />`}</span>
              </div>
            </SheetTitle>
            <SheetDescription className="sr-only">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <div className="px-4">
            <Nav onClose />
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button
                size={"lg"}
                className="rounded-full glare-hover relative hover:bg-primary overflow-clip z-[1] cursor-pointer active:scale-[0.9]"
                asChild
              >
                <Link href={"/admin-login"}>
                  <Lock />
                  Login
                </Link>
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
