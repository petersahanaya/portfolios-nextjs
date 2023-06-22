"use client";

import ListTileAction from "@component/listTileAction";
import Tab from "@component/options";
import SideBar from "../sidebar";
import EyeIcon from "@icon/eye";
import BurgerIcon from "@icon/burger";
import { useSidebar } from "@store/sidebarStore";

const Header = () => {
  const onPressedOpenSidebar = useSidebar(
    (state) => state.onPressedToggleSidebar
  );

  return (
    <>
      <SideBar />
      <header className="w-screen overflow-hidden md:hidden flex justify-between items-center p-4 px-8 fixed top-0 left-0 bg-stone-900 z-40">
        <EyeIcon width={40} height={40} color="#ffffff" />
        <div onClick={() => onPressedOpenSidebar()}>
          <BurgerIcon width={35} height={35} />
        </div>
      </header>
      <header className="w-screen overflow-hidden hidden md:inline-block p-4 px-8 fixed top-0 left-0 bg-stone-900 z-40">
        <ListTileAction>
          <Tab />
        </ListTileAction>
      </header>
    </>
  );
};

export default Header;
