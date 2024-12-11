import { useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartReducerInitalStateType } from "../types/reducer-type";

const Cart = () => {
  const { cartItems, subTotal, tax, total, shippingCharges, discount } =
    useSelector(
      (state: { cartReducer: CartReducerInitalStateType }) => state.cartReducer
    );
  console.log(cartItems);

  const [couponCode, setCoupnCode] = useState<string>();
  const [isvalidCouponCode, setvalidCouponCode] = useState<boolean>();
  //   useEffect(() => {
  //     const timeOutId = setTimeout(() => {}, 1000);
  //   }, [couponCode]);
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, id) => <CartItem key={id} cartItem={i} />)
        ) : (
          <h1>No Items added</h1>
        )}
      </main>
      <aside>
        <p>SubTotal: ₹{subTotal}</p>
        <p>Shipping charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount -<em>{discount}</em>
        </p>
        <p>
          <b>Total: {total}</b>
        </p>
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCoupnCode(e.target.value)}
        />

        {couponCode &&
          (isvalidCouponCode ? (
            <span className="green">
              {discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              you have entered invalid Coupon code <VscError />
            </span>
          ))}
        {cartItems.length > 0 && <Link to="/shipping">CheckOut</Link>}
      </aside>
    </div>
  );
};

export default Cart;
