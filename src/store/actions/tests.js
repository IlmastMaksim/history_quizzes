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
