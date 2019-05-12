import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    tests: [],
    loading: false,
    testSent: false,
    fetchedTests: undefined
};

const testCreatorStart = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const testCreatorSuccess = ( state, action ) => {
    const newTest = updateObject( action.testData, { id: action.testId } );
    return updateObject( state, {
        loading: false,
        tests: state.tests.concat( newTest ),
        testSent: true
    } );
};

const testCreatorFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchTestsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchTestsSuccess = ( state, action ) => {
    return updateObject( state, {
        fetchedTests: action.fetchedTests,
        loading: false
    } );
};

const fetchTestsStart= ( state, action ) => {
    return updateObject( state, { loading: false } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.TEST_CREATOR_START: return testCreatorStart( state, action );
        case actionTypes.TEST_CREATOR_SUCCESS: return testCreatorSuccess( state, action )
        case actionTypes.TEST_CREATOR_FAIL: return testCreatorFail( state, action );
        case actionTypes.FETCH_TESTS_START: return fetchTestsStart( state, action );
        case actionTypes.FETCH_TESTS_SUCCESS: return fetchTestsSuccess( state, action )
        case actionTypes.FETCH_TESTS_FAIL: return fetchTestsFail( state, action );
        default: return state;
    }
};

export default reducer;