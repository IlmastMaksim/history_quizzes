import React from 'react';

import classes from './LoginButton.css';

const loginButton = (props) => (
    <button
        disabled={props.disabled}
        className={[classes.LoginButton, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default loginButton;