import { ReactElement, useEffect, useState } from "react";
import AdminSideBar from "../../Components/AdminSideBar";
import TableHOC from "../../Components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useAllProductsQuery } from "../../redux/api/productApi";
import { server } from "../../redux/store";
import toast from "react-hot-toast";
import { CustomError } from "../../types/api-types";
import { UserReducerInitalStateType } from "../../types/user-type";
import { useSelector } from "react-redux";
import { Skleton } from "../../Components/Loader";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const arr: DataType[] = [
  {
    photo: (
      <img src="https://5.imimg.com/data5/EP/YS/MY-3966004/lady-fingers-500x500.jpg" />
    ),

    name: "ladyFinger",
    stock: 4344,
    price: 6546,
    action: <Link to="/admin/product/asdfasd">Manage</Link>,
  },
  {
    photo: (
      <img src="https://5.imimg.com/data5/EP/YS/MY-3966004/lady-fingers-500x500.jpg" />
    ),

    name: "ladyFinger",
    stock: 1344,
    price: 6546,
    action: <Link to="/admin/product/asdfasd">Manage</Link>,
  },
  {
    photo: (
      <img src="https://5.imimg.com/data5/EP/YS/MY-3966004/lady-fingers-500x500.jpg" />
    ),

    name: "ladyFinger",
    stock: 3544,
    price: 6546,
    action: <Link to="/admin/product/asdfasd">Manage</Link>,
  },
  {
    photo: (
      <img src="https://5.imimg.com/data5/EP/YS/MY-3966004/lady-fingers-500x500.jpg" />
    ),

    name: "ladyFinger",
    stock: 3544,
    price: 6546,
    action: <Link to="/admin/product/asdfasd">Manage</Link>,
  },
  {
    photo: (
      <img src="https://5.imimg.com/data5/EP/YS/MY-3966004/lady-fingers-500x500.jpg" />
    ),

    name: "ladyFinger",
    stock: 3544,
    price: 6546,
    action: <Link to="/admin/product/asdfasd">Manage</Link>,
  },
  {
    photo: (
      <img src="https://5.imimg.com/data5/EP/YS/MY-3966004/lady-fingers-500x500.jpg" />
    ),

    name: "ladyFinger",
    stock: 3544,
    price: 6546,
    action: <Link to="/admin/product/asdfasd">Manage</Link>,
  },
  {
    photo: (
      <img src="https://5.imimg.com/data5/EP/YS/MY-3966004/lady-fingers-500x500.jpg" />
    ),

    name: "ladyFinger",
    stock: 3544,
    price: 6546,
    action: <Link to="/admin/product/asdfasd">Manage</Link>,
  },
  {
    photo: (
      <img src="https://5.imimg.com/data5/EP/YS/MY-3966004/lady-fingers-500x500.jpg" />
    ),

    name: "ladyFinger",
    stock: 3544,
    price: 6546,
    action: <Link to="/admin/product/asdfasd">Manage</Link>,
  },
  {
    photo: (
      <img src="https://5.imimg.com/data5/EP/YS/MY-3966004/lady-fingers-500x500.jpg" />
    ),

    name: "ladyFinger",
    stock: 3544,
    price: 6546,
    action: <Link to="/admin/product/asdfasd">Manage</Link>,
  },
  {
    photo: (
      <img src="https://5.imimg.com/data5/EP/YS/MY-3966004/lady-fingers-500x500.jpg" />
    ),

    name: "ladyFinger",
    stock: 3544,
    price: 6546,
    action: <Link to="/admin/product/asdfasd">Manage</Link>,
  },
  {
    photo: (
      <img src="https://5.imimg.com/data5/EP/YS/MY-3966004/lady-fingers-500x500.jpg" />
    ),

    name: "ladyFinger",
    stock: 3544,
    price: 6546,
    action: <Link to="/admin/product/asdfasd">Manage</Link>,
  },
  {
    photo: (
      <img src="https://5.imimg.com/data5/EP/YS/MY-3966004/lady-fingers-500x500.jpg" />
    ),

    name: "ladyFinger",
    stock: 3544,
    price: 6546,
    action: <Link to="/admin/product/asdfasd">Manage</Link>,
  },
  {
    photo: (
      <img src="https://5.imimg.com/data5/EP/YS/MY-3966004/lady-fingers-500x500.jpg" />
    ),

    name: "ladyFinger",
    stock: 3544,
    price: 6546,
    action: <Link to="/admin/product/asdfasd">Manage</Link>,
  },
  {
    photo: (
      <img src="https://5.imimg.com/data5/EP/YS/MY-3966004/lady-fingers-500x500.jpg" />
    ),

    name: "ladyFinger",
    stock: 3544,
    price: 6546,
    action: <Link to="/admin/product/asdfasd">Manage</Link>,
  },
];
const Products = () => {
  const { user } = useSelector(
    (state: { userReducer: UserReducerInitalStateType }) => state.userReducer
  );

  const { data, isLoading, isError, error } = useAllProductsQuery(user._id!);
  console.log(data);
  const [rows, setRows] = useState<DataType[]>(arr);

  if (isError) {
    toast.error((error as CustomError).data.message);
  }
  useEffect(() => {
    if (data)
      setRows(
        data.products.map((i) => ({
          photo: <img src={`${server}${i.photo}`} />,
          name: i.name,
          price: i.price,
          stock: i.stock,
          action: <Link to={`/admin/product/${i._id}`}>Manage</Link>,
        }))
      );
  }, [data]);
  const Table = TableHOC<DataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Products",
    rows.length > 6
  )();

  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSideBar />
      <main>{isLoading ? <Skleton count={3} /> : Table}</main>
      <Link className="create-product-btn" to="/admin/product/new-product">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
