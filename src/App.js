import React, { useState } from 'react';
import './App.css';
import Ex12 from './components/Ex12/Ex12';
import Ex13 from './components/Ex13/Ex13';
import Ex14 from './components/Ex14/Ex14';
import Ex15 from './components/Ex15/Ex15';

function App() {
  const [currentEx, setCurrentEx] = useState('Ex15');

  return (
    <div className="App" style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px', padding: '10px', background: '#f0f0f0', borderRadius: '5px', textAlign: 'center' }}>
        {['Ex12', 'Ex13', 'Ex14', 'Ex15'].map((ex) => (
          <button 
            key={ex}
            onClick={() => setCurrentEx(ex)} 
            style={{ 
              padding: '8px 16px', 
              marginRight: '10px', 
              backgroundColor: currentEx === ex ? '#007bff' : '#ccc',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {ex}
          </button>
        ))}
      </div>

      {currentEx === 'Ex12' && <Ex12 />}
      {currentEx === 'Ex13' && <Ex13 />}
      {currentEx === 'Ex14' && <Ex14 />}
      {currentEx === 'Ex15' && <Ex15 />}
    </div>
  );
}

export default App;