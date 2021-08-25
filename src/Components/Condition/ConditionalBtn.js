import React, { useState } from 'react';

const ConditionalBtn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
      <div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}> Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
        )}
      </div>
    );
};

export default ConditionalBtn;