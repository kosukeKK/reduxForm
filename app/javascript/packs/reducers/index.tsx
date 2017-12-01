import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const initialState = 'sample';

const sample = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};

const reducer = combineReducers({ sample, form: formReducer });
export default createStore(reducer);
