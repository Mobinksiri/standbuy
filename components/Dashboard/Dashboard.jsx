import React, { useState } from "react";
import classes from "./Dashboard.module.scss";
import SideBar from "../statics/SideBar/SideBar";
import Subscription from "./Subscription/Subscription";

const Dashboard = () => {
   return (
      <div className={classes.dashboard}>
         <SideBar type="dashboard" />
         <Subscription />
      </div>
   );
};

export default Dashboard;
