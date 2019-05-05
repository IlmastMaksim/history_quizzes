import React from "react";

import classes from "./ErrorMessage.css";

const errorMessage = (props) => {
        const iconClasses = classes.ErrorIcon.concat(" ", "fa").concat(" ", "fa-exclamation-circle");
        return (
                <div className={classes.ErrorMsg}>
                    <i className={iconClasses}></i>
                    {props.children}
                </div>
        )
}


export default errorMessage;