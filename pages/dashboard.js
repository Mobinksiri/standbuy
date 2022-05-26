import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import NavHome from "../components/statics/Navbars/NavHome";
import { Meta } from "../components/styles/Meta";

const dashboardPage = () => {
   return (
      <>
         <Meta title="Dashboard" />
         <NavHome type="user" nav={[{ title: "صفحه اصلی", id: "1" }]} />
         <Dashboard />
      </>
   );
};

export default dashboardPage;
