import React, { useEffect, useState } from "react";
import "./styles.css";
const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
    }
    console.log(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    console.log("*********" + selectedPage);
    if (selectedPage >= 1 && selectedPage <= products.length / 10)
      setPage(selectedPage);
  };
  return (
    <div>
        
      {products.length > 0 && (
        <div className="products">
          {
            //11 to 20 products
            //index 10 to 19
            products.slice(page * 10 - 10, page * 10).map((prod) => {
              return (
                <span className="products__single" key={prod.id}>
                  <img src={prod.thumbnail} alt={prod.title} />
                  {prod.title}
                </span>
              );
            })
          }
        </div>
      )}
      <div>
        {products.length > 0 && (
          <div className="pagination">
            <span onClick={() => selectPageHandler(page - 1)}
            className={page>1?"":"pagination__disable"}
            >◀</span>
            {
              //so its give a new in a array inside this products =>100
              [...Array(products.length / 10)].map((_, i) => {
                //i start from 0
                return (
                  <span
                    //current index and page is match then
                    className={page === i + 1 ? "pagination__selected" : ""}
                    onClick={() => selectPageHandler(i + 1)}
                    key={i}
                  >
                    {i + 1}
                  </span>
                );
              })
            }

            <span onClick={() => selectPageHandler(page + 1)}
            className={page<products.length/10?"":"pagination__disable"}
            >▶</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
