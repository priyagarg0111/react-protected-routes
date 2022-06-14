import React from 'react';

export default function Button({ handleClick, buttonText }) {
  return (
    <div className={buttonText === 'Login' ? 'login' : 'logout'}>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}
