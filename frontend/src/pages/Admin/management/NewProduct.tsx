import { ChangeEvent, useState } from "react";
import AdminSideBar from "../../../Components/AdminSideBar";
interface ProductType {
  name: string;
  price: number;
  stock: number;
  photo: string;
}
const NewProduct = () => {
  const [product, setProduct] = useState<ProductType>({
    name: "",
    price: 0,
    stock: 0,
    photo: "",
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
        <article>
          <form>
            <h2>New Product</h2>
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

            <button type="submit">Create Product</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProduct;
