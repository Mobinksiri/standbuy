import React from "react";
import Login from "../components/Login/Login";
import NavHome from "../components/statics/Navbars/NavHome";
import { Meta } from "../components/styles/Meta";

const login = () => {
   return (
      <>
         <Meta title="Login" />
         <NavHome nav={[{ title: "صفحه اصلی", id: "1" }]} />
         <Login />
      </>
   );
};

export default login;
