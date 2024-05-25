import React from 'react';

// Define the type for the props (if any)
interface GreetingProps {
  name: string;
}

// Functional component Greeting with type annotation for props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
