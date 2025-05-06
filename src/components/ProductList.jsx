import React from 'react';
import ProductCard from './ProductCard';

function ProductList(props) {
  const products = props.products;
  const removeProductById = props.removeProductById;

  let inStock = false;
  for (let i = 0; i < products.length; i++) {
    if (products[i].inStock) {
      inStock = true;
    }
  }

  if (!inStock) {
    return <p>No products in stock.</p>;
  }

  return (
    <div>
      {products.map(function (product) {
        return (
          <ProductCard
            key={product.id}
            product={product}
            removeProductById={removeProductById}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
