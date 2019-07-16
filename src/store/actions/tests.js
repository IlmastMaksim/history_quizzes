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

export const fetchTests = (token) => {
    return dispatch => {
        dispatch(fetchTestsStart());
        axios.get( 'https://history-quizz.firebaseio.com/tests.json?auth='.concat('', token))
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

export const fetchTestSuccess = ( fetchedTest ) => {
    return {
        type: actionTypes.FETCH_TEST_SUCCESS,
        fetchedTest: fetchedTest
    };
};

export const fetchTestFail = ( error ) => {
    return {
        type: actionTypes.FETCH_TEST_FAIL,
        error: error
    };
}

export const fetchTestStart = () => {
    return {
        type: actionTypes.FETCH_TEST_START
    };
};

export const fetchTest = (id, token) => {
    return dispatch => {
        dispatch(fetchTestStart());
        axios.get( 'https://history-quizz.firebaseio.com/tests.json?auth='.concat('', token))
            .then( res => {
                const tests = [];
                for ( let key in res.data ) {
                    tests.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                const filteredTest = tests.filter((el) => ( el.id === id ))
                dispatch(fetchTestSuccess(filteredTest[0]));
            } )
            .catch( err => {
                dispatch(fetchTestFail(err));
            } );
    };
}