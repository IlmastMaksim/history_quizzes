import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { simpleCrypto } from '../../../funcs/utility';

import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import Question from '../../../components/Question/Question';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './Creating.css'
import * as actions from '../../../store/actions/index';

class Creating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            descr: '',
            numberOfQ: null,
            numberOfA: null,
            questions: {},
            formIsValid: true,
            testSent: false
        }
    }

    handleInputs = ({target}) => {
        this.setState({[target.name]: target.value});
    };

    handleQuestions = ({target}) => {
        // handling form filling 
        let cloneObj = Object.assign({}, this.state.questions);
        let questionNumber;
        let questionElName;

        if (target.name.includes('answer')) {
            questionNumber = target.name.replace('answerquestion', '');
            questionElName = 'answers'
        }
        else if (target.name.includes('right')) {
            questionNumber = target.name.replace('rightquestion', '');
            questionElName = 'rightAnswer'
        }
        else {
            questionNumber = target.name.replace('question', '');
            questionElName = 'question';
        }


        if ( typeof cloneObj[questionNumber] === "undefined" ) {
            cloneObj[questionNumber] = {}
        }

        if (typeof cloneObj[questionNumber][questionElName] === "undefined") {
            cloneObj[questionNumber][questionElName] = {}
        }

        
        if ( questionElName === 'answers' ) {
            cloneObj[questionNumber][questionElName][target.id] = target.value
        }
        else if ( questionElName === 'rightAnswer' ) {
            const encryptedRightAnswer = simpleCrypto.encrypt(target.value);
            cloneObj[questionNumber][questionElName] = encryptedRightAnswer;
        }
        else {
            cloneObj[questionNumber][questionElName] = target.value;
        }

        this.setState({questions: cloneObj});
    };

    isFormValid = (obj) => {
        if (Object.keys(obj).length === Number(this.state.numberOfQ) && typeof obj !== "undefined" && Object.keys(obj).length > 0 && this.state.title.length > 0 && this.state.descr.length > 0) {
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

    handleSubmit = (event) => {
        event.preventDefault();
        const formValidated = this.isFormValid(this.state.questions);
        if (formValidated) {
            let testToBeSent = {
                title: this.state.title,
                descr: this.state.descr,
                testData: this.state.questions,
                userId: this.props.userId
            }
            this.props.onTestSubmission(testToBeSent, this.props.token);
            this.setState({testSent: true}) 
        }
        else {
            this.setState({formIsValid: false});
        }
    }

    render() {
        const qValues = [5, 10, 15, 20, 25, 30]; // numbers of questions
        const numberQValues = qValues.map((el, i) => (
           <option value={el} key={i} >{el}</option>
        ));

        const aValues = [2, 3, 4, 5, 6]; // numbers of answers to the above mentioned questions
        const numberAValues = aValues.map((el, i) => (
            <option value={el} key={i} >{el}</option>
        ));

        let questions = [];

        questions = Array
                    .from({length: Number(this.state.numberOfQ)}, (_, i) => i+1)
                    .map(el => {
                        return <Question handleQuestions={this.handleQuestions} id={el} key={el} numberOfA={this.state.numberOfA}/>
                    })


        const sentRedirect = this.state.testSent ? <Redirect to="/"/> : null;
        let form = (
            <form onSubmit={this.handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                {sentRedirect}
                <input 
                    className={classes.CreatingTitleInput}
                    name="title"
                    placeholder="Type the title here"
                    value={this.state.title}
                    onChange={this.handleInputs}
                />
                <textarea
                    className={classes.CreatingDescrTextarea}
                    name="descr"
                    placeholder="Type the desciption here"
                    value={this.state.descr}
                    onChange={this.handleInputs}
                />
                <div className={classes.CreatingQuestionSelectDiv}>
                    <select className={classes.CreatingQuestionsSelectInput} defaultValue="Number of Questions" name='numberOfQ' onChange={this.handleInputs} >
                        <option disabled defaultValue>Number of Questions</option>
                        {numberQValues}
                    </select>
                    <select className={classes.CreatingQuestionsSelectInput} defaultValue="Number of Answers" name='numberOfA' onChange={this.handleInputs} >
                        <option disabled defaultValue>Number of Answers</option>
                        {numberAValues}
                    </select>
                </div>
                {questions}
                <Button type='quizz'>Submit</Button>
            </form>
        )

        if ( this.props.loading ) {
            form = <Spinner />;
        }
        
        return (
            <div className={classes.CreatingPageWrap}>
                <ErrorMessage hidden={this.state.formIsValid}>Please, fill all the inputs!</ErrorMessage>
                <div className={classes.CreatingForm}>
                    {form}
                </div>
            </div>
        )
    }
} 

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