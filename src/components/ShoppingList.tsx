// import type { FC } from 'react';

// const ShoppingList: FC = () => {
//   return (
//     <div className="">
//       <h1>Shopping List</h1>
//       <ul>
//         <li>Item1</li>
//       </ul>
//     </div>
//   );
// };

// export default ShoppingList;

import type { JSX } from 'react';
import type Item from '../models/items';

interface ShoppingListProps {
  items: Item[];
}

function ShoppingList({ items }: ShoppingListProps): JSX.Element {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.qty}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
