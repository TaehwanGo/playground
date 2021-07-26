import React from 'react';

const AppLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Happy Coding !</h1>
      </header>
      <main>{children}</main>
      <footer>coded by Tony</footer>
    </>
  );
};

export default AppLayout;
