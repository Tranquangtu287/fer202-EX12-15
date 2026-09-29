import React, { useState } from 'react';

export default function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div style={{ marginBottom: '30px', background: '#282c34', color: '#fff', padding: '15px', borderRadius: '8px' }}>
      
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>Toggle me!</p>}
    </div>
  );
}