import { ReactElement, useState } from "react";
import AdminSideBar from "../../Components/AdminSideBar";
import TableHOC from "../../Components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

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
  const [data] = useState<DataType[]>(arr);
  const Table = TableHOC<DataType>(
    columns,
    data,
    "dashboard-product-box",
    "Products",
    true
  );
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSideBar />
      <main>{Table()}</main>
      <Link className="create-product-btn" to="/admin/product/new-product">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
