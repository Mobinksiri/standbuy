import React, { useState } from "react";
import classes from "./SignUp.module.scss";
import Form from "../statics/Form/Form";
import Text from "../styles/Text";
import Input from "../styles/Input/Input";
import { useRouter } from "next/router";
import Link from "next/link";

const SignUp = () => {
   const router = useRouter();
   const [rule, setRule] = useState(false);

   // input process
   const [values, setValues] = useState({
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
      mobile: "",
   });
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
   const inputChangeHandler = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
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
         formButton.classList.add(classes.signUp_form__buttonActive);
      } else {
         formButton.classList.remove(classes.signUp_form__buttonActive);
      }
   };
   const onSubmitHandler = (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      console.log(Object.fromEntries(data.entries()));
      router.push("/dashboard");
   };

   // close rule modal
   const closeRuleHandler = (e) => {
      const modal = document.querySelector(`.${classes.rule}`);
      e.target == modal ? setRule(false) : null;
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
      <>
         <div className={classes.signUp}>
            <Form
               onSubmit={onSubmitHandler}
               formClassName={classes.signUp_form}
               title="عضویت در استندبای"
               description={
                  <Text type="Medium1" color="#C0C0C0" element="p">
                     به خانواده‌ی استندبای خوش آمدید!
                  </Text>
               }
               inputs={signUpInputs.map((input) => (
                  <Input
                     value={values[input.name]}
                     key={input.name}
                     {...input}
                     onChange={inputChangeHandler}
                  />
               ))}
               buttonText="عضویت"
               law={
                  <p>
                     شما با عضویت در استندبای با تمامی{" "}
                     <span onClick={() => setRule(true)}>قوانین</span> موجود
                     اعلام موافقت می‌نمایید.
                  </p>
               }
               tag={
                  <>
                     <Text type="Paragraph2" color="#787878" element="a">
                        عضو استندبای هستید؟
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
         <div
            onClick={closeRuleHandler}
            className={
               rule ? `${classes.rule} ${classes.rule_active}` : classes.rule
            }
         >
            <div className={classes.rule_modal}>
               <div className={classes.rule_modal__head}>
                  <Text type="Head6" element="h6" color="white">
                     قوانین و مقررات استفاده
                  </Text>
                  <svg
                     onClick={() => setRule(false)}
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <circle cx="12" cy="12" r="12" fill="#5D5D63" />
                     <path d="M16 8L8 16" stroke="white" strokeWidth="1.4" />
                     <path d="M8 8L16 16" stroke="white" strokeWidth="1.4" />
                  </svg>
               </div>
               <Text type="Paragraph3" element="p" color="#878787">
                  لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی
                  آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته
                  می‌شود.
                  <br /> طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی
                  برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش
                  گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                  نوع و اندازه فونت و ظاهر متن باشد.
                  <br /> معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های
                  آزمایشی و بی‌معنی استفاده می‌کنند
                  <br />
                  تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا
                  صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر
                  می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.
                  <br />
                  از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق
                  تکثیر متون را ندارند
                  <br /> و در همان حال کار آنها به نوعی وابسته به متن می‌باشد
                  آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را
                  صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان
                  برند.
                  <br />
                  از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق
                  تکثیر متون را ندارند
                  <br />
                  از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق
                  تکثیر متون را ندارند
               </Text>
            </div>
         </div>
      </>
   );
};

export default SignUp;
