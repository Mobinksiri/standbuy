import React from "react";
import NavHome from "../components/statics/Navbars/NavHome";
import Success from "../components/Success/Success";
import { Meta } from "../components/styles/Meta";

const SuccessPage = () => {
   return (
      <>
         <Meta title="Success" />
         <NavHome type="user" nav={[{ title: "صفحه اصلی", id: "1" }]} />
         <Success />
      </>
   );
};

export default SuccessPage;
