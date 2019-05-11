import React from 'react';

import classes from './Input.css';

const input = ( props ) => {
    let inputElement = null;
    const loginInputClasses = [classes.LoginInputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        loginInputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'loginInput' ):
            inputElement = <input
                className={loginInputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('titleInput'):
            inputElement = <input 
                className={classes.TitleInput}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'descrTextarea' ):
            inputElement = <textarea
                className={classes.DescrTextarea}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'question' ):
            inputElement = (
                <div>
                    <div className={classes.QuestionDiv} style={{marginTop: '4em', marginBottom: '2em'}}>
                        <input type='text' placeholder='Type the question here' value={props.value} onChange={props.changed}/>
                    </div>
                    <div className={classes.AnswersDiv} style={{display:'flex', justifyContent: 'space-evenly', marginBottom: '2em'}}>
                        <input type='text' placeholder='Answer 1' value={props.valueAnswer1}  onChange={props.changedAnswer1}/>
                        <input type='text' placeholder='Answer 2' value={props.valueAnswer2}  onChange={props.changedAnswer2}/> 
                        <input type='text' placeholder='Answer 3' value={props.valueAnswer3}  onChange={props.changedAnswer3}/>
                    </div>
                    <select defaultValue="Right Answer №" className={classes.FormSelectRightAnswer} onChange={props.changedRightAnswer}>
                        <option disabled defaultValue>Right Answer №</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                </div>
            )
            break;
        default:
            inputElement = <input
                className={loginInputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;