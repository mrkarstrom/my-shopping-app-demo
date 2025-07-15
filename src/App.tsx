// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import Greeter from './components/Greeter';

import './App.css';
// import ShoppingList from './components/ShoppingList';
import ShoppingList2 from './components/ShoppingLisst2';

function App() {
  // const [count, setCount] = useState(0);

  const items = [
    {
      id: 1,
      product: 'Lemon',
      qty: 2,
    },
    {
      id: 2,
      product: 'Apple',
      qty: 4,
    },
  ];
  return (
    <>
      <div className="logo logo-spin">
        {/* <Greeter person="Magnus" /> */}
        <ShoppingList2 items={items} />
      </div>
    </>
  );
}

export default App;
