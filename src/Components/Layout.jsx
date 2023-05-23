import React from "react";
import { Outlet } from "react-router-dom";
import MyFooter from './MyFooter';
import MyNavbar from './MyNavbar';
export default function Layout() {
  return (
    <>
      <MyNavbar />
      <div className="app">
      <Outlet />
      </div>
      <MyFooter />
    </>
  );
}
