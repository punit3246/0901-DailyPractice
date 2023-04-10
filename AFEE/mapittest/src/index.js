import React, { useReducer, useState } from 'react';

const initialState = {
  items: [],
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        count: state.count + 1
      };
    case 'REMOVE_ITEM':
      const updatedItems = state.items.filter(item => item !== action.payload);
      return {
        ...state,
        items: updatedItems,
        count: state.count - 1
      };
    default:
      return state;
  }
}

function ListManager() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    dispatch({ type: 'ADD_ITEM', payload: inputValue });
    setInputValue('');
  };

  const handleRemoveItem = item => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  return (
    <div>
      <h2>Total items: {state.count}</h2>
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {state.items.map(item => (
          <li key={item}>
            {item} <button onClick={() => handleRemoveItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListManager;
