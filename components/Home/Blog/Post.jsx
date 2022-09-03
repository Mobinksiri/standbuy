import React from "react";
import Text from "../../styles/Text";
import classes from "./Blog.module.scss";
import Link from "next/link";

const Post = ({ image, paragraph, title, id }) => {
   return (
      <Link href={`/blog/${id}`} scroll={false}>
         <div className={classes.blog_box__posts___post}>
            <div className={classes.blog_box__posts___post____image}>
               <img src={image} alt={title} />
            </div>
            <div className={classes.blog_box__posts___post____dec}>
               <Text type="Head5" element="h6" color="white">
                  {title}
               </Text>
               <div
                  className={classes.blog_box__posts___post____dec_____body}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
               ></div>
               <Text type="Paragraph3" element="p" color="#818181">
                  دسته بندی
               </Text>
            </div>
         </div>
      </Link>
   );
};

export default Post;
