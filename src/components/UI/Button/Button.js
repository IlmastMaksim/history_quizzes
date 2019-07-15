import React from 'react';

import classes from './Button.css';

const button = (props) => {
    let btn = null;

    if (props.type === 'quizz') {
        btn = <button
            type='submit'
            className={classes.QuizzButton}>{props.children}</button>
    }
    else if (props.type === 'login') {
        btn = <button
            className={[classes.LoginButton, classes[props.loginType]].join(' ')}
            onClick={props.clicked}>{props.children}</button>
    }

    return <span>{btn}</span>
};

export default button;