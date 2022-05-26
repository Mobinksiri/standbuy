import React from "react";
import NavHome from "../components/statics/Navbars/NavHome";
import NewPassword from "../components/NewPassword/NewPassword";
import { Meta } from "../components/styles/Meta";

const NewPasswordPage = () => {
   return (
      <>
         <Meta title="New Password" />
         <NavHome nav={[{ title: "صفحه اصلی", id: "1" }]} />
         <NewPassword />
      </>
   );
};

export default NewPasswordPage;
