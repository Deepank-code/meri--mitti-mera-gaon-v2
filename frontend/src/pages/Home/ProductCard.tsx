import { FaBasketShopping } from "react-icons/fa6";
import "./ProductCard.css";

import { BiHeart } from "react-icons/bi";

type ProductPropType = {
  productID: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const ProductCard = ({
  // productID,
  photo,
  name,
  price,
  stock,
  handler,
}: ProductPropType) => {
  return (
    <div className="productCard">
      <img
        src={`${import.meta.env.VITE_SERVER}${photo}`}
        width="200px"
        alt="meal.name"
      />

      <p>{name}</p>

      <span id="stock-span">{stock}</span>

      <span>₹ {price}</span>

      <button onClick={() => handler()}>
        Add To Cart <FaBasketShopping />
      </button>
      <span id="heart">
        <BiHeart size={28} />
      </span>
    </div>
  );
};

export default ProductCard;
