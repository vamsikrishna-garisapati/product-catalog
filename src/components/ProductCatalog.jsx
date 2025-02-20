import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaThLarge, FaList } from "react-icons/fa";
import { fetchProducts } from "../data/api";

const ProductCatalog = () => {
  const [isGridView, setIsGridView] = useState(() => {
    return JSON.parse(localStorage.getItem("isGridView")) || false;
  });
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    localStorage.setItem("isGridView", JSON.stringify(isGridView));
  }, [isGridView]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProductsList(products);
    };
    getProducts();
  }, []);

  return (
    <div className="container">
      <button
        id="toggleViewBtn"
        className="toggle-button"
        onClick={() => setIsGridView(!isGridView)}
      >
        {isGridView ? <FaList /> : <FaThLarge />} {isGridView ? "Switch to List View" : "Switch to Grid View"}
      </button>
      <motion.div 
        className={`product-container ${isGridView ? "grid-view" : "list-view"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {productsList.map((product) => (
          <motion.div 
            key={product.id} 
            className="product" 
            layout
            whileHover={{ scale: 1.05 }}
          >
            <img src={product.thumbnail} alt={product.title} />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductCatalog;
