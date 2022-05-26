import React from "react";
import classes from "./SideBar.module.scss";
import Text from "../../styles/Text";
import Link from "next/link";

const SideBar = ({ type }) => {
   return (
      <div className={classes.sidebar}>
         <ul className={classes.sidebar_ul}>
            <Link href="dashboard">
               <li
                  className={
                     type == "dashboard"
                        ? `${classes.sidebar_ul__item} ${classes.sidebar_ul__item___active}`
                        : classes.sidebar_ul__item
                  }
               >
                  <span className="material-symbols-outlined">
                     subscriptions
                  </span>
                  <Text type={"Body4"} color="white" element="h5">
                     اشتراک من
                  </Text>
               </li>
            </Link>
            <Link href="account">
               <li
                  className={
                     type == "account"
                        ? `${classes.sidebar_ul__item} ${classes.sidebar_ul__item___active}`
                        : classes.sidebar_ul__item
                  }
               >
                  <span className="material-symbols-outlined">
                     account_circle
                  </span>
                  <Text type={"Body4"} color="white" element="h5">
                     مشخصات کاربری
                  </Text>
               </li>
            </Link>
         </ul>
      </div>
   );
};

export default SideBar;
