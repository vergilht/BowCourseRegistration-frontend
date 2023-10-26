import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Login } from "./Login";
import { HomeNavigation } from "./Navigation";

export const Home = () => {
  return (
    <>
      <HomeNavigation />
      <Login />
      <Outlet />
    </>
  );
};
