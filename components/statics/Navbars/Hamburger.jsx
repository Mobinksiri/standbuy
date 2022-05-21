import React, { useState, useEffect } from "react";
import classes from "./Hamburger.module.scss";
import Text from "../../styles/Text";

const Hamburger = ({ hamburgerItems, onClick }) => {
   const [active, setActive] = useState(false);

   const navbarActiveHandler = () => {
      setActive(!active);
   };

   useEffect(() => {
      const navbar = document.querySelector("#navbar");
      active
         ? (navbar.style.backgroundColor = "#1a1a1c")
         : (navbar.style.backgroundColor = "var(--black)");
   }, [active]);

   return (
      <div className={classes.hamburger}>
         <div
            onClick={navbarActiveHandler}
            className={classes.hamburger_icon__box}
         >
            <div
               className={
                  active
                     ? `${classes.hamburger_icon} ${classes.active}`
                     : classes.hamburger_icon
               }
            >
               <div className={classes.hamburger_icon__side}></div>
               <div className={classes.hamburger_icon__side}></div>
               <div className={classes.hamburger_icon__side}></div>
            </div>
         </div>
         <ul
            className={
               active
                  ? `${classes.hamburger_list} ${classes.hamburger_list__active}`
                  : classes.hamburger_list
            }
         >
            {hamburgerItems.map((item) => (
               <li
                  onClick={() => {
                     onClick(item.id);
                     navbarActiveHandler();
                  }}
                  className={classes.hamburger_list__item}
                  key={item.id}
               >
                  <Text type="HeadLink" color="white">
                     {item.title}
                  </Text>
               </li>
            ))}
            <a
               href="tel:02166892000"
               className={classes.hamburger_list__item___support}
            >
               <Text type="HeadLink" color="white">
                  پشتیبانی
               </Text>
               <li className={classes.hamburger_list__item___support____call}>
                  <p
                     className={
                        classes.hamburger_list__item___support____call_____text
                     }
                  >
                     <Text element="span" type="Paragraph1" color="white">
                        ۰۲۱
                     </Text>
                     <Text element="span" type="HeadLink" color="white">
                        ۶۶۸۹۲۰۰
                     </Text>
                  </p>
                  <img
                     className={
                        classes.hamburger_list__item___support____call_____svg
                     }
                     src="/navbar/call.svg"
                     alt=""
                  />
               </li>
            </a>
         </ul>
      </div>
   );
};

export default Hamburger;
