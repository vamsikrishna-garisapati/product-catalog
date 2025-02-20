import React from "react";
import { motion } from "framer-motion";


const ProductCard = ({ product }) => {
  return (
    <motion.div 
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
  );
};

export default ProductCard;
