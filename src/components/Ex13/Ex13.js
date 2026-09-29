import React, { useState } from 'react';
import UserPosts from './UserPosts';
import CountdownTimer from './CountdownTimer';
import WindowSize from './WindowSize';
import ValidatedInput from './ValidatedInput';

function Ex13() {
  const [userId, setUserId] = useState(1);

  // Hàm kiểm tra form: Nhập ít nhất 5 ký tự là hợp lệ
  const checkLength = (val) => val.length >= 5;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Ex13: React Hook (useEffect)</h2>

      {/* Bài 1 */}
      <section style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
        <h3>1. Data Fetching (UserPosts)</h3>
        <label>Chọn User ID (1 - 10): </label>
        <input 
          type="number" 
          value={userId} 
          onChange={(e) => setUserId(Number(e.target.value))} 
          min="1" 
          max="10"
          style={{ marginLeft: '10px', marginBottom: '15px' }}
        />
        <UserPosts userId={userId} />
      </section>

      {/* Bài 2 */}
      <section style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
        <h3>2. Countdown Timer</h3>
        <CountdownTimer initialValue={10} />
      </section>

      {/* Bài 3 */}
      <section style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
        <h3>3. Window Resize Listener</h3>
        <WindowSize />
      </section>

      {/* Bài 4 */}
      <section style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
        <h3>4. Form Input Validation</h3>
        <p>Quy tắc: Nhập từ 5 ký tự trở lên.</p>
        <ValidatedInput 
          validationFunction={checkLength} 
          errorMessage="Input must be at least 5 characters!" 
        />
      </section>
    </div>
  );
}

export default Ex13;