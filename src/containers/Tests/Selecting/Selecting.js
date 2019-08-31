import React, {Component} from 'react';
import { connect } from 'react-redux';

import classes from './Selecting.css';

import Dashboard from '../../../components/Dashboard/Dashboard';

import Spinner from '../../../components/UI/Spinner/Spinner';

import * as actions from '../../../store/actions/index';


class Selecting extends Component {

    componentDidMount() {
        this.props.onFetchTests(this.props.token);
    }

    fetchTestId = (event) => {
        this.props.onFetchTest(event.target.id, this.props.token);
    }
 
    render() {
        let dashboard = this.props.fetchedTests === undefined ? <Spinner /> : this.props.fetchedTests.map((el) => {
            return <Dashboard key={el.id} id={el.id} fetchTestId={this.fetchTestId} title={el.title} descr={el.descr} />
        });
        return (
            <React.Fragment>
                <div className={classes.SelectingWrap}>
                    <div className={classes.SelectingListWrap}>
                        {dashboard}
                    </div>
                </div>
            </React.Fragment>
        )
    }
} 

const mapStateToProps = state => {
    return {
        fetchedTests: state.tests.fetchedTests,
        token: state.auth.token,
        loading: state.tests.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchTests: (token) => dispatch(actions.fetchTests(token)),
        onFetchTest: (id, token) => dispatch(actions.fetchTest(id, token))
    };
};


export default connect( mapStateToProps, mapDispatchToProps ) (Selecting);
