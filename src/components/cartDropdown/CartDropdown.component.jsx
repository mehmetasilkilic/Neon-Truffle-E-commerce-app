import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import Button from "../button/Button.component";
import CartItem from "../cartItem/CartItem.component";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./cartDropdown.styles.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckOutHandler}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
