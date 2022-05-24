import React from "react";
import NavHome from "../components/statics/Navbars/NavHome";
import SetPassword from "../components/SetPassword/SetPassword";

const SetPasswordPage = () => {
   return (
      <>
         <NavHome nav={[{ title: "صفحه اصلی", id: "1" }]} />
         <SetPassword />
      </>
   );
};

export default SetPasswordPage;
