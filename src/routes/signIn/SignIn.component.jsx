import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SingUpForm from "../../components/signUpForm/SingUpForm.component";

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
            <SingUpForm />
        </div>
    )
}

export default SignIn
