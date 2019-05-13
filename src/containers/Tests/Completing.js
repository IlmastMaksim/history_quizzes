import React, {Component} from 'react';
import { connect } from 'react-redux';

import classes from './Completing.css';

import Input from '../../components/UI/Input/Input';
import TestButton from '../../components/UI/TestButton/TestButton';
import Aux from '../../hoc/Aux/Aux';

//import * as actions from '../../store/actions/index';


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
            
            formIsValid: false
        }
    }

    checkHandler = (event) => {
        event.preventDefault();
  
        for (let stateCell in this.state.testForm) {
            console.log(this.state.testForm[stateCell])
        }
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        return isValid;
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.testForm) {
            formElementsArray.push({
                id: key,
                config: this.state.testForm[key]
            });
        }
        let title = this.props.fetchedTest ? this.props.fetchedTest[0].testData.title : null;
        let descr = this.props.fetchedTest ? this.props.fetchedTest[0].testData.descr : null
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
                        touched={formElement.config.touched} />
                ))}
                <TestButton>Check</TestButton>
            </form>
        );
        return (
            <Aux>
                <div className={classes.CompletingPageWrap}>
                    <div className={classes.CompletingForm}>
                        <div className={classes.CompletingTitle}>
                            <h1>{title}</h1>
                        </div>
                        <div className={classes.CompletingDescr}>
                            <p>{descr}</p> 
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
