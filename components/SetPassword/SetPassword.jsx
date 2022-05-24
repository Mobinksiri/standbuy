import React, { useState } from "react";
import classes from "./SetPassword.module.scss";
import Form from "../statics/Form/Form";
import Text from "../styles/Text";
import Input from "../styles/Input/Input";
import { useRouter } from "next/router";

const SetPassword = () => {
   const router = useRouter();

   const [values, setValues] = useState({
      password: "",
      passwordConfirm: "",
   });
   const setPasswordInputs = [
      {
         name: "password",
         type: "password",
         placeholder: "انتخاب رمز عبور",
         error: "رمز عبور باید بیش از 8 کاراکتر و دارای یک عدد باشد",
         pattern: "^(?=.*[0-9])[a-zA-Z0-9]{8,}$",
         required: true,
         span: true,
         icon: true,
         iconClick: iconClickHandler,
      },
      {
         name: "passwordConfirm",
         type: "password",
         placeholder: "تکرار رمز عبور",
         error: "رمز عبور باید با رمز عبور بالا برابر باشد",
         pattern: values.password,
         required: true,
         span: true,
         icon: true,
         iconClick: iconClickHandler,
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
         formButton.classList.add(classes.setPassword_form__buttonActive);
      } else {
         formButton.classList.remove(classes.setPassword_form__buttonActive);
      }
   };
   const onSubmitHandler = (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      console.log(Object.fromEntries(data.entries()));
      router.push("/success");
   };

   // icon click handler
   function iconClickHandler(e) {
      const svg = e.target;
      if (svg.style.opacity == "0.5") {
         svg.style.opacity = "1";
      } else {
         svg.style.opacity = "0.5";
      }
      const input = e.target.previousElementSibling;
      input.type = input.type === "password" ? "text" : "password";
   }

   return (
      <div className={classes.setPassword}>
         <Form
            onSubmit={onSubmitHandler}
            formClassName={classes.setPassword_form}
            title="تعیین رمز عبور جدید"
            inputs={setPasswordInputs.map((input) => (
               <Input
                  value={values[input.name]}
                  key={input.name}
                  {...input}
                  onChange={inputChangeHandler}
               />
            ))}
            description={
               <Text type="Medium1" color="#C0C0C0" element="p">
                  رمز عبور جدیدی برای خودتان انتخاب کنید.
               </Text>
            }
            buttonText="ذخیره"
         />
      </div>
   );
};

export default SetPassword;
