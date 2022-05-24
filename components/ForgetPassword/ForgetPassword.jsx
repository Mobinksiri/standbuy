import React, { useState } from "react";
import classes from "./ForgetPassword.module.scss";
import Form from "../statics/Form/Form";
import Text from "../styles/Text";
import Input from "../styles/Input/Input";
import { useRouter } from "next/router";

const ForgetPassword = () => {
   const router = useRouter();

   const [values, setValues] = useState({
      email: "",
   });
   const forgetPasswordInputs = [
      {
         name: "email",
         type: "email",
         placeholder: "آدرس ایمیل خود را وارد کنید",
         error: "آدرس ایمیل نامعتبر است",
         required: true,
         span: true,
      },
   ];

   // input process
   const inputChangeHandler = (e) => {
      // set value
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });

      // active submit button
      const form = e.target.parentElement.parentElement;
      const inputs = form.querySelectorAll("input");
      const inputArray = [];
      for (let index = 0; index < inputs.length; index++) {
         const element = inputs[index];
         if (element.required) {
            inputArray.push(element);
         }
      }
      const confirmInput = inputArray.findIndex((input) => input.value === "");
      const formButton = form.querySelector("button");
      if (confirmInput === -1) {
         formButton.classList.add(classes.forgetPassword_form__buttonActive);
      } else {
         formButton.classList.remove(classes.forgetPassword_form__buttonActive);
      }
   };
   const onSubmitHandler = (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      console.log(Object.fromEntries(data.entries()));
      router.push("/set-password");
   };

   return (
      <>
         <div className={classes.forgetPassword}>
            <Form
               onSubmit={onSubmitHandler}
               formClassName={classes.forgetPassword_form}
               title="بازیابی رمز عبور"
               inputs={forgetPasswordInputs.map((input) => (
                  <Input
                     value={values[input.name]}
                     key={input.name}
                     {...input}
                     onChange={inputChangeHandler}
                  />
               ))}
               description={
                  <Text type="Medium1" color="#C0C0C0" element="p">
                     آدرس ایمیل خود را وارد کنید تا لینک تغییر رمز عبور را برای
                     شما ارسال کنیم.
                  </Text>
               }
               buttonText="بازیابی"
               tag={
                  <>
                     <Text type="Paragraph2" color="#787878" element="a">
                        بیخیال!
                     </Text>
                     <Text
                        onClick={() => {
                           router.push("/login");
                        }}
                        type="HeadLink"
                        color="white"
                        element="h6"
                     >
                        ورود به پنل کاربری
                     </Text>
                  </>
               }
            />
         </div>
      </>
   );
};

export default ForgetPassword;
