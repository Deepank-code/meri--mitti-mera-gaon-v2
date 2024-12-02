import { ChangeEvent, useState } from "react";
import AdminSideBar from "../../../Components/AdminSideBar";
interface ProductType {
  name: string;
  price: number;
  stock: number;
  photo: string;
}
const img =
  "https://images.unsplash.com/photo-1504945005722-33670dcaf685?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhYmxlfGVufDB8fDB8fHww";
const ProductManagement = () => {
  const [product, setProduct] = useState<ProductType>({
    name: "puma",
    price: 2000,
    stock: 10,
    photo: img,
  });
  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader = new FileReader();
    console.log(reader);
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string")
          setProduct({ ...product, photo: reader.result });
      };
    }
  };
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSideBar />
      <main className="product-management">
        <section>
          <strong>ID -fdsg</strong>
          <img src={product.photo} alt="pro" />
          <p>{product.name}</p>
          <h2>₹{product.price}</h2>
          {product.stock > 0 ? (
            <span className="green">₹{product.stock} Available</span>
          ) : (
            <span className="red">Not available</span>
          )}
        </section>{" "}
        <article>
          <form>
            <h2>Update Product</h2>
            <div>
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                placeholder="name"
                value={product.name}
                id="name"
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                required
                type="number"
                placeholder="price"
                value={product.price}
                id="price"
                onChange={(e) =>
                  setProduct({ ...product, price: Number(e.target.value) })
                }
              />
            </div>
            <div>
              <label htmlFor="stock">stock</label>
              <input
                required
                type="number"
                placeholder="Stock"
                value={product.stock}
                id="stock"
                onChange={(e) =>
                  setProduct({ ...product, stock: Number(e.target.value) })
                }
              />
            </div>
            <div>
              <label htmlFor="photo">Photo</label>
              <input required type="file" onChange={changeImageHandler} />
            </div>
            {product.photo && <img src={product.photo} alt="new Image" />}

            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
