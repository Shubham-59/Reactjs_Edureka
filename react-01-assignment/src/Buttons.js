import React from 'react';

const Buttons = () => {
  const sayHello = () => {
    alert('Hello');
  };

  const sayBye = () => {
    alert('Bye');
  };

  return (
    <div className="component-container">
      <button onClick={sayHello}>Say Hello</button>
      <button onClick={sayBye}>Say Bye</button>
    </div>
  );
};

export default Buttons;
