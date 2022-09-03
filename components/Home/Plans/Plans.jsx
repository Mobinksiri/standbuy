import React, { useState, useEffect } from "react";
import Text from "../../styles/Text";
import classes from "./Plans.module.scss";
import Container from "../../statics/Container/Container";
import DesktopPlan from "./DesktopPlan";
import MobilePlan from "./MobilePlan";

const Plans = () => {
   // states
   const [modal, setModal] = useState(false);
   const [selectedPlan, setSelectedPlan] = useState();
   const [selectedPrice, setSelectedPrice] = useState();
   const [modalAnimation, setModalAnimation] = useState(false);
   const [counter, setCounter] = useState(0);

   // get window width
   const useWidth = () => {
      const [width, setWidth] = useState(0);
      const handleResize = () => setWidth(window.innerWidth);
      useEffect(() => {
         handleResize();
         window.addEventListener("resize", handleResize);
         return () => window.removeEventListener("resize", handleResize);
      }, [handleResize]);
      return width;
   };
   const width = useWidth();
   const breakpoint = 768;
   const breakpointMobile = 425;

   // --
   var timer;
   useEffect(() => {
      const countSpan = document.querySelector("#count");
      countSpan.textContent = counter;
      if (counter > 0) {
         timer = setTimeout(() => {
            setCounter(counter - 1);
         }, 1000);
      } else if (counter == 0) {
         setModal(false);
      } else {
         clearInterval(timer);
      }
      return () => clearInterval(timer);
   }, [counter]);

   // open modal process
   const openModalHandler = (e) => {
      setCounter(6);
      // Get Title and Price
      const selectedPlanTitle =
         e.target.parentElement.children[0].children[0].innerHTML;
      const selectedPlanPrice =
         e.target.parentElement.children[1].children[0].innerHTML;
      // activity
      setModal(true);
      setSelectedPlan(selectedPlanTitle);
      setSelectedPrice(selectedPlanPrice);
   };

   // close modal process
   const closeModalHandler = () => {
      setModal(false);
      setCounter(0);
   };

   // --
   const backDropModalHandler = () => {
      setModalAnimation(true);
      const modalBox = document.querySelector("#modal_box");
      modalBox.addEventListener("animationend", () => {
         setModalAnimation(false);
      });
   };

   return (
      <div id="prices" className={classes.plans}>
         <Container>
            {/* plans */}
            <div className={classes.plans_box}>
               <div className={classes.plans_box__head}>
                  <Text type="Head2" color="white" element="h2">
                     پلن های مشترک
                  </Text>
                  <Text type="Paragraph1" color="#C0C0C0" element="p">
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                     با استفاده از طراحان گرافیک است.
                  </Text>
               </div>
               {width > breakpoint ? (
                  <DesktopPlan openModal={openModalHandler} />
               ) : (
                  <MobilePlan
                     width={width}
                     breakpointMobile={breakpointMobile}
                     openModal={openModalHandler}
                  />
               )}
            </div>

            {/* modal */}
            <div
               className={
                  modal
                     ? `${classes.modal} ${classes.modal_active}`
                     : classes.modal
               }
               onClick={backDropModalHandler}
            >
               <div
                  id="modal_box"
                  className={
                     modalAnimation
                        ? `${classes.modal_box} ${classes.modal_animation}`
                        : classes.modal_box
                  }
               >
                  {/* modal header */}
                  <div className={classes.modal_box__head}>
                     <div className={classes.modal_box__head___selected}>
                        <Text type="Body4" element="p" color="white">
                           پلن انتخابی:
                        </Text>
                        <Text type="Head6" element="h6" color="white">
                           {selectedPlan} — {selectedPrice}
                        </Text>
                     </div>
                     <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M0.537036 0H6.1304C6.60372 0 6.84493 0.569715 6.5127 0.904309L0.932986 6.5065C0.596201 6.84562 0.0182046 6.6105 0.0182046 6.13573L2.48353e-08 0.533542C2.48353e-08 0.239642 0.23666 0 0.537036 0ZM19.4715 20H13.8699C13.3963 20 13.155 19.4303 13.4874 19.0957L19.0662 13.4935C19.4032 13.1544 19.9815 13.3895 19.9815 13.8643L19.9998 19.4665C20.0089 19.7604 19.7675 20 19.4715 20ZM0.832319 15.1533L15.157 0.832152C16.2667 -0.277384 18.0628 -0.277384 19.1677 0.832152C20.2774 1.94164 20.2774 3.73721 19.1677 4.84188L4.84303 19.1679C3.73814 20.2774 1.93721 20.2774 0.832319 19.1679C-0.27744 18.0583 -0.27744 16.2628 0.832319 15.1533Z"
                           fill="white"
                        />
                     </svg>
                  </div>

                  {/* modal timer */}
                  <div className={classes.modal_box__timer}>
                     <Text type="Body4" element="h5" color="#878787">
                        شما تا <span id="count">0</span> ثانیه دیگر به درگاه
                        پرداخت آنلاین منتقل خواهید شد...
                     </Text>
                     <Text
                        onClick={closeModalHandler}
                        type="Body4"
                        element="h5"
                        color="#FA6256"
                     >
                        انصراف
                     </Text>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Plans;
