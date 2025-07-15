import type { JSX } from 'react';
import type ShoppingListProps2 from './shoppingListProps';

export default function ShoppingList2({
  items,
}: ShoppingListProps2): JSX.Element {
  return (
    <div>
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
