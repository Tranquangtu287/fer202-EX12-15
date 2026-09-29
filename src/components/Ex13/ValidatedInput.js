import React, { useState, useEffect } from 'react';

function ValidatedInput({ validationFunction, errorMessage }) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          border: isValid ? '1px solid #ccc' : '2px solid red',
          padding: '5px',
          borderRadius: '4px'
        }}
        placeholder="Nhập tối thiểu 5 ký tự..."
      />
      {!isValid && <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>}
    </div>
  );
}

export default ValidatedInput;