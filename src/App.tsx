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
      <ShoppingListForm className="container"></ShoppingListForm>
    </>
  );
}

export default App;
