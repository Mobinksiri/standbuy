import React, { useState } from "react";
import Text from "../../styles/Text";
import classes from "./Dropdown.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const Dropdown = ({ dropDownStyle }) => {
   const [active, setActive] = useState(false);
   const [modal, setModal] = useState(false);
   const router = useRouter();

   // modal active process
   const modalActiveHandler = () => {
      setModal(true);
   };

   // ---
   const closePageHandler = () => {
      setModal(false);
      router.push("/");
   };

   // modal close process
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

   // ---
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
               style={dropDownStyle}
               className={
                  active
                     ? `${classes.dropdown_items} ${classes.dropdown_items__active}`
                     : classes.dropdown_items
               }
            >
               <Text
                  onClick={() => {
                     router.push("/dashboard");
                  }}
                  type="Head7"
                  color="white"
                  element="a"
               >
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
               {/* modal items header */}
               <div className={classes.modal_items__head}>
                  <Text type="Head6" color="white" element="h4">
                     خروج از حساب کاربری
                  </Text>
                  <Text type="Paragraph3" color="#878787" element="p">
                     آیا مایل به خروج از حساب کاربری هستید؟
                  </Text>
               </div>

               {/* modal items buttons */}
               <div className={classes.modal_items__buttons}>
                  <Link href="/">
                     <button
                        className={classes.modal_items__buttons___exit}
                        type="button"
                        id="exit"
                        // onClick={closePageHandler}
                     >
                        <Text type="Head6" color="white" element="h4">
                           خروج
                        </Text>
                     </button>
                  </Link>
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
