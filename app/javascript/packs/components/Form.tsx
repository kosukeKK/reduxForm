import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import validation from '../validate/formValidation';
const renderField = (that: any) => {
    const { input, type, label } = that;
    const { touched, error, warning } = that.meta;
    return (
        <div>
            <label>{label}</label>
            <input {...input} placeholder={label} type={type} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    );
};

let ContactForm = (that: any) => {
    return (
        <form onSubmit={that.handleSubmit}>
            <Field
                label='Name'
                name='name'
                component={renderField}
                validate={[validation.required, validation.maxLength15, validation.minLength2]}
                warn={[validation.required, validation.alphaNumeric]}
                type='text'
                placeholder='名前を入力'
            /><br />

            <Field
                label='E-mail'
                name='email'
                component={renderField}
                validate={[validation.required, validation.email]}
                warn={validation.aol}
                type='email'
                placeholder='Email'
            /><br />

            <label>
                <Field
                    name='sex'
                    checked='checked'
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
          </label><br />

            <label>Favorite Color</label>
            <Field name='favoriteColor' component='select'>
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
    let errors = { 'username': '' };
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }
    return errors;
};


export default reduxForm({
    form: 'ContactForm',
    validate,
})(ContactForm);


//バリデーション
// モデルに保存
// 送信したら全てクリア
