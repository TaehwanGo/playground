import React, { useState } from 'react';

const style = { margin: '10px', padding: '10px' };

const HelpName = () => {
  return <span>Name 변경 컴포넌트 입니다.</span>;
};
const HelpNickName = () => {
  return <span>NickName 변경 컴포넌트 입니다.</span>;
};

export const Name = () => {
  let [name, setName] = useState('');
  return (
    <div style={style}>
      <HelpName />
      <input onChange={e => setName(e.target.value)} placeholder="이름"></input>
      <span>{name}</span>
    </div>
  );
};
export const NickName = () => {
  let [nickName, setNickName] = useState('');
  return (
    <div style={style}>
      <HelpNickName />
      <input
        onChange={e => setNickName(e.target.value)}
        placeholder="별명"
      ></input>
      <span>{nickName}</span>
    </div>
  );
};
