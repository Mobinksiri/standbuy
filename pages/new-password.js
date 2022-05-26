import React from "react";
import NavHome from "../components/statics/Navbars/NavHome";
import NewPassword from "../components/NewPassword/NewPassword";

const NewPasswordPage = () => {
   return (
      <>
         <NavHome nav={[{ title: "صفحه اصلی", id: "1" }]} />
         <NewPassword />
      </>
   );
};

export default NewPasswordPage;
