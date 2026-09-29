import React from 'react';
import Counter from './Counter';
import ControlledInput from './ControlledInput';
import ToggleVisibility from './ToggleVisibility';
import TodoList from './TodoList';
import ColorSwitcher from './ColorSwitcher';
import SearchFilter from './SearchFilter';
import DragDropList from './DragDropList';

function Ex12() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Exercise 12: React Hook (useState)</h1>
      <hr />
      <Counter />
      <ControlledInput />
      <ToggleVisibility />
      <TodoList />
      <ColorSwitcher />
      <SearchFilter />
      <DragDropList />
    </div>
  );
}

export default Ex12;