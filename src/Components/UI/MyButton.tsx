import React from "react";
// @ts-ignore
import classes from '../UI/MyButton.module.css'

export const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
  }