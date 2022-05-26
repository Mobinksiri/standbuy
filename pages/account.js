import React from "react";
import NavHome from "../components/statics/Navbars/NavHome";
import AccountPage from "../components/Account/Account";
import { Meta } from "../components/styles/Meta";

const account = () => {
   return (
      <>
         <Meta title="Account" />
         <NavHome type="user" nav={[{ title: "صفحه اصلی", id: "1" }]} />
         <AccountPage />
      </>
   );
};

export default account;
