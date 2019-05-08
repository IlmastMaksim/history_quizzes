import React from 'react';

import classes from './CreatingPage.css';

const creatingPage = (props) => {
    return (
        <div className={classes.CreatingPageWrap}>
            <div className={classes.FormWrap}>
            <form className={classes.CreatingForm} method="GET" action="https://freecodecamp.com">
                <div class="rowform">
                <div class="labels">
                    <label id="name-label" for="name">* Name</label>
                </div>
                
                <div class="rowform-right">
                    <input autofocus type="text" name="name" id="name" class="input-field" placeholder="Enter your name here" required />
                </div> 
                </div>
            </form>
            </div>
        </div>
    )
}


export default creatingPage; 