import { FC } from "react";

import { CartItem as TCartItem } from "../../store/cart/cart.types";

import "./cartItem.styles.scss";

type CartItemProp = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProp> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
