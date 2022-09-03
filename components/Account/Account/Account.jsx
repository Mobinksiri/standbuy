import React, { useState } from "react";
import Text from "../../styles/Text";
import classes from "./Account.module.scss";
import Input from "../../styles/Input/Input";
import Link from "next/link";

const Account = () => {
   const [emailValue, setEmail] = useState("isthemobin@gmail.com");
   const [nameValue, setName] = useState("مبین کثیری");

   const [values, setValues] = useState({
      email: "isthemobin@gmail.com",
      name: "مبین کثیری",
   });

   // information inputs
   const informationInput = [
      {
         name: "name",
         type: "text",
         placeholder: "نام و نام خانوادگی",
         error: "نام کاربری باید بیشتر از 8 کاراکتر باشد",
         span: true,
         required: true,
         value: values.name,
      },
      {
         name: "email",
         type: "email",
         placeholder: "آدرس ایمیل خود را وارد کنید",
         error: "آدرس ایمیل نامعتبر است",
         span: true,
         required: true,
         value: values.email,
      },
   ];

   // information inputs process
   const inputChangeHandler = (e) => {
      // value change
      setValues({ ...values, [e.target.name]: e.target.value });

      // button active
      const form = e.target.parentElement.parentElement;
      const button = form.querySelector("button");
      const formInputs = form.querySelectorAll("input");
      var nameInput;
      var emailInput;
      for (let index = 0; index < formInputs.length; index++) {
         const element = formInputs[index];
         if (element.name === "name") {
            nameInput = element.value;
         }
         if (element.name === "email") {
            emailInput = element.value;
         }
      }
      if (nameInput !== nameValue || emailInput !== emailValue) {
         button.classList.add(
            classes.account_information__box___form____button_____active
         );
      } else {
         button.classList.remove(
            classes.account_information__box___form____button_____active
         );
      }
   };

   // form submit
   const formSubmitHandler = (e) => {
      e.preventDefault();
   };

   return (
      <div className={classes.account}>
         {/* information */}
         <div className={classes.account_information}>
            <div className={classes.account_information__box}>
               <Text type="Body4" color="white" element="h6">
                  مشخصات کاربری
               </Text>
               <form
                  onSubmit={formSubmitHandler}
                  className={classes.account_information__box___form}
               >
                  {informationInput.map((input, index) => {
                     return (
                        <Input
                           onChange={inputChangeHandler}
                           key={index}
                           {...input}
                        />
                     );
                  })}
                  <button
                     className={
                        classes.account_information__box___form____button
                     }
                     type="submit"
                  >
                     <Text type="Head6" color="#5A5A5E" element="h6">
                        ذخیره
                     </Text>
                  </button>
               </form>
            </div>
         </div>

         {/* password change */}
         <div className={classes.account_password}>
            <div className={classes.account_password__box}>
               <Text type="Body4" color="white" element="h6">
                  رمز عبور
               </Text>
               <Link href="./new-password">
                  <button
                     className={classes.account_password__box___button}
                     type="submit"
                  >
                     <Text type="Body5" color="#5A5A5E" element="h6">
                        تغییر رمز عبور
                     </Text>
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Account;
