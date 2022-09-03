import React, { useState, useEffect } from "react";
import Container from "../../statics/Container/Container";
import classes from "./Section.module.scss";
import SectionPost from "./SectionPost";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Section = () => {
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

   // desktop
   const DesktopSection = (
      <div className={classes.section_box}>
         <SectionPost
            image="./section/post.png"
            title="سیگنال‌های لحظه‌ای"
            paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
         />
         <SectionPost
            image="./section/post.png"
            title="تعیین دقیق میزان حد ضرر"
            paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
         />
         <SectionPost
            image="./section/post.png"
            title="هوش مصنوعی پیشرفته"
            paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
         />
      </div>
   );

   // mobile
   const MobileSection = (
      <Swiper
         className={classes.swiper}
         spaceBetween={width > breakpointMobile ? 25 : 10}
         slidesPerView={1}
         grabCursor={true}
      >
         <SwiperSlide>
            <SectionPost
               image="./section/post.png"
               title="سیگنال‌های لحظه‌ای"
               paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
            />
         </SwiperSlide>
         <SwiperSlide>
            <SectionPost
               image="./properties/property_1.png"
               title="تعیین دقیق میزان حد ضرر"
               paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
            />
         </SwiperSlide>
         <SwiperSlide>
            <SectionPost
               image="./section/post.png"
               title="هوش مصنوعی پیشرفته"
               paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
            />
         </SwiperSlide>
      </Swiper>
   );

   return (
      <div className={classes.section}>
         <Container>
            {width > breakpoint ? DesktopSection : MobileSection}
         </Container>
      </div>
   );
};

export default Section;
