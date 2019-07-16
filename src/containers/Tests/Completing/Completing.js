import React, {Component} from 'react';
import { connect } from 'react-redux';

import { simpleCrypto } from '../../../store/utility';

import classes from './Completing.css';

import QuizzItem from '../../../components/QuizzItem/QuizzItem';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Aux from '../../../hoc/Aux/Aux';


class Completing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quizz: {},
            quizzRes: undefined,
            quizzDone: false,
            formIsValid: true
        }
    }

    handleQuizzes = ({target}) => {
        let cloneObj = Object.assign({}, this.state.quizz);

        const questionId = target.name.split(' ')[1]; // retrieving question`s id number from input`s name

        if ( typeof cloneObj[questionId] === "undefined" ) {
            cloneObj[questionId] = {}
        }

        cloneObj[questionId] = target.value;

        this.setState({quizz: cloneObj})
    }

    isFormValid = (obj, checkerObject = this.props.fetchedTest.testData) => {
        if (Object.keys(obj).length === checkerObject.length && typeof obj !== "undefined" && Object.keys(obj).length > 0) {
            return true;
        }
        else { return false }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const formValid = this.isFormValid(this.state.quizz);

        if (formValid) {
            let rightAnswers = [];
            let wrongAnswers = [];
            for (let index in this.props.fetchedTest.testData) {
                const decryptedRightAnswer = simpleCrypto.decrypt(this.props.fetchedTest.testData[index].rightAnswer) // decrypting right answer to make it comparable
                if (decryptedRightAnswer === this.state.quizz[index]) {
                    rightAnswers.push(this.state.quizz[index]);
                }
                else {
                    wrongAnswers.push(this.state.quizz[index]);
                }
            }
            this.setState({quizzRes: `Your result: ${rightAnswers.length} right and ${wrongAnswers.length} wrong answers out of ${this.props.fetchedTest.testData.length} questions`, quizzDone: true});
        }
        else {
            this.setState({formIsValid: false})
        }
        
    }

    render() {
        let quizzItems = typeof this.props.fetchedTest === "undefined" ? null : this.props.fetchedTest.testData.map((el, i)=> ( // checking if the api is loaded
            <QuizzItem question={el.question} handleQuizzes={this.handleQuizzes} id={i} answers={el.answers} key={i}/>
        ))
        let form = (
            <form onSubmit={this.handleSubmit}>
                {quizzItems}
                <Button type='quizz'>Submit</Button>
            </form>
        )

        if (this.state.quizzDone) {
            form = (
                <div className={classes.QuizzDoneWrap}>
                        <span>{this.state.quizzRes}</span>
                </div>
            )
        }

        if ( this.props.loading ) {
            form = <Spinner />;
        }
        return (
            <Aux>
                <div className={classes.CompletingPageWrap}>
                <ErrorMessage hidden={this.state.formIsValid}>Thq quizz is not completed!</ErrorMessage>
                    <div className={classes.CompletingForm}>
                        <div className={classes.CompletingTitle}>
                            <h1>{this.props.fetchedTest ? this.props.fetchedTest.title : null}</h1>
                        </div>
                        <div className={classes.CompletingDescr}>
                            <p>{this.props.fetchedTest ? this.props.fetchedTest.descr : null}</p> 
                        </div>
                        {form}
                    </div>
                </div>
            </Aux>
        )
    }
} 


const mapStateToProps = state => {
    return {
        fetchedTest: state.tests.fetchedTest,
        loading: state.tests.loading
    }
};


export default connect( mapStateToProps, null ) (Completing);
