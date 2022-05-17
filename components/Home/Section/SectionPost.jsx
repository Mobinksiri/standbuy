import React from "react";
import Text from "../../styles/Text";
import classes from "./Section.module.scss";

const SectionPost = ({ title, image, paragraph }) => {
   return (
      <div className={classes.section_box__post}>
         <div className={classes.section_box__post___dec}>
            <Text type="Head3" color="white" element="h2">
               {title}
            </Text>
            <Text type="Paragraph1" color="#C0C0C0" element="p">
               {paragraph}
            </Text>
         </div>
         <div className={classes.section_box__post___image}>
            <img src={image} alt={title} />
         </div>
      </div>
   );
};

export default SectionPost;
