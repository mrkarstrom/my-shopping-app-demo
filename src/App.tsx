// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import Greeter from './components/Greeter';

import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="logo logo-spin">
        <Greeter person="Magnus" />
      </div>
    </>
  );
}

export default App;
