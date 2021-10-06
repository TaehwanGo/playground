import React, { useState } from 'react';
import styled from 'styled-components';
import { DivComponent } from './DivComponent';
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

const divStyle = css`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: white;
  }
`;

const style = { margin: '10px', padding: '10px' };

const StyledSpan = styled.span``;

export const Name = () => {
  let [name, setName] = useState('');
  return (
    <div style={style}>
      <input onChange={e => setName(e.target.value)} placeholder="이름"></input>
      <StyledSpan>{name}</StyledSpan>
    </div>
  );
};
export const NickName = () => {
  let [nickName, setNickName] = useState('');
  return (
    <div style={style}>
      <input
        onChange={e => setNickName(e.target.value)}
        placeholder="별명"
      ></input>
      <span>{nickName}</span>
      {/* <DivComponent /> */}
      <div css={divStyle}>Hover to change color.</div>
    </div>
  );
};
