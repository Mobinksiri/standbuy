import React from "react";
import Text from "../../styles/Text";
import classes from "./Form.module.scss";

const Form = ({
   title,
   description,
   inputs,
   buttonText,
   law,
   tag,
   className,
   formClassName,
   onSubmit,
}) => {
   return (
      <>
         <div className={`${classes.form} ${className}`}>
            <Text type="Head3" element="h3" color="white">
               {title}
            </Text>
            {description}
            <form onSubmit={onSubmit} className={formClassName}>
               {inputs}
               <button type="submit">
                  <Text type="Head6" element="h6" color="#5A5A5E">
                     {buttonText}
                  </Text>
               </button>
            </form>
            <div className={classes.form_law}>{law}</div>
         </div>
         <div className={classes.tag}>{tag}</div>
      </>
   );
};

export default Form;
