import React, { useState, useEffect } from "react";
import classes from "./Blog.module.scss";
import Text from "../../styles/Text";
import Container from "../../statics/Container/Container";
import Post from "./Post";
import { posts } from "../../../posts";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Blog = () => {
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

   // desktop mode
   const DesktopPosts = (
      <div className={classes.blog_box__posts}>
         {posts.map((post) => (
            <Post
               key={post.id}
               title={post.title}
               paragraph={post.body}
               image={post.image}
               id={post.id}
            />
         ))}
      </div>
   );

   // mobile mode
   const MobilePosts = (
      <Swiper
         className={classes.swiper}
         spaceBetween={width > breakpointMobile ? 20 : 10}
         slidesPerView={width > breakpoint ? 2 : 1}
         grabCursor={true}
      >
         {posts.map((post) => (
            <SwiperSlide key={post.id} className={classes.swiper_swiperSlider}>
               <Post
                  title={post.title}
                  paragraph={post.body}
                  image={post.image}
                  id={post.id}
               />
            </SwiperSlide>
         ))}
      </Swiper>
   );

   useEffect(() => {
      window.history.scrollRestoration = "manual";
   }, []);

   return (
      <div id="blog" className={classes.blog}>
         <Container>
            <div className={classes.blog_box}>
               {/* head */}
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

               {/* posts */}
               {width > breakpoint ? DesktopPosts : MobilePosts}
            </div>
         </Container>
      </div>
   );
};

export default Blog;
