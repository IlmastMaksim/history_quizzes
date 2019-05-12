import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import TestButton from '../../components/UI/TestButton/TestButton';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import classes from './Creating.css'
import * as actions from '../../store/actions/index';


class Creating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testForm: {
                title: {
                    elementType: 'titleInput',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Test title'
                    },
                    classes: classes.TitleInput,
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                descr: {
                    elementType: 'descrTextarea',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Test description'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                question1: {
                    elementType: 'question',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Question 1'
                    },
                    value: '',
                    valueAnswer1: '',
                    valueAnswer2: '',
                    valueAnswer3: '',
                    valueRightAnswer: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                question2: {
                    elementType: 'question',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Question 2'
                    },
                    value: '',
                    valueAnswer1: '',
                    valueAnswer2: '',
                    valueAnswer3: '',
                    valueRightAnswer: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                question3: {
                    elementType: 'question',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Question 3'
                    },
                    value: '',
                    valueAnswer1: '',
                    valueAnswer2: '',
                    valueAnswer3: '',
                    valueRightAnswer: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                question4: {
                    elementType: 'question',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Question 4'
                    },
                    value: '',
                    valueAnswer1: '',
                    valueAnswer2: '',
                    valueAnswer3: '',
                    valueRightAnswer: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                question5: {
                    elementType: 'question',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Question 5'
                    },
                    value: '',
                    valueAnswer1: '',
                    valueAnswer2: '',
                    valueAnswer3: '',
                    valueRightAnswer: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
            },
            formIsValid: false
        }
    }

    testHandler = ( event ) => {
        event.preventDefault();
  
        const formData = {} ;
        for (let formElementIdentifier in this.state.testForm) {
            console.log(this.state.testForm[formElementIdentifier])
            if (this.state.testForm[formElementIdentifier].elementType === 'question') {
                formData[formElementIdentifier] = {
                    value: this.state.testForm[formElementIdentifier].value,
                    valueAnswer1: this.state.testForm[formElementIdentifier].valueAnswer1,
                    valueAnswer2: this.state.testForm[formElementIdentifier].valueAnswer2,
                    valueAnswer3: this.state.testForm[formElementIdentifier].valueAnswer3,
                    valueRightAnswer: this.state.testForm[formElementIdentifier].valueRightAnswer
                }
            }
            else {
                formData[formElementIdentifier] = this.state.testForm[formElementIdentifier].value;
            }
        }
        const test = {
            testData: formData,
            userId: this.props.userId
        }

        this.props.onTestCreator(test, this.props.token);
        
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

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.testForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        console.log(updatedFormElement) 
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({testForm: updatedOrderForm, formIsValid: formIsValid});
    }

    inputChangedHandlerAnswer1 = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.testForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.valueAnswer1 = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({testForm: updatedOrderForm, formIsValid: formIsValid});
    }

    inputChangedHandlerAnswer2 = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.testForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.valueAnswer2 = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({testForm: updatedOrderForm, formIsValid: formIsValid});
    }

    inputChangedHandlerAnswer3 = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.testForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.valueAnswer3 = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({testForm: updatedOrderForm, formIsValid: formIsValid});
    }

    inputChangedHandlerRightAnswer = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.testForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.valueRightAnswer = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({testForm: updatedOrderForm, formIsValid: formIsValid});
    }


    render () {
        const formElementsArray = [];
        for (let key in this.state.testForm) {
            formElementsArray.push({
                id: key,
                config: this.state.testForm[key]
            });
        }
        const sentRedirect = this.props.testSent ? <Redirect to="/"/> : null;
        let form = (
            <form onSubmit={this.testHandler}>
            {sentRedirect}
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        changedAnswer1={(event) => this.inputChangedHandlerAnswer1(event, formElement.id)}
                        changedAnswer2={(event) => this.inputChangedHandlerAnswer2(event, formElement.id)}
                        changedAnswer3={(event) => this.inputChangedHandlerAnswer3(event, formElement.id)}
                        changedRightAnswer={(event) => this.inputChangedHandlerRightAnswer(event, formElement.id)} />
                ))}
                <TestButton disabled={!this.state.formIsValid}>Send</TestButton>
            </form>
        );
        if ( this.props.loading ) {
            form = <Spinner />;
        }
        return (
            <div className={classes.CreatingPageWrap}>
                <div className={classes.CreatingForm}>
                    {form}
                </div>
            </div>
        );
    }
    
} 

const mapStateToProps = state => {
    return {
        loading: state.tests.loading,
        token: state.auth.token,
        userId: state.auth.userId,
        testSent: state.tests.testSent
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTestCreator: (testData, token) => dispatch(actions.testCreator(testData, token))
    };
};


export default connect( mapStateToProps, mapDispatchToProps ) (Creating);
