import React from "react";
import classes from "./Account.module.scss";
import Account from "./Account/Account";
import SideBar from "../statics/SideBar/SideBar";

const AccountPage = () => {
   return (
      <div className={classes.account}>
         <SideBar type="account" />
         <Account />
      </div>
   );
};

export default AccountPage;
