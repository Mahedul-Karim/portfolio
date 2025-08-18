import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import NavActions from "./NavActions";

const Header = () => {
  return (
    <header className="fixed top-4 w-full z-[4]">
      <section className="bg-glass py-2 px-4 border border-border l-container rounded-full flex items-center justify-between">
        <div>
          <span className="text-secondary text-2xl font-semibold font-fira tracking-wide">{`<MK />`}</span>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:block">
            <Nav />
          </div>
          <div>
            <MobileNav />
            <div className="hidden md:block">
              <NavActions />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
