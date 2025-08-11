import React from "react";
// import { Button } from "../ui/button";
// import { Lock } from "lucide-react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
// import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-4 w-full z-[4]">
      <section className="bg-glass py-2 px-4 border border-border l-container rounded-full flex items-center justify-between">
        <div>
          <span className="text-secondary text-2xl font-semibold font-fira tracking-wide">{`<MK />`}</span>
        </div>
        <div>
          <div className="hidden md:block">
            <Nav />
          </div>
          <div>
            <MobileNav />
            {/* <div className="hidden md:block">
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
            </div> */}
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
