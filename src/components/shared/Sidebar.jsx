import Link from "next/link";
import { RiDashboard3Line } from "react-icons/ri";

const Sidebar = () => {
  return (
    <aside className="bg-blue-500 col-span-2 h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5">
      <nav className="flex flex-col gap-5">
        <Link href="/dashboard">
          <RiDashboard3Line className="shrink-0 text-2xl text-white lg:hidden" />
          <span className="truncate hidden lg:block cursor-pointer text-white">
            My Dashboard
          </span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
