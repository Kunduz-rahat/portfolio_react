import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
const Link =({page, selectedPage, setSelectedPage})=>{
return (
    <AnchorLink className={`${selectedPage === lowerCasePage}`}></AnchorLink>
)
}

export const NavBar = ({ setSelectedPage, selectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  return (
    <nav className="z-40 w-full top-0 fixed py-6">
      <div className=" flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">
          {isAboveSmallScreens ? <div className="flex justify-between gap-16 font-opensans text-sm  font-semibold"></div> : <div></div>}
        </h4>
      </div>
    </nav>
  );
};
