import React from 'react';

import classes from "./Home.css";

const home = () => {
    const anchorStyles = "fa fa-cloud".concat(' ', classes.HomeDescrFirstIcon)
    return (
        <div>
            <header className={classes.HomeHeader}>
                <h1 className={classes.HomeHeaderH}>Home</h1>
                <p className={classes.HomeHeaderText}>A brief introduction</p>
            </header>
            <div className={classes.HomeDescrFirstWrap}>
                <div className={classes.HomeDescrFirstContent}>
                <div className={classes.HomeDescrFirstDiv}>
                    <h1>What is this app Home?</h1>
                    <h5>This app has a great functionality to observe and analyze harmful effects from the air pollution. The information you may obtain from here, could be used, for an instance, in referates etc.</h5>
                    <p>Rating component shows amounts of emissions in some particular year and could be calculated in absolute values or per capita. Changes component brings you a possibility of analyzing emissions for a certain period of time. Finally, you can compare pollution levels extracted by giant countries with emissions from smaller ones. Hopefully, this app could be able to make the world a little bit better place at least.</p>
                </div>
            
                <div className={classes.HomeDescrFirstIconDiv}>
                    <i className={anchorStyles}></i>
                </div>
                </div>
            </div>
            <div className={classes.FeaturesSection}>
                <div className={classes.FeaturesHeaderSection}>
                <h2>TTIC FAQ Home</h2>
                <p>A few aspects of why you should defenetly check out our service</p>
                </div>
                <div className={classes.FeaturesContainer}>
                <div className={classes.Features}>
                    <div className={classes.FeaturesItem}>
                        <div className={classes.FeaturesIcon}></div>
                            <h2>Problem solving</h2>
                                <p>
                                Great source of new knowledges
                                </p>
                    </div>
                    <div className={classes.FeaturesItem}>
                        <div className={classes.FeaturesIcon}></div>
                            <h2>Entertainment</h2>
                                <p>
                                    You will enjoy the process of gaining information
                                </p>
                    </div>
                    <div className={classes.FeaturesItem}>
                        <div className={classes.FeaturesIcon}></div>
                            <h2>Simplicity</h2>
                                <p>
                                    Made with care and love for newbees  
                                </p>
                    </div>
                    <div className={classes.FeaturesItem}>
                        <div className={classes.FeaturesIcon}></div>
                            <h2>Comfortability</h2>
                                <p>
                                Easy to manipulate
                                </p>
                    </div>
                    <div className={classes.FeaturesItem}>
                        <div className={classes.FeaturesIcon}></div>
                            <h2>Usability</h2>
                                <p>
                                    Can be used on different devices, from cell phone to pc
                                </p>
                    </div>
                    <div className={classes.FeaturesItem}>
                        <div className={classes.FeaturesIcon}></div>
                            <h2>Multilingualism</h2>
                            <p>
                                Answers might be given and found in multiple foreign langueges 
                            </p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default home;