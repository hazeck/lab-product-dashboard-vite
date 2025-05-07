import React, { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css'

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 999.9, inStock: true, category: 'Electronics' },
    { id: 2, name: 'Phone', price: 599.9, inStock: false, category: 'Electronics' },
    { id: 3, name: 'Headphones', price: 199.9, inStock: true, category: 'Accessories' },
    { id: 4, name: 'Backpack', price: 49.9, inStock: true, category: 'Accessories' },
  ]);

  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('All');

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function toggleCart(id) {
    if (cart.includes(id)) {
      setCart(cart.filter(itemId => itemId !== id));
    } else {
      setCart([...cart, id]);
    }
  }

  function removeProductById(id) {
    setProducts(products.filter(product => product.id !== id));
    setCart(cart.filter(itemId => itemId !== id)); // also remove from cart
  }

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  const filteredProducts =
    filter === 'All'
      ? products
      : products.filter(product => product.category === filter);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <h1>Product Dashboard</h1>

      <button onClick={toggleDarkMode}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>

      <select onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Accessories">Accessories</option>
      </select>

      <ProductList
        products={filteredProducts}
        cart={cart}
        toggleCart={toggleCart}
        removeProductById={removeProductById}
      />
    </div>
  );
}

export default App;
