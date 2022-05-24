import React from "react";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import NavHome from "../components/statics/Navbars/NavHome";

const ForgetPasswordPage = () => {
   return (
      <>
         <NavHome nav={[{ title: "صفحه اصلی", id: "1" }]} />
         <ForgetPassword />
      </>
   );
};

export default ForgetPasswordPage;
