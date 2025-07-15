// // import type { FC } from 'react';

// // const ShoppingList: FC = () => {
// //   return (
// //     <div className="">
// //       <h1>Shopping List</h1>
// //       <ul>
// //         <li>Item1</li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default ShoppingList;

// import type { JSX } from 'react';

// interface Item {
//   id: number;
//   product: string;
//   qty: number;
// }

// interface ShoppingListProps {
//   items: Item[];
// }

// function ShoppingList({ items }: ShoppingListProps): JSX.Element {
//   return (
//     <div className="card">
//       <h1>Shopping List</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.product} - {item.qty}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;

export default function ShoppingList(): React.JSX.Element {
  return (
    <div>
      <ul>
        <li>Item 1</li>
      </ul>
    </div>
  );
}
