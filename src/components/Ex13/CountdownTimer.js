import React, { useState, useEffect } from 'react';

function CountdownTimer({ initialValue }) {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);

  useEffect(() => {
    if (timeRemaining <= 0) {
      return;
    }

    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timeRemaining]);

  // Thêm hàm reset lại thời gian
  const handleRestart = () => {
    setTimeRemaining(initialValue);
  };

  return (
    <div>
      <p><strong>Time Remaining: {timeRemaining}</strong></p>
      <button 
        onClick={handleRestart}
        style={{ padding: '5px 10px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
      >
        Restart Timer
      </button>
    </div>
  );
}

export default CountdownTimer;