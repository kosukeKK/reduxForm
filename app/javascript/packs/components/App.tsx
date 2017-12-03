import * as React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/Form';
//import { addUser } from '../actions'

const App = (that: any) => (
    <div>
        hello
        <ContactForm onSubmit={(e) => submitData(that.dispatch, e)} />
    </div>
);

const submitData = (dispatch: any, res: any) => {
    dispatch({ type: 'ADD_USER', res });
};

const mapStateToProps = (state: number) => {
    return { state };
};
export default connect(mapStateToProps)(App);
