// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import Greeter from './components/Greeter';

import { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import type Item from './models/items';

function App() {
  // const [count, setCount] = useState(0);
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string) => {
    console.log('Made it  to the app');
    console.log(product);
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <ShoppingList items={items} />
        </div>
        <div className="card">
          <ShoppingList items={items} />
        </div>
        <div className="card">
          <ShoppingList items={items} />
        </div>
      </div>
      <ShoppingListForm onAddItem={addItem} />
    </>
  );
}

export default App;
