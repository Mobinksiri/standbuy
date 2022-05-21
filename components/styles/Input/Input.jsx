import React, { useState } from "react";
import classes from "./Input.module.scss";

const Input = (props) => {
   const { error, span, ...inputProps } = props;
   const [focused, setFocused] = useState(false);

   const handleFocus = () => {
      setFocused(true);
      console.log("focused");
   };

   return (
      <div id="input" className={classes.input}>
         <input
            focused={focused.toString()}
            onBlur={handleFocus}
            {...inputProps}
         />
         {span == true ? (
            <span className={classes.input_error}>{error}</span>
         ) : null}
      </div>
   );
};

export default Input;
