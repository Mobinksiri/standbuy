import React from "react";
import classes from "./Plans.module.scss";
import Plan from "./Plan";

const DesktopPlan = ({ openModal }) => {
   return (
      <div className={classes.plans_box__items}>
         <Plan
            buttonClick={openModal}
            className={"economical"}
            title="اقتصادی"
            paragraph="مناسب تریدرهای که تازه وارد کریپتو شده‌اند."
            price="۷۹/۰۰۰ تومان"
            pay="پرداخت ماهانه"
            buy="خرید پلن اقتصادی"
            tags={[
               "آموزش راه اندازی",
               "آموزش راه اندازی",
               "آموزش راه اندازی",
               "آموزش راه اندازی",
               "آموزش راه اندازی",
               "آموزش راه اندازی",
               "آموزش راه اندازی",
            ]}
         />
         <Plan
            buttonClick={openModal}
            className={"advanced"}
            title="حرفه ای"
            paragraph="مناسب تریدرهای که حرفه‌ای‌اند."
            price="۱۶۹/۰۰۰ تومان"
            pay="پرداخت ماهانه"
            buy="خرید پلن حرفه ای"
            tags={[
               "آموزش راه اندازی",
               "آموزش راه اندازی",
               "آموزش راه اندازی",
               "آموزش راه اندازی",
               "آموزش راه اندازی",
               "آموزش راه اندازی",
               "آموزش راه اندازی",
            ]}
         />
         <Plan
            className={"soon"}
            title="بزودی"
            paragraph="بزودی"
            price="۰ تومان"
            pay="پرداخت ماهانه"
            buy="بزودی"
            tags={[
               "آموزش راه اندازی",
               "آموزش راه اندازی",
               "آموزش راه اندازی",
               "آموزش راه اندازی",
               "آموزش راه اندازی",
               "آموزش راه اندازی",
               "آموزش راه اندازی",
            ]}
         />
      </div>
   );
};

export default DesktopPlan;
