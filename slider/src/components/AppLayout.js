import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: var(--color-light-grey);
  background-color: #3498db;
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <header>
        <Title>Happy Coding !</Title>
      </header>
      <main>{children}</main>
      <footer>coded by Tony</footer>
    </>
  );
};

export default AppLayout;
