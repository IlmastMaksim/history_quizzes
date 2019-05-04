import React from 'react';

import classes from "./Home.css";

const home = () => {
    const anchorStyles = "fa fa-book".concat(' ', classes.HomeDescrFirstIcon)
    return (
        <div>
            <header className={classes.HomeHeader}>
                <h1 className={classes.HomeHeaderH}>The history we remember</h1>
                <p className={classes.HomeHeaderText}>An exercise for your intellegence</p>
            </header>
            <div className={classes.HomeDescrFirstWrap}>
                <div className={classes.HomeDescrFirstContent}>
                <div className={classes.HomeDescrFirstDiv}>
                    <h1>Purpose?</h1>
                    <h5>Wouldn`t it be great, if we all could be more aware of the days of the past? If you are that kind of a person, who is constantly eager to get at least a bit more familiar with your ancestors, you will definitly find this app funny!</h5>
                </div>
            
                <div className={classes.HomeDescrFirstIconDiv}>
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
                                        Learn history though enjoying the quizze  
                                    </p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default home;