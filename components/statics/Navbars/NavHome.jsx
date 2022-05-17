import React, { useState, useEffect } from "react";
import UList from "./UList";
import classes from "./NavHome.module.scss";
import Text from "../../styles/Text";
import Hamburger from "./Hamburger";
import Dropdown from "./Dropdown";

const NavHome = ({ nav, type }) => {
   const [call, setCall] = useState(false);

   // get information length for show or not show call
   const getInformationHandler = () => {
      const information = document.querySelector("#navbar_information");
      const informationArray = Array.from(information.children);
      informationArray.length > 1 ? setCall(true) : setCall(false);
   };

   // get window width
   const useWidth = () => {
      const [width, setWidth] = useState(0);
      const handleResize = () => setWidth(window.innerWidth);
      useEffect(() => {
         getInformationHandler();
         handleResize();
         window.addEventListener("resize", handleResize);
         return () => window.removeEventListener("resize", handleResize);
      }, [handleResize]);
      return width;
   };

   // width
   const windowWidth = useWidth();
   const breakpoint = 1024;

   // components in any sizes of screen
   const DesktopNav = (
      <>
         <div className={classes.navbar_box__nav___avatar}>
            <img src="/navbar/avatar.jpg" alt="" />
         </div>
         <UList navItems={nav} />
      </>
   );
   const MobileNav = <Hamburger hamburgerItems={nav} />;

   return (
      <div id="navbar" className={classes.navbar}>
         <div className={classes.navbar_box}>
            {/* navbar menu  */}
            <div className={classes.navbar_box__nav}>
               {windowWidth > breakpoint ? DesktopNav : MobileNav}
            </div>

            {/* information  */}
            <div
               id="navbar_information"
               className={classes.navbar_box__information}
            >
               {/* call */}
               <a
                  href="tel:02166892000"
                  className={
                     call
                        ? `${classes.navbar_box__information___call} ${classes.navbar_box__information___call___active}`
                        : classes.navbar_box__information___call
                  }
               >
                  <p className={classes.navbar_box__information___call____text}>
                     <Text element="span" type="Paragraph1" color="white">
                        ۰۲۱
                     </Text>
                     <Text element="span" type="HeadLink" color="white">
                        ۶۶۸۹۲۰۰
                     </Text>
                  </p>
                  <img
                     className={classes.navbar_box__information___call____svg}
                     src="/navbar/call.svg"
                     alt=""
                  />
               </a>

               {/* type */}
               {type === "home" ? (
                  <button
                     className={classes.navbar_box__information___button}
                     type="button"
                  >
                     <Text element="span" type="HeadLink" color="black">
                        ورود به پنل کاربری
                     </Text>
                  </button>
               ) : type === "user" ? (
                  <Dropdown />
               ) : null}
            </div>
         </div>
      </div>
   );
};

export default NavHome;
