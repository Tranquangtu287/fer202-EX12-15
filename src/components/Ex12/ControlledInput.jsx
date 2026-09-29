import React, { useState } from 'react';

export default function ControlledInput() {
  const [text, setText] = useState('');
  return (
    <div style={{ marginBottom: '30px', background: '#282c34', color: '#fff', padding: '15px', borderRadius: '8px' }}>
      
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />
      <p>Input text: {text}</p>
    </div>
  );
}