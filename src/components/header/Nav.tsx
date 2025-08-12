"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import { NAV_LINKS } from "@/lib/data";
import React, { Fragment } from "react";
import { Button } from "../ui/button";
import { SheetClose } from "../ui/sheet";

const sectionIds = [
  "section-banner",
  "section-about",
  "section-skills",
  "section-resume",
  "section-projects",
  "section-contact",
];

const SheetCloseWrap = ({
  onClose,
  children,
}: {
  onClose: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      {onClose ? (
        <SheetClose asChild>{children}</SheetClose>
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </>
  );
};

const Nav = ({ onClose = false }: { onClose?: boolean }) => {
  const activeSection = useScrollSpy({ ids: sectionIds });

  const handleScroll = (sectionId: string) => {
    const elem = document.getElementById(sectionId);

    if (!elem) return;

    const windowOffset = window.innerHeight * 0.3;

    const y = elem.getBoundingClientRect().top + window.scrollY - windowOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav>
      <ul className="flex flex-col md:flex-row items-center gap-2">
        {NAV_LINKS?.map((nav, i) => (
          <li key={i} className="w-full md:w-auto">
            <SheetCloseWrap onClose={onClose}>
              <Button
                variant="ghost"
                className={`relative w-full md:w-auto cursor-pointer ${
                  activeSection === nav.to
                    ? "text-paper bg-primary md:bg-transparent md:hover:bg-transparent md:text-secondary hover:text-secondary"
                    : "text-white hover:text-white hover:bg-muted/10"
                }`}
                onClick={() => handleScroll(nav.to)}
              >
                {activeSection === nav.to && (
                  <div className="size-1.5 bg-primary rounded-full absolute left-0 hidden md:block" />
                )}
                {nav.label}
              </Button>
            </SheetCloseWrap>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
