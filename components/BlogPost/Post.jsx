import React from "react";
import Text from "../styles/Text";
import classes from "./Post.module.scss";

const Post = ({ image, title, body, writer, date }) => {
   // copy function
   const copyHandler = (e) => {
      const el = document.createElement("input");
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      console.log(e.target);
      const span = e.target.children[1];
      span.innerHTML = "کپی شد!";
      setTimeout(() => {
         span.innerHTML = "کپی پیوند";
      }, 2000);
   };

   return (
      <div className={classes.post}>
         {/* image */}
         <div className={classes.post_image}>
            <img className={classes.post_image__img} src={image} alt={title} />
         </div>

         {/* header */}
         <div className={classes.post_header}>
            {/* title */}
            <div className={classes.post_header__title}>
               <Text type="Head2" element="h2" color="white">
                  {title}
               </Text>
               <Text type="Medium1" element="h5" color="white">
                  توسط {writer} {date}
               </Text>
               <Text type="Medium1" element="h5" color="white">
                  دسته بندی
               </Text>
            </div>

            {/* copy button */}
            <div className={classes.post_header__copy}>
               <button onClick={copyHandler} type="button">
                  <svg
                     width="14"
                     height="15"
                     viewBox="0 0 14 15"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <g clipPath="url(#clip0_424_1185)">
                        <path
                           d="M4.73156 4.77778V9.76852H1.87971V1.21296H10.4353V4.06481H5.44453H4.73156V4.77778Z"
                           stroke="white"
                           strokeWidth="1.42593"
                        />
                        <rect
                           x="4.73127"
                           y="4.06453"
                           width="8.55556"
                           height="8.55556"
                           stroke="white"
                           strokeWidth="1.42593"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_424_1185">
                           <rect
                              width="14"
                              height="14"
                              fill="white"
                              transform="translate(0 0.5)"
                           />
                        </clipPath>
                     </defs>
                  </svg>
                  <Text type="Body4" element="p" color="white">
                     کپی پیوند
                  </Text>
               </button>
            </div>
         </div>

         {/* body */}
         <div
            className={classes.post_body}
            dangerouslySetInnerHTML={{ __html: body }}
         ></div>
      </div>
   );
};

export default Post;
