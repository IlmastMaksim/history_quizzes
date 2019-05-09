import React from 'react';

import classes from './CreatingPage.css';

const creatingPage = (props) => {
    return (
        <div className={classes.CreatingPageWrap}>
            <div className={classes.CreatingForm}>
                <form>
                        <select className={classes.FormSelectQuestionsNumber}>
                            <option disabled selected>Number of Questions</option>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                        </select>
                        <div className={classes.QuestionDiv} style={{marginTop: '4em', marginBottom: '2em'}}>
                            <input type='text' />
                        </div>
                        <div className={classes.AnswersDiv} style={{display:'flex', justifyContent: 'space-evenly', marginBottom: '1em'}}>
                            <input type='text' />
                            <input type='text' />
                            <input type='text' />
                        </div>
                        <select className={classes.FormSelectRightAnswer}>
                            <option disabled selected>Right Answer</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <div className={classes.QuestionDiv} style={{marginTop: '4em', marginBottom: '2em'}}>
                            <input type='text' />
                        </div>
                        <div className={classes.AnswersDiv} style={{display:'flex', justifyContent: 'space-evenly', marginBottom: '1em'}}>
                            <input type='text' />
                            <input type='text' />
                            <input type='text' />
                        </div>
                        <select className={classes.FormSelectRightAnswer}>
                            <option disabled selected>Right Answer</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <div className={classes.QuestionDiv} style={{marginTop: '4em', marginBottom: '2em'}}>
                            <input type='text' />
                        </div>
                        <div className={classes.AnswersDiv} style={{display:'flex', justifyContent: 'space-evenly', marginBottom: '1em'}}>
                            <input type='text' />
                            <input type='text' />
                            <input type='text' />
                        </div>
                        <select className={classes.FormSelectRightAnswer}>
                            <option disabled selected>Right Answer</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <div>
                            <button type='submit' className={classes.SubmitButton}>Submit</button>
                        </div>
                </form>
            </div>
        </div>
    )
}


export default creatingPage; 