import type { JSX } from 'react';

interface ShoppingListProps2 {
  items: Item[];
}

interface Item {
  id: number;
  product: string;
  qty: number;
}

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
