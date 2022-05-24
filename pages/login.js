import React from "react";
import Login from "../components/Login/Login";
import NavHome from "../components/statics/Navbars/NavHome";

const login = () => {
   return (
      <>
         <NavHome nav={[{ title: "صفحه اصلی", id: "1" }]} />
         <Login />
      </>
   );
};

export default login;
