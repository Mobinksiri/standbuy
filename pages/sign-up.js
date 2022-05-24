import React from "react";
import NavHome from "../components/statics/Navbars/NavHome";
import Container from "../components/statics/Container/Container";
import SignUp from "../components/SignUp/SignUp";

const signUp = () => {
   const signUpInputs = [
      {
         name: "name",
         type: "text",
         placeholder: "نام و نام خانوادگی",
         error: "اختیاری",
         required: false,
         span: true,
      },
      {
         name: "mobile",
         type: "text",
         placeholder: "شماره موبایل",
         error: "اختیاری",
         required: false,
         span: true,
      },
      {
         name: "email",
         type: "email",
         placeholder: "آدرس ایمیل خود را وارد کنید",
         error: "آدرس ایمیل نامعتبر است",
         required: true,
         span: true,
      },
      {
         name: "password",
         type: "password",
         placeholder: "انتخاب رمز عبور",
         error: "رمز عبور باید بیش از 8 کاراکتر باشد",
         required: true,
         span: true,
      },
      {
         name: "passwordConfirm",
         type: "password",
         placeholder: "تکرار رمز عبور",
         error: "رمز عبور باید با رمز عبور بالا برابر باشد",
         required: true,
         span: true,
      },
   ];

   return (
      <>
         <NavHome nav={[{ title: "صفحه اصلی", id: "1" }]} />
         <SignUp />
      </>
   );
};

export default signUp;
