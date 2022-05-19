import React from "react";
import Text from "../../styles/Text";
import classes from "./Blog.module.scss";

const Post = ({ image, paragraph, title }) => {
   return (
      <div className={classes.blog_box__posts___post}>
         <div className={classes.blog_box__posts___post____image}>
            <img src={image} alt={title} />
         </div>
         <div className={classes.blog_box__posts___post____dec}>
            <Text type="Head5" element="h6" color="white">
               {title}
            </Text>
            <Text type="Paragraph2" element="p" color="#C0C0C0">
               {paragraph}
            </Text>
            <Text type="Paragraph3" element="a" color="#818181">
               دسته بندی
            </Text>
         </div>
      </div>
   );
};

export default Post;
