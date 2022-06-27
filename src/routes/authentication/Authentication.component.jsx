import './authentication.styles.scss';

import SingInForm from "../../components/signInForm/SingInForm.component";
import SingUpForm from "../../components/signUpForm/SingUpForm.component";

const Authentication = () => {
    return (
        <div className="authentication-container">
            <SingInForm />
            <SingUpForm />
        </div>
    )
}

export default Authentication
