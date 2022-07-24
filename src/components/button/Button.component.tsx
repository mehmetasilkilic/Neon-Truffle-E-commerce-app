import { FC, ButtonHTMLAttributes } from "react";

import "./button.styles.scss";

export type ButtonProps = {
  buttonType?: string;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  isLoading,
  buttonType,
  ...otherProps
}) => {
  return (
    <button
      disabled={isLoading}
      className={`button-container ${buttonType || ""}`}
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
