import React from "react";

import classes from './Main.css';

const Main = React.memo(props => { 
    const anchorStyles = "fa fa-book".concat(' ', classes.MainDescrFirstIcon)
    return (
        <React.Fragment>
            <header className={classes.MainHeader}>
                <h1 className={classes.MainHeaderH}>The history we remember</h1>
                <p className={classes.MainHeaderText}>An exercise for your intelligence</p>
            </header>
            <div className={classes.MainDescrFirstWrap}>
                <div className={classes.MainDescrFirstContent}>
                <div className={classes.MainDescrFirstDiv}>
                    <h1>Purpose?</h1>
                    <h5>Wouldn`t it be great, if we all could be more aware of the days of the past? If you are that kind of a person, who is constantly eager to get at least a bit more familiar with your ancestors, you will definitly find this app funny!</h5>
                </div>
            
                <div className={classes.MainDescrFirstIconDiv}>
                    <i className={anchorStyles}></i>
                </div>
                </div>
            </div>
            <div className={classes.FeaturesSection}>
                <div className={classes.FeaturesHeaderSection}>
                <h2>About</h2>
                <p>A few reasons of why you should defenetly check this out</p>
                </div>
                <div className={classes.FeaturesContainer}>
                <div className={classes.Features}>
                        <div className={classes.FeaturesItem}>
                            <div className={classes.FeaturesIcon}></div>
                                <h2>Clashes</h2>
                                    <p>
                                        Get acquainted with the most notorious battles of all time
                                    </p>
                        </div>
                        <div className={classes.FeaturesItem}>
                            <div className={classes.FeaturesIcon}></div>
                                <h2>House of Knowledge</h2>
                                    <p>
                                        Fill your capacity of history knowledges to the core
                                    </p>
                        </div>
                        <div className={classes.FeaturesItem}>
                            <div className={classes.FeaturesIcon}></div>
                                <h2>Judge of Art</h2>
                                    <p>
                                        Become an expert
                                    </p>
                        </div>
                        <div className={classes.FeaturesItem}>
                            <div className={classes.FeaturesIcon}></div>
                                <h2>Adventures</h2>
                                    <p>
                                        Learn history through enjoying the quizze  
                                    </p>
                        </div>
                    </div>
                </div>  
            </div>
        </React.Fragment>
    )
})

export default Main;