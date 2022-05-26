import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import NavHome from "../components/statics/Navbars/NavHome";

const dashboardPage = () => {
   return (
      <>
         <NavHome type="user" nav={[{ title: "صفحه اصلی", id: "1" }]} />
         <Dashboard />
      </>
   );
};

export default dashboardPage;
