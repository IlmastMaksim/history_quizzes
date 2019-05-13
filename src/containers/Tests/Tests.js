import React, {Component} from 'react';
import { connect } from 'react-redux';

import classes from './Tests.css';

import TestsCell from './TestsCell/TestsCell';
import Aux from '../../hoc/Aux/Aux';

import Spinner from '../../components/UI/Spinner/Spinner';

import * as actions from '../../store/actions/index';


class Tests extends Component {

    componentDidMount() {
            this.props.onFetchTests();
    }
 
    render() {
        let testsCells = this.props.fetchedTests === undefined ? <Spinner /> : this.props.fetchedTests.map((el) => {
            return <TestsCell key={el.id} title={el.testData.title} descr={el.testData.descr} />
        });
        return (
            <Aux>
                <div className={classes.TestsPageWrap}>
                    <div className={classes.TestsPageListWrap}>
                        {testsCells}
                    </div>
                </div>
            </Aux>
        )
    }
} 

const mapStateToProps = state => {
    return {
        fetchedTests: state.tests.fetchedTests,
        loading: state.tests.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchTests: () => dispatch(actions.fetchTests())
    };
};


export default connect( mapStateToProps, mapDispatchToProps ) (Tests);
