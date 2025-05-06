import React from 'react';
import styles from '../styles/ProductCard.module.css';

function ProductCard(props) {
  const product = props.product;
  const removeProductById = props.removeProductById;

  let cardClass = styles.card;
  if (!product.inStock) {
    cardClass += ' ' + styles.outOfStock;
  }

  return (
    <div className={cardClass}>
      <div>{product.name}</div>
      <div>${product.price}</div>
      <div>{product.inStock ? 'In Stock' : 'Out of Stock'}</div>
      <button onClick={function () {
        removeProductById(product.id);
      }}>
        Remove
      </button>
    </div>
  );
}

export default ProductCard;

