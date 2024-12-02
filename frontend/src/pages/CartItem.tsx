import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

type CartItemProps = {
  cartItem: any;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const { productID, photo, name, price, quantity, stock } = cartItem;
  return (
    <div className="cart-item">
      <img src={photo} alt="" />
      <article>
        <Link to={`/product/${productID}`}>{name}</Link>
        <span>{price}</span>
      </article>
      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
      <button>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
