import React, { useState } from "react";
import Text from "../../styles/Text";
import classes from "./Dropdown.module.scss";

const Dropdown = () => {
   const [active, setActive] = useState(false);
   const [modal, setModal] = useState(false);

   const modalActiveHandler = () => {
      setModal(true);
   };

   const modalCloseHandler = (e) => {
      const modal = document.querySelector("#modal");
      const cancel = document.querySelector("#cancel");
      const target = e.target;
      target === modal
         ? setModal(false)
         : target === cancel
         ? setModal(false)
         : setModal(true);
   };

   const dropdownActiveHandler = () => {
      setActive(!active);
   };

   return (
      <>
         {/* dropdown */}
         <div
            onClick={dropdownActiveHandler}
            className={
               active
                  ? `${classes.dropdown} ${classes.active}`
                  : classes.dropdown
            }
         >
            <Text type="HeadLink" color="white" element="h4">
               مبین کثیری
            </Text>
            <svg
               width="12"
               height="7"
               viewBox="0 0 12 7"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M1 0.5L6 5.5L11 0.5" stroke="white" strokeWidth="1.4" />
            </svg>
            <div
               className={
                  active
                     ? `${classes.dropdown_items} ${classes.dropdown_items__active}`
                     : classes.dropdown_items
               }
            >
               <Text type="Head7" color="white" element="a">
                  پلن کاربری
               </Text>
               <Text
                  type="Head7"
                  color="white"
                  element="a"
                  onClick={modalActiveHandler}
               >
                  خروج
               </Text>
            </div>
         </div>

         {/* modal */}
         <div
            id="modal"
            className={
               modal
                  ? `${classes.modal} ${classes.modal_active}`
                  : classes.modal
            }
            onClick={modalCloseHandler}
         >
            <div className={classes.modal_items}>
               <div className={classes.modal_items__head}>
                  <Text type="Head6" color="white" element="h4">
                     خروج از حساب کاربری
                  </Text>
                  <Text type="Paragraph3" color="#878787" element="p">
                     آیا مایل به خروج از حساب کاربری هستید؟
                  </Text>
               </div>
               <div className={classes.modal_items__buttons}>
                  <button
                     className={classes.modal_items__buttons___exit}
                     type="button"
                     id="exit"
                  >
                     <Text type="Head6" color="white" element="h4">
                        خروج
                     </Text>
                  </button>
                  <button
                     className={classes.modal_items__buttons___cancel}
                     type="button"
                     id="cancel"
                  >
                     <Text type="Head6" color="white" element="h4">
                        انصراف
                     </Text>
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default Dropdown;
