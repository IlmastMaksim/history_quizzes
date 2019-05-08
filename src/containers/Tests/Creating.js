import React, {Component} from 'react';
//import { connect } from 'react-redux';

import CreatingPage from './CreatingPage/CreatingPage';
import Aux from '../../hoc/Aux/Aux';


class Creating extends Component {
    render() {
        return (
            <Aux>
                <CreatingPage />
            </Aux>
        )
    }
} 


export default Creating;
