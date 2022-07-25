import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../button/Button.component";
import CartItem from "../cartItem/CartItem.component";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import "./cartDropdown.styles.scss";

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  const goToCheckOutHandler = useCallback(() => {
    navigate("/checkout");
  }, []);

  return (
    <div className="cart-dropdown-container" onMouseLeave={toggleIsCartOpen}>
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
