import * as actionTypes from './actionTypes';
import axios from 'axios';

export const testCreatorSuccess = ( id, testData ) => {
    return {
        type: actionTypes.TEST_CREATOR_SUCCESS,
        testId: id,
        testData: testData
    };
};

export const testCreatorFail = ( error ) => {
    return {
        type: actionTypes.TEST_CREATOR_FAIL,
        error: error
    };
}

export const testCreatorStart = () => {
    return {
        type: actionTypes.TEST_CREATOR_START
    };
};

export const testCreator = ( testData, token ) => {
    return dispatch => {
        dispatch( testCreatorStart() );
        axios.post( 'https://history-quizz.firebaseio.com/tests.json?auth=' + token, testData )
            .then( response => {
                dispatch( testCreatorSuccess( response.data.name, testData ) );
            } )
            .catch( error => {
                dispatch( testCreatorFail( error ) );
            } );
    };
};

export const fetchTestsSuccess = ( fetchedTests ) => {
    return {
        type: actionTypes.FETCH_TESTS_SUCCESS,
        fetchedTests: fetchedTests
    };
};

export const fetchTestsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_TESTS_FAIL,
        error: error
    };
}

export const fetchTestsStart = () => {
    return {
        type: actionTypes.FETCH_TESTS_START
    };
};

export const fetchTests = () => {
    return dispatch => {
        dispatch(fetchTestsStart());
        axios.get( 'https://history-quizz.firebaseio.com/tests.json?auth='.concat('DgZvq3wl98TWwmKcsI8UGwROCT4tXvk8w2FiBbWV'))
            .then( res => {
                const fetchedTests = [];
                for ( let key in res.data ) {
                    fetchedTests.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchTestsSuccess(fetchedTests));
            } )
            .catch( err => {
                dispatch(fetchTestsFail(err));
            } );
    };
};