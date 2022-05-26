import React from "react";
import NavHome from "../components/statics/Navbars/NavHome";
import AccountPage from "../components/Account/Account";

const account = () => {
   return (
      <>
         <NavHome type="user" nav={[{ title: "صفحه اصلی", id: "1" }]} />
         <AccountPage />
      </>
   );
};

export default account;
