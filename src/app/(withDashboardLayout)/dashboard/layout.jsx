import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <div className="col-span-10 h-full px-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;
