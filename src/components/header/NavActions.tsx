"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Lock } from "lucide-react";
import SheetCloseWrap from "../common/SheetCloseWrap";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

const NavActions = ({ onClose = false }: { onClose?: boolean }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SheetCloseWrap onClose={onClose}>
        <Button
          size={"lg"}
          className="rounded-full glare-hover relative hover:bg-primary overflow-clip z-[1] cursor-pointer active:scale-[0.9]"
          onClick={() => setOpen(true)}
        >
          <Lock />
          Login
        </Button>
      </SheetCloseWrap>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NavActions;
