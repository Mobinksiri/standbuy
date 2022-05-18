import React from "react";
import Text from "../../styles/Text";
import classes from "./Plans.module.scss";

const Plan = ({
   title,
   paragraph,
   price,
   pay,
   buy,
   tags,
   id,
   className,
   buttonClick,
}) => {
   return (
      <div
         id={id}
         className={`${classes.plans_box__items___item} ${className}`}
      >
         <div className={classes.plans_box__items___item____head}>
            <div className={classes.plans_box__items___item____head_____title}>
               <Text type="Head4" color="white" element="h4">
                  {title}
               </Text>
               <Text type="Paragraph2" color="#C0C0C0" element="p">
                  {paragraph}
               </Text>
            </div>
            <div className={classes.plans_box__items___item____head_____price}>
               <Text type="Body1" color="white" element="h5">
                  {price}
               </Text>
               <Text type="Medium1" color="#7E7E7E" element="p">
                  {pay}
               </Text>
            </div>
            <button onClick={buttonClick} type="button">
               <Text type="Head6" color="white" element="h6">
                  {buy}
               </Text>
            </button>
         </div>
         <div className={classes.plans_box__items___item____tags}>
            {tags.map((tag, index) => (
               <div
                  key={index}
                  className={classes.plans_box__items___item____tags_____tag}
               >
                  <svg
                     width="14"
                     height="12"
                     viewBox="0 0 14 12"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M0.5 6.75L4.43333 10.75L13.45 1.25"
                        stroke="white"
                        strokeWidth="1.4"
                     />
                  </svg>
                  <Text type="Medium1" color="white" element="a">
                     {tag}
                  </Text>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Plan;
