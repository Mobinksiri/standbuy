import React, { useState, useEffect } from "react";
import classes from "./Blog.module.scss";
import Text from "../../styles/Text";
import Container from "../../statics/Container/Container";
import Post from "./Post";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Blog = () => {
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

   const DesktopPosts = (
      <div className={classes.blog_box__posts}>
         <Post
            title="عنوان پست"
            paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
            image="./blog/post_1.jpg"
         />
         <Post
            title="عنوان پست"
            paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
            image="./blog/post_2.jpg"
         />
         <Post
            title="عنوان پست"
            paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
            image="./blog/post_3.jpg"
         />
      </div>
   );

   const MobilePosts = (
      <Swiper
         className={classes.swiper}
         spaceBetween={width > breakpointMobile ? 20 : 10}
         slidesPerView={width > breakpoint ? 2 : 1}
      >
         <SwiperSlide className={classes.swiper_swiperSlider}>
            <Post
               title="عنوان پست"
               paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
               image="./blog/post_1.jpg"
            />
         </SwiperSlide>
         <SwiperSlide className={classes.swiper_swiperSlider}>
            <Post
               title="عنوان پست"
               paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
               image="./blog/post_2.jpg"
            />
         </SwiperSlide>
         <SwiperSlide className={classes.swiper_swiperSlider}>
            <Post
               title="عنوان پست"
               paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
               image="./blog/post_3.jpg"
            />
         </SwiperSlide>
      </Swiper>
   );

   return (
      <div className={classes.blog}>
         <Container>
            <div className={classes.blog_box}>
               <div className={classes.blog_box__head}>
                  <Text type="Head2" element="h2" color="white">
                     وبلاگ
                  </Text>
                  <Text type="Body2" element="p" color="orange">
                     مشاهده همه
                     <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M8.5 1.5L2 8L8.5 14.5"
                           stroke="#FA6256"
                           strokeWidth="2"
                        />
                     </svg>
                  </Text>
               </div>
               {width > breakpoint ? DesktopPosts : MobilePosts}
            </div>
         </Container>
      </div>
   );
};

export default Blog;
