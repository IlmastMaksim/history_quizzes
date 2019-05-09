import React from 'react';

import classes from './FormEl.css';

const formEl = (props) => (
    
        <div>
            <div className={classes.QuestionDiv} style={{marginTop: '4em', marginBottom: '2em'}}>
                <input type='text' placeholder='Type the question here' />
            </div>
            <div className={classes.AnswersDiv} style={{display:'flex', justifyContent: 'space-evenly', marginBottom: '2em'}}>
                <input type='text' placeholder='Answer 1'/>
                <input type='text' placeholder='Answer 2'/> 
                <input type='text' placeholder='Answer 3' />
            </div>
            <select defaultValue="Right Answer №" className={classes.FormSelectRightAnswer}>
                <option disabled defaultValue>Right Answer №</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
        </div>
    
)

export default formEl