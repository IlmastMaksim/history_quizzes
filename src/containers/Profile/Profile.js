import React from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

import classes from './Profile.css';


const Profile = React.memo(props => {
    let email = props.email === undefined ? localStorage.getItem('email') : props.email;
    return (
            <div className={classes.ProfileWrap}>
                <div className={classes.ProfileUpperPartWrap}>
                    <div className={classes.Avatar}></div>
                    <div className={classes.ProfileUpperTextPartWrap}>
                        <span className={classes.EmailName}>Your email address: <span>{email}</span></span>
                        <NavLink className={classes.TestBtn} to="/creating">Create a Test!</NavLink>
                    </div>
            </div>
        </div>
    )
})


const mapStateToProps = state => {
    return {
        email: state.auth.email
    };
};

export default connect( mapStateToProps, null ) (Profile);
