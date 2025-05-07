import React from 'react';
import ProductCard from './ProductCard';

function ProductList(props) {
  const { products, removeProductById, cart, toggleCart } = props;

  const inStock = products.some(product => product.inStock);

  if (!inStock) {
    return <p>No products in stock.</p>;
  }

  return (
    <div>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          inCart={cart.includes(product.id)}
          toggleCart={toggleCart}
          removeProductById={removeProductById}
        />
      ))}
    </div>
  );
}

export default ProductList;

