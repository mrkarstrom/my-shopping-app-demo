import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import Greeter from './components/Greeter';

import './App.css';
// import ShoppingList from './components/ShoppingList';
import ShoppingList2 from './components/ShoppingList/ShoppingLisst2';
import ShoppingListForm from './components/ShoppingList/ShoppingListForm';

function App() {
  // const [count, setCount] = useState(0);

  // const items = [
  //   {
  //     id: 1,
  //     product: 'Lemon',
  //     qty: 2,
  //   },
  //   {
  //     id: 2,
  //     product: 'Apple',
  //     qty: 4,
  //   },
  // ];
  const [item, setItem] = useState<Item[]>([]);

  const addItem = (product: string) => {
    console.log(product);
    console.log('Made it to the app!');
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <ShoppingList2 items={item} />
        </div>
        <div className="card">
          <ShoppingList2 items={item} />
        </div>
        <div className="card">
          <ShoppingList2 items={item} />
        </div>
        <ShoppingListForm onAddItem={addItem} />
      </div>
    </>
  );
}

export default App;
