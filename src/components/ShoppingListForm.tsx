import { useRef } from 'react';

function ShoppingListForm(): React.JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Submitted');
    console.log(inputRef.current?.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Product Name"
        ref={inputRef}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ShoppingListForm;
