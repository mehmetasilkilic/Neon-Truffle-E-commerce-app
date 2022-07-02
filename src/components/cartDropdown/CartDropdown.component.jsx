import Button from "../button/Button.component";

import "./cartDropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button />
    </div>
  );
};

export default CartDropdown;
