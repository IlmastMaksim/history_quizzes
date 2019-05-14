import React, {Component} from 'react';
import { connect } from 'react-redux';

import classes from './Completing.css';

import Input from '../../components/UI/Input/Input';
import TestButton from '../../components/UI/TestButton/TestButton';
import Aux from '../../hoc/Aux/Aux';


class Completing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testForm: {
                question1: {
                    elementType: 'question/anwser',
                    valueAnswer1: '',
                    valueAnswer2: '',
                    valueAnswer3: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                question2: {
                    elementType: 'question/anwser',
                    valueAnswer1: '',
                    valueAnswer2: '',
                    valueAnswer3: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                question3: {
                    elementType: 'question/anwser',
                    valueAnswer1: '',
                    valueAnswer2: '',
                    valueAnswer3: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                question4: {
                    elementType: 'question/anwser',
                    valueAnswer1: '',
                    valueAnswer2: '',
                    valueAnswer3: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                question5: {
                    elementType: 'question/anwser',
                    valueAnswer1: '',
                    valueAnswer2: '',
                    valueAnswer3: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                }
            },
            formIsValid: false,
            finalResult: undefined,
            testDone: false
        }
    }

    checkHandler = (event) => {
        event.preventDefault();
        let answers = [];
        for (let stateCell in this.state.testForm) {
            Object.entries(this.state.testForm[stateCell]).map((el) => {
                if (el[0].slice(-1) === this.props.fetchedTest[0].testData[stateCell].valueRightAnswer) {
                    answers.push(el)
                }
                return true;
            }) 
        }
        let newAnswers = answers.map(el => {
            let arr = [];
            for (let item of el) {
                 if (typeof item === 'boolean') {
                    arr.push(item);
                 }
            }
            return arr;
        })
        let updatedAnswers = [];
        for (let item of newAnswers) {
            updatedAnswers.push(item[0])
        }
        const rightAnswers = updatedAnswers.filter((el)=> {
            return el === true;
        })
        this.setState({finalResult: `You score is ${rightAnswers.length} out of ${updatedAnswers.length}`, testDone: true});
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value !== '' && isValid;
        }
        return isValid;
    }

    inputChangedHandlerAnswer1 = (inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.testForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.valueAnswer1 = true;
        updatedFormElement.valueAnswer2 = false;
        updatedFormElement.valueAnswer3 = false;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({testForm: updatedOrderForm, formIsValid: formIsValid});
    }

    inputChangedHandlerAnswer2 = (inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.testForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.valueAnswer1 = false;
        updatedFormElement.valueAnswer2 = true;
        updatedFormElement.valueAnswer3 = false;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({testForm: updatedOrderForm, formIsValid: formIsValid});
    }

    inputChangedHandlerAnswer3 = (inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.testForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.valueAnswer1 = false;
        updatedFormElement.valueAnswer2 = false;
        updatedFormElement.valueAnswer3 = true;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({testForm: updatedOrderForm, formIsValid: formIsValid});
    }
    

    render() {
        const formElementsArray = [];
        for (let key in this.state.testForm) {
            formElementsArray.push({
                id: key,
                config: this.state.testForm[key]
            });
        }
        let e = 1;
        let form = (
            <form onSubmit={this.checkHandler}>
                {formElementsArray.map((formElement) => (
                    <Input
                        questions={this.props.fetchedTest ? this.props.fetchedTest[0].testData['question' + e++] : null}
                        name={formElement.id}
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changedAnswer1={() => this.inputChangedHandlerAnswer1(formElement.id)}
                        changedAnswer2={() => this.inputChangedHandlerAnswer2(formElement.id)}
                        changedAnswer3={() => this.inputChangedHandlerAnswer3(formElement.id)} />
                ))}
                <TestButton disabled={!this.state.formIsValid}>Check</TestButton>
            </form>
        );
        if (this.state.testDone) {
            form = (
                <div className={classes.TestDoneWrap}>
                        <span>{this.state.finalResult}</span>
                </div>
            )
        }
        return (
            <Aux>
                <div className={classes.CompletingPageWrap}>
                    <div className={classes.CompletingForm}>
                        <div className={classes.CompletingTitle}>
                            <h1>{this.props.fetchedTest ? this.props.fetchedTest[0].testData.title : null}</h1>
                        </div>
                        <div className={classes.CompletingDescr}>
                            <p>{this.props.fetchedTest ? this.props.fetchedTest[0].testData.descr : null}</p> 
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
