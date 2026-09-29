import React, { useState } from 'react';

export default function DragDropList() {
  const [dragItems, setDragItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' }
  ]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => setDraggingItem(index);
  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (index) => {
    const updatedItems = [...dragItems];
    const draggedItemContent = updatedItems[draggingItem];
    updatedItems.splice(draggingItem, 1);
    updatedItems.splice(index, 0, draggedItemContent);
    setDragItems(updatedItems);
    setDraggingItem(null);
  };
  const handleDragEnd = () => setDraggingItem(null);

  return (
    <div style={{ marginBottom: '30px', background: '#282c34', color: '#fff', padding: '15px', borderRadius: '8px' }}>
      <ul>
        {dragItems.map((item, index) => (
          <li 
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            onDragEnd={handleDragEnd}
            style={{ padding: '8px', margin: '4px 0', background: '#444', cursor: 'grab', borderRadius: '4px' }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}