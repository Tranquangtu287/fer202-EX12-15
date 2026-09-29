import React, { useReducer } from 'react';

// Khai báo giá trị khởi tạo
const initialCounterState = { count: 0 };

// Định nghĩa reducer function cho counter
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

export default function CounterEx() {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);

  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#282c34', color: '#fff', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>1. Simple Counter using useReducer</h3>
      <h1 style={{ fontSize: '48px', margin: '10px 0' }}>{state.count}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={() => dispatch({ type: 'INCREMENT' })}
          style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}
        >
          +
        </button>
        <button 
          onClick={() => dispatch({ type: 'DECREMENT' })}
          style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}
        >
          -
        </button>
        <button 
          onClick={() => dispatch({ type: 'RESET' })}
          style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}