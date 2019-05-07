import React from 'react';


import classes from './TestsPage.css';

const testsPage = (props) => {
    return (
        <div className={classes.TestsPageWrap}>
            <div className={classes.TestsPageListWrap}>
                <div className={classes.TestsCell}>
                    <div className={classes.CellTitle}>
                        <h2 className={classes.CellTitleText}>How well do you know medival history?</h2>
                    </div>
                    <div className={classes.CellText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className={classes.CellActions}>
                        <a href="">Launch the Test!</a>
                        <span className={classes.CellTestAuthor}>Made by Michael Bay</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}


export default testsPage; 