import React from "react";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import NavHome from "../components/statics/Navbars/NavHome";
import { Meta } from "../components/styles/Meta";

const ForgetPasswordPage = () => {
   return (
      <>
         <Meta title="Forget Password" />
         <NavHome nav={[{ title: "صفحه اصلی", id: "1" }]} />
         <ForgetPassword />
      </>
   );
};

export default ForgetPasswordPage;
