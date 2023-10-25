import React, { useState } from "react";
import { Routes, Route, Navigate, Link, Outlet } from "react-router-dom";
import { Login } from "./Login";
import { Navigation } from "./Navigation";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Login />
      <Outlet />
    </>
  );
};
