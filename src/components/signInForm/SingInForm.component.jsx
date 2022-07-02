import { useState } from "react";

import { signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import FormInput from "../formInput/FormInput.component";
import Button from '../button/Button.component';

import './singInForm.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SingInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;
    const handleChange = e => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('Incorrect email');
                    break;
                default:
                    console.log(err);
            }
        }
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sing in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" name="email" value={email} onChange={handleChange} required />
                <FormInput label="Password" type="password" name="password" value={password} onChange={handleChange} required />
                <div className='buttons-container'>
                    <Button type="submit">Sign in</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign in</Button>
                </div>
            </form>
        </div>
    );
};

export default SingInForm;
