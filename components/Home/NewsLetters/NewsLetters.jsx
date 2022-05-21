import React, { useState, useEffect } from "react";
import classes from "./NewsLetters.module.scss";
import Input from "../../styles/Input/Input";
import Text from "../../styles/Text";
import Container from "../../statics/Container/Container";

const NewsLetters = () => {
   const [inputValue, setInputValue] = useState("");

   const newsInput = {
      name: "newsLetters",
      type: "email",
      placeholder: "آدرس ایمیل خود را وارد کنید",
      error: "آدرس ایمیل نامعتبر است",
      required: true,
      span: false,
   };

   const changeHandler = (e) => {
      setInputValue(e.target.value);
   };

   const useWidth = () => {
      const [width, setWidth] = useState(0);
      const handleSize = () => setWidth(window.innerWidth);
      useEffect(() => {
         handleSize();
         window.addEventListener("resize", handleSize);
         return () => {
            window.removeEventListener("resize", handleSize);
         };
      }, [width]);
      return width;
   };

   const width = useWidth();
   const breakpoint = 425;

   useEffect(() => {
      const input = document.querySelector("#newsletters_form");
      width < breakpoint
         ? input.children[0].children[0].setAttribute(
              "placeholder",
              "آدرس ایمیل"
           )
         : input.children[0].children[0].setAttribute(
              "placeholder",
              "آدرس ایمیل خود را وارد کنید"
           );
   }, [width]);

   const navProcessHandler = (e) => {
      const id = e.target.parentElement.id;
      if (id == "top") {
         document.documentElement.scrollTop = 0;
      } else {
         const section = document.querySelector(`#${id}`);
         document.documentElement.scrollTop = section.offsetTop - 86;
      }
   };

   const submitHandler = (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      alert(`${form.get("newsLetters")} با موفقیت ثبت شد`);
   };

   return (
      <div id="newsletter" className={classes.newsletters}>
         <Container>
            <div className={classes.newsletters_box}>
               <div className={classes.newsletters_box__navbar}>
                  <ul className={classes.newsletters_box__navbar___ul}>
                     <li
                        id="top"
                        className={classes.newsletters_box__navbar___ul____item}
                     >
                        <Text
                           onClick={navProcessHandler}
                           type="Body4"
                           element="p"
                           color="white"
                        >
                           <svg
                              width="10"
                              height="13"
                              viewBox="0 0 11 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M5.5 1.96973V14.0303M5.5 1.96973L1 6.46973M5.5 1.96973L10 6.46973"
                                 stroke="white"
                                 strokeWidth="1.4"
                              />
                           </svg>
                           بالا
                        </Text>
                     </li>
                     <li
                        id="questions"
                        className={classes.newsletters_box__navbar___ul____item}
                     >
                        <Text
                           onClick={navProcessHandler}
                           type="Body4"
                           element="p"
                           color="white"
                        >
                           سوالات متداول
                        </Text>
                     </li>
                     <li
                        id="prices"
                        className={classes.newsletters_box__navbar___ul____item}
                     >
                        <Text
                           onClick={navProcessHandler}
                           type="Body4"
                           element="p"
                           color="white"
                        >
                           قیمت‌ها
                        </Text>
                     </li>
                     <li
                        id="attr"
                        className={classes.newsletters_box__navbar___ul____item}
                     >
                        <Text
                           onClick={navProcessHandler}
                           type="Body4"
                           element="p"
                           color="white"
                        >
                           ویژگی‌ها
                        </Text>
                     </li>
                  </ul>
               </div>
               <form
                  id="newsletters_form"
                  className={classes.newsletters_box__newsletters}
                  onSubmit={submitHandler}
               >
                  <Input
                     value={inputValue}
                     onChange={changeHandler}
                     {...newsInput}
                  />
                  <button type="submit">
                     <Text type="HeadLink" element="h6" color="white">
                        عضویت در خبرنامه
                     </Text>
                  </button>
               </form>
            </div>
         </Container>
      </div>
   );
};

export default NewsLetters;