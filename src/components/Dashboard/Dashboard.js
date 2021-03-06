import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from './Dashboard.css';

const dashboard = (props) => {
    return (
                <div className={classes.DashboardCell}>
                    <div className={classes.CellTitle}>
                        <h2 className={classes.CellTitleText}>{props.title}</h2>
                    </div>
                    <div className={classes.CellText}>
                        {props.descr}
                    </div>
                    <div className={classes.CellActions}>
                        <NavLink to="/completing" id={props.id} onClick={props.fetchTestId}>Complete the Test!</NavLink>
                    </div>
                </div>
    )
}


export default dashboard; 