import React, { useEffect, useState } from "react";
import classes from "./Login.module.scss";
import Form from "../statics/Form/Form";
import Text from "../styles/Text";
import Input from "../styles/Input/Input";
import { useRouter } from "next/router";

const Login = () => {
   const router = useRouter();
   const [values, setValues] = useState({
      email: "",
      password: "",
   });
   const loginInputs = [
      {
         name: "email",
         type: "email",
         placeholder: "آدرس ایمیل خود را وارد کنید",
         error: "آدرس ایمیل نامعتبر است",
         pattern: "admin@hi",
         required: true,
         span: true,
      },
      {
         name: "password",
         type: "password",
         placeholder: "انتخاب رمز عبور",
         error: "رمز عبور باید بیش از 8 کاراکتر و دارای یک عدد باشد",
         pattern: "admin",
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
         formButton.classList.add(classes.login_form__buttonActive);
      } else {
         formButton.classList.remove(classes.login_form__buttonActive);
      }
   };
   const onSubmitHandler = (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      console.log(Object.fromEntries(data.entries()));
      router.push("/dashboard");
   };

   // svg
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

   useEffect(() => {
      setTimeout(() => {
         alert("Email: admin@hi _ password: admin ");
      }, 1000);
   }, []);

   return (
      <div className={classes.login}>
         <Form
            onSubmit={onSubmitHandler}
            formClassName={classes.login_form}
            title="ورود به پنل کاربری"
            inputs={loginInputs.map((input) => (
               <Input
                  value={values[input.name]}
                  key={input.name}
                  {...input}
                  onChange={inputChangeHandler}
               />
            ))}
            buttonText="ورود"
            law={
               <p
                  onClick={() => {
                     router.push("/forget-password");
                  }}
               >
                  رمز عبور خود را فراموش کرده‌اید؟
               </p>
            }
            tag={
               <>
                  <Text type="Paragraph2" color="#787878" element="a">
                     هنوز عضو نیستید؟
                  </Text>
                  <Text
                     onClick={() => {
                        router.push("/sign-up");
                     }}
                     type="HeadLink"
                     color="white"
                     element="h6"
                  >
                     عضویت در استندبای
                  </Text>
               </>
            }
         />
      </div>
   );
};

export default Login;
