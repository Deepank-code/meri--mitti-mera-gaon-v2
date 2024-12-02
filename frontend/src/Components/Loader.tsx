import "./Loader.css";
const Loader = () => {
  return (
    <div className="loader">
      {" "}
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export const Skleton = ({ width = "unset" }: { width?: string }) => {
  return (
    <div className="skleton-loader" style={{ width }}>
      <div className="skleton-shape"></div>
      <div className="skleton-shape"></div>
      <div className="skleton-shape"></div>
      <div className="skleton-shape"></div>
    </div>
  );
};
export default Loader;
