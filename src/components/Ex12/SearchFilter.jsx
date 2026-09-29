import React, { useState } from 'react';

export default function SearchFilter() {
  const [searchQuery, setSearchQuery] = useState('');
  const itemsList = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Mango' },
    { id: 5, name: 'Grape' },
    { id: 6, name: 'Pineapple' }
  ];
  const filteredItems = itemsList.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ marginBottom: '30px', background: '#282c34', color: '#fff', padding: '15px', borderRadius: '8px' }}>
      
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Search items..."
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}