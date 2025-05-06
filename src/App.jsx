import React, { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 999.9, inStock: true },
    { id: 2, name: 'Phone', price: 599.9, inStock: false },
    { id: 3, name: 'Headphones', price: 199.9, inStock: true },
  ]);

  function removeProductById(id) {
    const updatedList = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].id !== id) {
        updatedList.push(products[i]);
      }
    }
    setProducts(updatedList);
  }

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} removeProductById={removeProductById} />
    </div>
  );
}

export default App;
