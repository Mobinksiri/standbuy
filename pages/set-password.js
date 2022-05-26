import React from "react";
import NavHome from "../components/statics/Navbars/NavHome";
import SetPassword from "../components/SetPassword/SetPassword";
import { Meta } from "../components/styles/Meta";

const SetPasswordPage = () => {
   return (
      <>
         <Meta title="Set Password" />
         <NavHome nav={[{ title: "صفحه اصلی", id: "1" }]} />
         <SetPassword />
      </>
   );
};

export default SetPasswordPage;
