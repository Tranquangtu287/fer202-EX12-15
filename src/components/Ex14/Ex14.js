import React from 'react';
import ThemeEx from './ThemeEx';
import CartEx from './CartEx';

export default function Ex14() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Exercise 14: React Hook (useContext)</h2>
      
      {/* Phần 1: Theme Context */}
      <ThemeEx />

      {/* Phần 2 & 3: Cart Context & Real-time Update */}
      <CartEx />
    </div>
  );
}