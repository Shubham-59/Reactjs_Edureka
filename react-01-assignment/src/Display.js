import React, { useState } from 'react';

const Display = ({ name, address }) => {
  const [displayName, setDisplayName] = useState(name);
  const [displayAddress, setDisplayAddress] = useState(address);

  return (
    <div className="component-container">
      <h2>Display Component</h2>
      <input
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <input
        type="text"
        value={displayAddress}
        onChange={(e) => setDisplayAddress(e.target.value)}
      />
    </div>
  );
};

export default Display;
