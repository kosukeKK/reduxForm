import * as React from 'react';
import { Field, reduxForm } from 'redux-form';


let ContactForm = (that: any) => {
    return (
        <form onSubmit={that.handleSubmit}>
            <label>name</label>
            <Field
                name='name'
                component='input'
                type='text'
                placeholder='名前を入力'
            /><br />

            <label>Email</label>
            <Field
                name='email'
                component='input'
                type='email'
                placeholder='Email'
            /><br />

            <label>
            <Field
              name='sex'
              component='input'
              type='radio'
              value='male'
            />{' '}
            Male
          </label>

          <label>
            <Field
              name='sex'
              component='input'
              type='radio'
              value='female'
            />{' '}
            Female
          </label>

          <label>Favorite Color</label>
          <Field name='favoriteColor' component='select'>
            <option />
            <option value='ff0000'>Red</option>
            <option value='00ff00'>Green</option>
            <option value='0000ff'>Blue</option>
          </Field><br />

          <label htmlFor='employed'>Employed</label>
          <Field
            name='employed'
            id='employed'
            component='input'
            type='checkbox'
          />
          <br />
            <button type='submit' disabled={that.pristine || that.submitting}>送信</ button>
        </form>
    );
};

const validate = (values: any) => {
    let errors = {'username': ''};
    if (!values.username) {
        errors.username = 'Required';
      } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
      }
      console.log(values);
    return errors;
};


export default reduxForm({
    form: 'ContactForm',
    validate,
})(ContactForm);



//         <form onSubmit={that.handleSubmit}>
//             <Field
//                 name='name'
//                 component='input'
//                 type='text'
//                 placeholder='名前を入力'
//             />
//         </form>
