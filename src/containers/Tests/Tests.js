import React, {Component} from 'react';
//import { connect } from 'react-redux';

import TestsPage from './TestsPage/TestsPage';
import Aux from '../../hoc/Aux/Aux';


class Tests extends Component {

    

    render() {
        return (
            <Aux>
                <TestsPage />
            </Aux>
        )
    }
} 


export default Tests;
