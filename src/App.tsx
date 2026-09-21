import { useState } from 'react';
import './App.css';
import Product from './components/Product';
function App() {
  const [cartCount, setCartCount] = useState(0);
  const addToCart = () => setCartCount(prev => prev + 1);

  return (
    <div className="app-container">
      {/* Header / Navbar */}
      <header className="top-header">
        <div className="logo-section">
          <span className="logo-icon">🍔</span>
          <span className="logo-text">TASTY BURGER</span>
        </div>
        <nav className="nav-links">
          <a href="#">ABOUT</a>
          <a href="#">MENU</a>
          <a href="#">SHOP</a>
          <a href="#">CONTACT</a>
          <span className="cart-icon">🛒 {cartCount}</span>
        </nav>
      </header>

      {/* Main Title & Description */}
      <main className="main-content">
        <h1 className="main-title">OUR CRAZY BURGERS</h1>
        <p className="main-desc">
          Get ready for a wild ride of flavors! Our crazy burgers are loaded with juicy patties, bold toppings, and irresistible sauces, all stacked on a perfectly toasted bun. Whether you like it cheesy, or extra meaty, we've got a burger that will blow your mind!
        </p>

        {/* Products Grid */}
        <div className="products-grid">
          <Product
            id={1}
            prodname="Crispy Chicken"
            desc="Chicken breast, chilli sauce, tomatoes, pickles, coleslaw"
            price={99.15}
            rating={5.0}
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
            onAddToCart={addToCart}
          />
          <Product
            id={2}
            prodname="Ultimate Bacon"
            desc="House patty, cheddar cheese, bacon, onion, mustard"
            price={99.32}
            rating={4.5}
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop"
            onAddToCart={addToCart}
          />
          <Product
            id={3}
            prodname="Black Sheep"
            desc="American cheese, tomato relish, avocado, lettuce, red onion"
            price={69.15}
            rating={4.8}
            src="/Screenshot_20260921_132205.jpg"
            onAddToCart={addToCart}
          />
        </div>
      </main>
    </div>
  );
}

export default App;