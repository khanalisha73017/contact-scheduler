import React from "react";
import { Management } from "../component/Management ";
import { Appoinment } from "../component/Appoinment";
import { Route, Routes } from "react-router-dom";

export const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Management />} />
        <Route path={"/appointment"} element={<Appoinment />} />
      </Routes>
    </>
  );
};
