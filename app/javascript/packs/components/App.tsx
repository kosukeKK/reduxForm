import * as React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/Form';
//import { addUser } from '../actions'
import axios from 'axios';
const App = (that: any) => (
    <div>
        hello
        <ContactForm onSubmit={(e) => submitData(that.dispatch, e)} />
    </div>
);

const submitData = (dispatch: any, res: any) => {
    axios.post('url', res)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
    dispatch({ type: 'ADD_USER', res });
};

const mapStateToProps = (state: number) => {
    return { state };
};
export default connect(mapStateToProps)(App);


// axios.get('https://jsonplaceholder.typicode.com/comments').then((r) => (
//     console.log(r)
// )).catch((e) => (
//     console.error(e)
// ));
