import TopNavbar from "../topNavbar/TopNavbar";
import React from 'react'

import SideBar from "../sidebar/SideBar";

function Layout({ children }) {
  return (
    <div>
      {/* Mobile Navbar hidden on desktop  */}
      <div className=" lg:hidden">
        <TopNavbar />
      </div>

      <div className="max-h-screen flex ">
        {/* Sidebar hidden on mobile  */}
        <nav className=" w-72 flex-none ... hidden md:block">
          <SideBar />
        </nav>

        {/* main content  */}
        <main className="flex-1 min-w-0 overflow-auto ...">
          <div className=" flex  justify-center">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
