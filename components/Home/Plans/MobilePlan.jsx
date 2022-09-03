import React from "react";
import Plan from "./Plan";
import classes from "./Plans.module.scss";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MobilePlan = ({ width, breakpointMobile, openModal }) => {
   return (
      <Swiper
         className={classes.swiper}
         spaceBetween={width > breakpointMobile ? 15 : 10}
         slidesPerView={width > 550 ? 2 : 1}
         grabCursor={true}
      >
         <SwiperSlide>
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
         </SwiperSlide>
         <SwiperSlide>
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
         </SwiperSlide>
         <SwiperSlide>
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
         </SwiperSlide>
      </Swiper>
   );
};

export default MobilePlan;
