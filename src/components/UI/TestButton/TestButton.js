import React from 'react';

import classes from './TestButton.css';

const testButton = (props) => (
    <button type='submit' className={classes.TestButton}>{props.children}</button>
);

export default testButton;