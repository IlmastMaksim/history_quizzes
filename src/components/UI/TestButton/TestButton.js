import React from 'react';

import classes from './TestButton.css';

const testButton = (props) => (
    <button type='submit' disabled={props.disabled} className={classes.TestButton}>Submit</button>
);

export default testButton;