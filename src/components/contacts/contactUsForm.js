import React from 'react';
import {Field, reduxForm} from "redux-form";

let ContactUsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'name'}
                       placeholder={'Name'}
                       component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field name={'email'}
                       placeholder={'Email'}
                       component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field name={'subject'}
                       placeholder={'Subject'}
                       component={Input}
                       validate={[requiredField]}/>
                remember me
            </div>
            {props.error && <div className={styleFor.form_summary_error}>
                {props.error}
            </div>}
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
};

const ContactUsReduxForm = reduxForm({
    form: 'login'
})(ContactUsForm);

export default ContactUsReduxForm