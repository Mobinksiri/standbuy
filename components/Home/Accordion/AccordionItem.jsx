import React from "react";
import classes from "./Accordion.module.scss";
import Text from "../../styles/Text";

const AccordionItem = ({ paragraph, title, image, headClick }) => {
   return (
      <div className={classes.accordion_box__item}>
         <div className={classes.accordion_box__item___dec}>
            <Text onClick={headClick} element="h4" color="#818181" type="Head4">
               {title}
            </Text>
            <Text element="p" color="#C0C0C0" type="Paragraph1">
               {paragraph}
            </Text>
         </div>
         <div className={classes.accordion_box__item___image}>
            <img src={image} alt={title} />
         </div>
      </div>
   );
};

export default AccordionItem;
