import * as React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/Form';

const App = () => {
    const submitData = (values: any) => {
        console.log(values);
    };
    return (
        <div>
            hello
            <ContactForm onSubmit={submitData} />
        </div>
    );
};

export default connect()(App);
