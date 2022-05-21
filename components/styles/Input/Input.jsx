import React from "react";
import classes from "./Input.module.scss";

const Input = (props) => {
   const { error, ...inputProps } = props;

   return (
      <div className={classes.input}>
         <input {...inputProps} />
         <span className={classes.input_error}>{error}</span>
      </div>
   );
};

export default Input;
