import "./button.styles.scss";

const buttonTypeClasses = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button
      disabled={isLoading}
      className={`button-container ${buttonTypeClasses[buttonType]}`}
      {...otherProps}
    >
      {isLoading ? (
        <div className="spinner-container"></div>
      ) : (
        <div>{children}</div>
      )}
    </button>
  );
};

export default Button;
