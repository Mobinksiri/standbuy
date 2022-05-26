import React from "react";
import NavHome from "../components/statics/Navbars/NavHome";
import Container from "../components/statics/Container/Container";
import SignUp from "../components/SignUp/SignUp";
import { Meta } from "../components/styles/Meta";

const signUp = () => {
   return (
      <>
         <Meta title="Sign Up" />
         <NavHome nav={[{ title: "صفحه اصلی", id: "1" }]} />
         <SignUp />
      </>
   );
};

export default signUp;
