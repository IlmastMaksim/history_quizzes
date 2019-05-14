import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from './ProfilePage.css';

const profilePage = (props) => {
    let email = props.email === undefined ? localStorage.getItem('email') : props.email;
    return (
        <div className={classes.ProfilePageWrap}>
            <div className={classes.ProfilePageUpperPartWrap}>
                <div className={classes.Avatar}></div>
                <div className={classes.ProfilePageUpperTextPartWrap}>
                    <span className={classes.EmailName}>Your email address: <span>{email}</span></span>
                    <NavLink className={classes.TestBtn} to="/creating">Create a Test!</NavLink>
                </div>
            </div>
        </div>
    )
}


export default profilePage; 