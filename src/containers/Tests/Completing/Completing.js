import React, {useState} from 'react';
import { connect } from 'react-redux';

import { simpleCrypto } from '../../../funcs/utility';

import classes from './Completing.css';

import QuizzItem from '../../../components/Quizz/QuizzItem/QuizzItem';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

const Completing = React.memo(props => {

    const [quizz, setQuizz] = useState({});
    const [quizzResult, setQuizzResult] = useState(undefined);
    const [quizzDone, setQuizzDone] = useState(false);
    const [formIsValid, setFormIsValid] = useState(true);

    const handleQuizzes = ({target}) => {
        let cloneObj = Object.assign({}, quizz);

        const questionId = target.name.split(' ')[1]; // retrieving question`s id number from input`s name

        if ( typeof cloneObj[questionId] === "undefined" ) {
            cloneObj[questionId] = {}
        }

        cloneObj[questionId] = target.value;
        setQuizz(cloneObj)
    }

    const isFormValid = (obj, checkerObject = props.fetchedTest.testData) => {
        if (Object.keys(obj).length === checkerObject.length && typeof obj !== "undefined" && Object.keys(obj).length > 0) {
            return true;
        }
        else { return false }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formValid = isFormValid(quizz);

        if (formValid) {
            let rightAnswers = [];
            let wrongAnswers = [];
            for (let index in props.fetchedTest.testData) {
                const decryptedRightAnswer = simpleCrypto.decrypt(props.fetchedTest.testData[index].rightAnswer) // decrypting right answer to make it comparable
                if (decryptedRightAnswer === quizz[index]) {
                    rightAnswers.push(quizz[index]);
                }
                else {
                    wrongAnswers.push(quizz[index]);
                }
            }
            setQuizzResult(`Your result: ${rightAnswers.length} right and ${wrongAnswers.length} wrong answers out of ${props.fetchedTest.testData.length} questions`);
            setQuizzDone(true);
            setFormIsValid(true);
        }
        else {
            this.setState({formIsValid: false})
        }
        
    }


    let quizzItems = typeof props.fetchedTest === "undefined" ? null : props.fetchedTest.testData.map((el, i)=> ( // checking if the api is loaded
        <QuizzItem question={el.question} handleQuizzes={handleQuizzes} id={i} answers={el.answers} key={i}/>
    ))
    let form = (
        <form onSubmit={handleSubmit}>
            {quizzItems}
            <Button type='quizz'>Submit</Button>
        </form>
    )

    if (quizzDone) {
        form = (
            <div className={classes.QuizzDoneWrap}>
                    <span>{quizzResult}</span>
            </div>
        )
    }

    if ( props.loading ) {
        form = <Spinner />;
    }
    return (
        <React.Fragment>
            <div className={classes.CompletingPageWrap}>
            <ErrorMessage hidden={formIsValid}>Thq quizz is not completed!</ErrorMessage>
                <div className={classes.CompletingForm}>
                    <div className={classes.CompletingTitle}>
                        <h1>{props.fetchedTest ? props.fetchedTest.title : null}</h1>
                    </div>
                    <div className={classes.CompletingDescr}>
                        <p>{props.fetchedTest ? props.fetchedTest.descr : null}</p> 
                    </div>
                    {form}
                </div>
            </div>
        </React.Fragment>
        )
})


const mapStateToProps = state => {
    return {
        fetchedTest: state.tests.fetchedTest,
        loading: state.tests.loading
    }
};


export default connect( mapStateToProps, null ) (Completing);
