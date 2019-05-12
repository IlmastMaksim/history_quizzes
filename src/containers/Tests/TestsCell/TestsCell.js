import React from 'react';

import classes from './TestsCell.css';

const testsCell = (props) => {
    return (
                <div className={classes.TestsCell}>
                    <div className={classes.CellTitle}>
                        <h2 className={classes.CellTitleText}>{props.title}</h2>
                    </div>
                    <div className={classes.CellText}>
                        {props.descr}
                    </div>
                    <div className={classes.CellActions}>
                        <a href="/launching">Launch the Test!</a>
                        <span className={classes.CellTestAuthor}>Made by Michael Bay</span>
                    </div>
                </div>
    )
}


export default testsCell; 