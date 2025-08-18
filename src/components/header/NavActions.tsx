"use client";

import React from "react";
import { Button } from "../ui/button";
import { Lock } from "lucide-react";
import SheetCloseWrap from "../common/SheetCloseWrap";

const NavActions = ({ onClose = false }: { onClose?: boolean }) => {
  return (
    <SheetCloseWrap onClose={onClose}>
      <Button
        size={"lg"}
        className="rounded-full glare-hover relative hover:bg-primary overflow-clip z-[1] cursor-pointer active:scale-[0.9]"
      >
        <Lock />
        Login
      </Button>
    </SheetCloseWrap>
  );
};

export default NavActions;
