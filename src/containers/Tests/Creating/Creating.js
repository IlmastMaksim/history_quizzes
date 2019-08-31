import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { simpleCrypto } from '../../../funcs/utility';

import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import Question from '../../../components/Question/Question';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './Creating.css'
import * as actions from '../../../store/actions/index';

const Creating = React.memo(props => {

    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');
    const [numberOfQ, setNumberOfQ] = useState(null);
    const [numberOfA, setNumberOfA] = useState(null);
    const [questions, setQuestions] = useState({});
    const [formIsValid, setFormIsValid] = useState(true);
    const [testSent, setTestSent] = useState(false);

    const handleQuestions = ({target}) => {
        // handling form filling 
        let cloneObj = Object.assign({}, questions);
        let questionNumber;
        let questionName;

        if (target.name.includes('answerquestion')) {
            questionNumber = target.name.replace('answerquestion', '');
            questionName = 'answers'
        }
        else if (target.name.includes('rightanswerquestion')) {
            questionNumber = target.name.replace('rightquestion', '');
            questionName = 'rightAnswer'
        }
        else {
            questionNumber = target.name.replace('question', '');
            questionName = 'question';
        }


        if ( typeof cloneObj[questionNumber] === "undefined" ) {
            cloneObj[questionNumber] = {}
        }

        if (typeof cloneObj[questionNumber][questionName] === "undefined") {
            cloneObj[questionNumber][questionName] = {}
        }

        switch (questionName) {
            case 'answers':
                cloneObj[questionNumber][questionName][target.id] = target.value
                break;
            case 'rightAnswer':
                const encryptedRightAnswer = simpleCrypto.encrypt(target.value);
                cloneObj[questionNumber][questionName] = encryptedRightAnswer;
                break;
            default:
                cloneObj[questionNumber][questionName] = target.value;
        }
        setQuestions(cloneObj);
    };

    const isFormValid = (obj) => {
        if (Object.keys(obj).length === Number(numberOfQ) && typeof obj !== "undefined" && Object.keys(obj).length > 0 && title.length > 0 && descr.length > 0) {
            for (let key in obj) {
                const testCell = obj[key];
                if (Object.keys(testCell).length < 3) { // 3 keys - [ question, answers, rightAnswer ]
                    return false
                }
            }
        }
        else { return false }
        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formValidated = isFormValid(questions);
        if (formValidated) {
            let testToBeSent = {
                title: title,
                descr: descr,
                testData: questions,
                userId: props.userId
            }
            props.onTestSubmission(testToBeSent, props.token);
            setTestSent(true)
        }
        else {
            setFormIsValid(false)
        }
    }


    const numbersOfQuestions = [5, 10, 15, 20, 25, 30]; // numbers of questions
    const numberOfQuestions = numbersOfQuestions.map((el, i) => (
        <option value={el} key={i} >{el}</option>
    ));

    const numbersOfAmounts = [2, 3, 4, 5, 6]; // numbers of answers to the above mentioned questions
    const numberOfAmounts = numbersOfAmounts.map((el, i) => (
        <option value={el} key={i} >{el}</option>
    ));

    let questionsForQuizz = [];

    questionsForQuizz = Array
                .from({length: Number(numberOfQ)}, (_, i) => i+1)
                .map(el => {
                    return <Question handleQuestions={handleQuestions} id={el} key={el} numberOfA={numberOfA}/>
                })


    const sentRedirect = testSent ? <Redirect to="/"/> : null;
    let form = (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
            {sentRedirect}
            <input 
                className={classes.CreatingTitleInput}
                name="title"
                placeholder="Type the title here"
                value={title}
                onChange={event => {setTitle(event.target.value)}}
            />
            <textarea
                className={classes.CreatingDescrTextarea}
                name="descr"
                placeholder="Type the desciption here"
                value={descr}
                onChange={event => {setDescr(event.target.value)}}
            />
            <div className={classes.CreatingQuestionSelectDiv}>
                <select className={classes.CreatingQuestionsSelectInput} defaultValue="Number of Questions" name='numberOfQ' onChange={event => {setNumberOfQ(event.target.value)}} >
                    <option disabled defaultValue>Number of Questions</option>
                    {numberOfQuestions}
                </select>
                <select className={classes.CreatingQuestionsSelectInput} defaultValue="Number of Answers" name='numberOfA' onChange={event => {setNumberOfA(event.target.value)}} >
                    <option disabled defaultValue>Number of Answers</option>
                    {numberOfAmounts}
                </select>
            </div>
            {questionsForQuizz}
            <Button type='quizz'>Submit</Button>
        </form>
    )

    if ( props.loading ) {
        form = <Spinner />;
    }
    
    return (
        <div className={classes.CreatingPageWrap}>
            <ErrorMessage hidden={formIsValid}>Please, fill all the inputs!</ErrorMessage>
            <div className={classes.CreatingForm}>
                {form}
            </div>
        </div>
    )
})

const mapStateToProps = state => {
    return {
        loading: state.tests.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTestSubmission: (testData, token) => dispatch(actions.testCreator(testData, token))
    };
};


export default connect( mapStateToProps, mapDispatchToProps ) (Creating);