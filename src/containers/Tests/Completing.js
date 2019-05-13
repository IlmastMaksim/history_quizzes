import React, {Component} from 'react';
//import { connect } from 'react-redux';

import classes from './Completing.css';

import Aux from '../../hoc/Aux/Aux';

//import * as actions from '../../store/actions/index';


class Completing extends Component {

    render() {
        return (
            <Aux>
                <div className={classes.CompletingPageWrap}>
                    <div className={classes.CompletingPageListWrap}>

                    </div>
                </div>
            </Aux>
        )
    }
} 



export default Completing;
