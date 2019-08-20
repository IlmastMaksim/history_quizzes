import React from 'react';

import classes from './Question.css';


const question = (props) => {
    const answers = Array
                    .from({length: Number(props.numberOfA)}, (_, i) => i+1)
                    .map(el => {
                        return <input key={Number(el)} id={Number(el - 1)} onChange={props.handleQuestions} type='text' name={`answerquestion` + (Number(props.id - 1))} placeholder={`Answer №` + (el)}/>
                    })

    const rightAnswers = Array
                        .from({length: Number(props.numberOfA)}, (_, i) => i+1)
                        .map(el => {
                            return <option key={el} value={(Number(el))}>{(el)}</option>
                        })

    return (
        <div>
            <div className={classes.QuestionDiv}>
                <input type='text' name={`question` + (Number(props.id -1))} onChange={props.handleQuestions} placeholder='Type the question here' />
            </div>
            <div className={classes.AnswersDiv}>
                {answers}
            </div>
            <select className={classes.FormSelectRightAnswer} defaultValue="Right Answer №" onChange={props.handleQuestions}  name={`rightquestion` + (Number(props.id - 1))}>
                <option disabled defaultValue>Right Answer №</option>
                {rightAnswers}
            </select>
        </div>
    )
}

export default question