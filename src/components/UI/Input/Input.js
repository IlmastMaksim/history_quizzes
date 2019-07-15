import React from 'react';

import classes from './Input.css';

const input = ( props ) => {
    let inputElement = null;
    const loginInputClasses = [classes.LoginInputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        loginInputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'loginInput' ):
            inputElement = <input
                className={loginInputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        default:
            inputElement = <input
                className={loginInputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;