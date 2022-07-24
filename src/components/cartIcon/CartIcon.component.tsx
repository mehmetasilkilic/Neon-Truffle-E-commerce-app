import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

import { setIsCartOpen } from "../../store/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cartIcon.styles.scss";

const CartIcon = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div
      className="cart-icon-container"
      onMouseEnter={toggleIsCartOpen}
      onClick={goToCheckOutHandler}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
