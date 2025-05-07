import React from 'react';
import styles from '../styles/ProductCard.module.css';

function ProductCard(props) {
  const { product, inCart, toggleCart, removeProductById } = props;

  let cardClass = styles.card;
  if (!product.inStock) {
    cardClass += ' ' + styles.outOfStock;
  }
  if (inCart) {
    cardClass += ' ' + styles.inCart;
  }

  return (
    <div className={cardClass}>
      <div>{product.name}</div>
      <div>${product.price}</div>
      <div>{product.inStock ? 'In Stock' : 'Out of Stock'}</div>

      <button onClick={() => toggleCart(product.id)}>
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>

      <button onClick={() => removeProductById(product.id)}>
        Remove
      </button>
    </div>
  );
}

export default ProductCard;