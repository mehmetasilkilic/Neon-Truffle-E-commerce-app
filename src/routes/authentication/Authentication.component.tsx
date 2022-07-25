import SingInForm from "../../components/signInForm/SingInForm.component";
import SingUpForm from "../../components/signUpForm/SingUpForm.component";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SingInForm />
      <SingUpForm />
    </div>
  );
};

export default Authentication;
