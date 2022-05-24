import React from "react";
import NavHome from "../components/statics/Navbars/NavHome";
import Success from "../components/Success/Success";

const SuccessPage = () => {
   return (
      <>
         <NavHome type="user" nav={[{ title: "صفحه اصلی", id: "1" }]} />
         <Success />
      </>
   );
};

export default SuccessPage;
