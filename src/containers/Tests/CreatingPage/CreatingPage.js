import React from 'react';

import classes from './CreatingPage.css';

import FormEl from '../../../components/UI/FormEl/FormEl';

const creatingPage = (props) => {
    const fillArray = (start, end) => ( Array(end - start + 1).fill().map((_, i) => start + i) )
    let questionForms = [];
    if (typeof props.amountOfQuestions !== 'undefined') { questionForms = fillArray(0, props.amountOfQuestions - 1) }
    return (
        <div className={classes.CreatingPageWrap}>
            <div className={classes.CreatingForm}>
                <form>
                        <div className={classes.TitleDiv} style={{ marginBottom: '2em'}}>
                            <input type='text' placeholder='Test title' />
                        </div>
                        <div className={classes.DescrDiv} style={{marginBottom: '2em'}}>
                            <textarea type='text' placeholder='Test description' />
                        </div>
                        <select defaultValue="Number of Questions" className={classes.FormSelectQuestionsNumber} onChange={props.handleAmountOfQuestionState}>
                            <option disabled defaultValue>Number of Questions</option>
                            <option value='5'>5</option>
                            <option value='10'>10</option>
                            <option value='15'>15</option>
                        </select>
                        {/* Place for questions starts here */}
                            {questionForms.map((el) => (
                            <FormEl key={el} />)
                            ) }
                        {/* Place for questions ends here */}
                        <div>
                            <button type='submit' className={classes.SubmitButton}>Submit</button>
                        </div>
                </form>
            </div>
        </div>
    )
}


export default creatingPage; 