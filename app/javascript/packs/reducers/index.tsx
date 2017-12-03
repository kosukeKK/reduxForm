import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const userForm = (state = {}, action: any) => {
    switch (action.type) {
        case 'ADD_USER':
            return state;
        default:
            return state;
    }
};

const reducer = combineReducers({ userForm, form: formReducer });
export default reducer;

