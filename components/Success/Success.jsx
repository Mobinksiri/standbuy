import React, { useState } from "react";
import classes from "./Success.module.scss";
import Form from "../statics/Form/Form";
import Text from "../styles/Text";
import { useRouter } from "next/router";

const Success = () => {
   const router = useRouter();

   const onSubmitHandler = (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      console.log(Object.fromEntries(data.entries()));
      router.push("/dashboard");
   };

   return (
      <div className={classes.success}>
         <Form
            onSubmit={onSubmitHandler}
            formClassName={classes.success_form}
            title="تعیین رمز عبور جدید"
            inputs={
               <div className={classes.success_form__alert}>
                  <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M6.25 13L9.75 16.5L17.75 7.5"
                        stroke="#17A64A"
                        strokeWidth="1.4"
                     />
                  </svg>
                  <Text type="Body4" color="#17A64A" element="h6">
                     رمز عبور شما با موفقیت تغییر کرد.
                  </Text>
               </div>
            }
            description={
               <Text type="Medium1" color="#C0C0C0" element="p">
                  رمز عبور جدیدی برای خودتان انتخاب کنید.
               </Text>
            }
            buttonText="پنل کاربری"
         />
      </div>
   );
};

export default Success;
