import React from "react";
import SideBarNav from "./sidebar/SideBarNav";
import SideBarList from "./sidebar/SideBarList";

const SideBar = () => {
  return (
    <div className="grid h-full grid-cols-[56px_1fr] gap-[2px]">
      <SideBarNav />
      <SideBarList />
    </div>
  );
};

export default SideBar;
