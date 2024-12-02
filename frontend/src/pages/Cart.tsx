import {  useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productID: "asdff",
    photo:
      "https://img.freepik.com/free-photo/photo-red-fresh-tomato-blank-background_125540-4260.jpg?size=626&ext=jpg&ga=GA1.1.1824858138.1725949183&semt=ais_hybrid",
    name: "Tomato",
    price: 3000,
    quantity: 4,
    stock: 10,
  },
  {
    productID: "asdff",
    photo:
      "https://img.freepik.com/free-photo/photo-red-fresh-tomato-blank-background_125540-4260.jpg?size=626&ext=jpg&ga=GA1.1.1824858138.1725949183&semt=ais_hybrid",
    name: "Tomato",
    price: 3000,
    quantity: 4,
    stock: 10,
  },
];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingChargers = 200;
const discount = 400;
const total = subTotal + tax + shippingChargers;
const Cart = () => {
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
        <p>Shipping charges: ₹{shippingChargers}</p>
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
