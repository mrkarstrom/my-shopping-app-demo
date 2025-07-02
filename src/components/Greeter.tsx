// import type React from 'react';

// function Greeter(props: { person: string }): React.JSX.Element {
//   return <h1>Hello! {props.person}</h1>;
// }

// export default Greeter;

interface GreeterProps {
  person: string;
}

function Greeter({ person }: GreeterProps): React.JSX.Element {
  return <h1>Hello {person}</h1>;
}

export default Greeter;
