import React from 'react';

//import classes from './QuizzItem.css';
const quizzItem = (props) => {

    
    const answers = props.answers.map((el, i) => {
        return <span key={i}><input type='radio' onChange={props.handleQuizzes} value={(i+1)} name={'answertoquestion'.concat(' ', props.id)}/>{el}</span>
    })


    return (
        <div>
            <div style={{marginTop: '4em', marginBottom: '2em'}}>
                <span>{props.question}</span>
            </div>
            <div style={{display:'flex', justifyContent: 'space-evenly', marginBottom: '2em', marginTop: '2em'}}>
                {answers}
            </div>
        </div>


    )
}


export default quizzItem;