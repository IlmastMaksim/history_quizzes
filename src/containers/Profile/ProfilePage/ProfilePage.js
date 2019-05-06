import React from 'react';


import classes from './ProfilePage.css';

const profilePage = () => {
    return (
        <div className={classes.ProfilePageWrap}>
            <div className={classes.ProfilePageUpperPartWrap}>
                <div className={classes.Avatar}></div>
                <div className={classes.ProfilePageUpperTextPartWrap}>
                    <span className={classes.EmailName}>Your email address: <span>test@mail.com</span></span>
                    <a className={classes.TestBtn} href='/#'>Make a test!</a>
                </div>
            </div>
            <div className={classes.ProfilePageLowerPartWrap}>
                <span>You have been using our service for: <span>21 days</span></span>
                <span>Tests passed through: <span>228</span></span>
                <span>Tests created: <span>0</span></span>
            </div>
        </div>
    )
}


export default profilePage; 