import React from "react";
import classes from "./Questions.module.scss";
import Text from "../../styles/Text";

const Question = ({
   title,
   paragraph,
   className,
   onClick,
   paragraphClassName,
}) => {
   return (
      <div className={className}>
         <div
            onClick={onClick}
            className={classes.questions_box__questions___question____title}
         >
            <Text id="question_title" type="Body3" element="h4" color="white">
               {title}
            </Text>
            <div
               className={
                  classes.questions_box__questions___question____title_____plus
               }
            >
               <span></span>
               <span></span>
            </div>
         </div>
         <Text
            className={paragraphClassName}
            id="question_paragraph"
            type="Paragraph2"
            element="p"
            color="#C0C0C0"
         >
            {paragraph}
         </Text>
      </div>
   );
};

export default Question;
