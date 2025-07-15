import { useRef } from 'react'; // import type { JSX } from 'react';
import type { JSX } from 'react';
import type ShoppingListFormProps from './ShoppingListFormProps';

function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Submitted!');
    const newProduct = inputRef.current!.value;
    onAddItem(newProduct);
    inputRef.current!.value = '';
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="" name="" placeholder="Add Item" ref={inputRef} />
      <button type="submit">Add to list</button>
    </form>
  );
}

export default ShoppingListForm;
