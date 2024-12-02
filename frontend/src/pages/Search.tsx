import { useState } from "react";
import ProductCard from "./Home/ProductCard";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const addTocartHandler = () => {};
  const isNextPage = true;
  const isPrevpage = true;
  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Low to High</option>
            <option value="desc">Price (high to Low)</option>
          </select>
        </div>
        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            min={10}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="">Sample1</option>
            <option value="">Sample2</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Product</h1>
        <input
          type="text"
          placeholder="Search by Name..."
          value={search}
          onChange={(e) => e.target.value}
        />
        <div className="search-product-list">
          <ProductCard
            productID="rte"
            price={230}
            stock={200}
            name="Tomato"
            photo="https://img.freepik.com/free-photo/photo-red-fresh-tomato-blank-background_125540-4260.jpg?size=626&ext=jpg&ga=GA1.1.1824858138.1725949183&semt=ais_hybrid"
            handler={addTocartHandler}
          />
        </div>
        <article>
          <button
            disabled={!isPrevpage}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>
          <span>
            {page} of {4}
          </span>
          <button
            disabled={!isPrevpage}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </article>
      </main>
    </div>
  );
};

export default Search;
