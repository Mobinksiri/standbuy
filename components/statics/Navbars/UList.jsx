import React from "react";
import classes from "./UList.module.scss";
import Text from "../../styles/Text";

const UList = ({ navItems, onClick }) => {
   const mouseHoverHandler = (e) => {
      const ellipse = document.querySelector("#navbar_ellipse");
      ellipse.style.left = `${e.target.offsetLeft}px`;
      ellipse.style.width = `${e.target.offsetWidth}px`;
      ellipse.children[0].style.width = `${e.target.offsetWidth}px`;
   };

   const mouseLeaveHandler = () => {
      const ellipse = document.querySelector("#navbar_ellipse");
      ellipse.children[0].style.width = "0px";
   };

   return (
      <ul className={classes.nav_items}>
         {navItems.map((nav) => (
            <li
               onMouseEnter={(e) => {
                  mouseHoverHandler(e);
               }}
               onMouseLeave={mouseLeaveHandler}
               className={classes.nav_items__item}
               key={nav.id}
               onClick={() => onClick(nav.id)}
            >
               <Text type="HeadLink" element="a" color="white">
                  {nav.title}
               </Text>
            </li>
         ))}
         <div id="navbar_ellipse" className={classes.nav_items__ellipse}>
            <span className="ellipse-span"></span>
         </div>
      </ul>
   );
};

export default UList;
