import React from "react";

import classes from "./ErrorMessage.css";

const errorMessage = (props) => {
        const iconClasses = classes.ErrorIcon.concat(" ", "fa").concat(" ", "fa-exclamation-circle");
        let errorMsgClasses = props.hidden ? classes.Hidden : classes.ErrorMsg
        return (
                <div className={errorMsgClasses}>
                    <i className={iconClasses}></i>
                    {props.children}
                </div>
        )
}


export default errorMessage;