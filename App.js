import React from 'react';
import './App.css';

const products = Array.from({ length: 20 }).map((_, idx) => ({
  id: idx + 1,
  name: `Premium Bag ${idx + 1}`,
  price: (1999 + idx * 50).toFixed(2),
  image: `https://source.unsplash.com/400x400/?bag,product,${idx}`,
}));

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#111827', color: 'white', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>GETZOP - Bags Collection</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {products.map(product => (
          <div key={product.id} style={{ backgroundColor: '#1F2937', padding: '1rem', borderRadius: '1rem' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '0.5rem' }} />
            <h2 style={{ fontSize: '1.2rem', margin: '1rem 0 0.5rem' }}>{product.name}</h2>
            <p>₹{product.price}</p>
            <button style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: 'white',
              color: '#1F2937',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
