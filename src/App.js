import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { NavBar } from "./components/NavBar";
import { DotGroup } from "./components/DotGroup";
import { Landing } from "./components/Landing";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isDesktop = useMediaQuery("(min-width:1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-deep-blue">
      <NavBar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
        )}
      </div>
      <Landing setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
