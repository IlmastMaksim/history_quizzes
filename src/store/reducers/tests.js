import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    tests: [],
    loading: false,
    purchased: false
};

const testCreatorStart = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const testCreatorSuccess = ( state, action ) => {
    const newTest = updateObject( action.testData, { id: action.testId } );
    return updateObject( state, {
        loading: false,
        tests: state.tests.concat( newTest )
    } );
};

const testCreatorFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.TEST_CREATOR_START: return testCreatorStart( state, action );
        case actionTypes.TEST_CREATOR_SUCCESS: return testCreatorSuccess( state, action )
        case actionTypes.TEST_CREATOR_FAIL: return testCreatorFail( state, action );
        default: return state;
    }
};

export default reducer;