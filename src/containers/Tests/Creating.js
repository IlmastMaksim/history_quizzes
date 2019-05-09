import React, {Component} from 'react';
//import { connect } from 'react-redux';

import CreatingPage from './CreatingPage/CreatingPage';
import Aux from '../../hoc/Aux/Aux';


class Creating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amountOfQuestions: undefined
        }
    }

    handleAmountOfQuestionState = (event) => {
        this.setState({amountOfQuestions: event.target.value});
    }


    render() {
        return (
            <Aux>
                <CreatingPage
                    handleAmountOfQuestionState={this.handleAmountOfQuestionState}
                    amountOfQuestions={this.state.amountOfQuestions}
                />
            </Aux>
        )
    }
} 


export default Creating;
