import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ marginBottom: '30px', background: '#282c34', color: '#fff', padding: '15px', borderRadius: '8px' }}>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}