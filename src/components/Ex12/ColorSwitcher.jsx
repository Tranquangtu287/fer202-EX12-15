import React, { useState } from 'react';

export default function ColorSwitcher() {
  const [bgColor, setBgColor] = useState('transparent');
  return (
    <div style={{ marginBottom: '30px', background: '#282c34', color: '#fff', padding: '15px', borderRadius: '8px' }}>
    
      <select onChange={(e) => setBgColor(e.target.value)} defaultValue="">
        <option value="" disabled>Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div style={{ width: '100px', height: '100px', backgroundColor: bgColor, marginTop: '10px', border: '1px solid #fff' }}></div>
    </div>
  );
}