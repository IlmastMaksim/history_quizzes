import React, {Component} from 'react';
import { connect } from 'react-redux';

import classes from './Selecting.css';

import Dashboard from '../../../components/Dashboard/Dashboard';
import Aux from '../../../hoc/Aux/Aux';

import Spinner from '../../../components/UI/Spinner/Spinner';

import * as actions from '../../../store/actions/index';


class Selecting extends Component {

    componentDidMount() {
        this.props.onFetchTests();
    }

    fetchTestId = (event) => {
        this.props.onFetchTest(event.target.id);
    }
 
    render() {
        let dashboard = this.props.fetchedTests === undefined ? <Spinner /> : this.props.fetchedTests.map((el) => {
            return <Dashboard key={el.id} id={el.id} fetchTestId={this.fetchTestId} title={el.title} descr={el.descr} />
        });
        return (
            <Aux>
                <div className={classes.SelectingWrap}>
                    <div className={classes.SelectingListWrap}>
                        {dashboard}
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
        onFetchTests: () => dispatch(actions.fetchTests()),
        onFetchTest: (id) => dispatch(actions.fetchTest(id))
    };
};


export default connect( mapStateToProps, mapDispatchToProps ) (Selecting);
