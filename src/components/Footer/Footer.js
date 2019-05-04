import React from 'react';

import classes from './Footer.css';

const footer = () => {
    return (
        <div className={classes.FooterWrap}>
            <p className={classes.FooterAuthor}>Made with passion for history and our legacy by <a href='https://github.com/IlmastMaksim' target='__blank'>Maksim Ilmast</a></p>
        </div>
    );
}

export default footer;