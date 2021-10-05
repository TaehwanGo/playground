import React, { useRef, useState } from 'react';
import TestAnother from './TestAnother';
import TestSubComponent from './TestSubComponent';
import styled from 'styled-components';

const SubTitle = styled.h2`
  font-size: 36px;
`;

const RerenderingTest = () => {
  //   const SubTitle = styled.h2`
  //     //
  //   `;
  const [pop, setPop] = useState(true);
  const [count, setCount] = useState(0);
  const [aProp, setAProp] = useState('initial value');
  const [someText, setSomeTest] = useState('some text');
  //   const [aBoolean, setABoolean] = useState(true);
  const inputText = useRef();
  function onClickTogglePopButton() {
    setPop(prev => !prev);
  }
  function onClickTestChangeState() {
    setCount(prev => (prev += 1));
  }
  function handleSubmitForm(event) {
    event.preventDefault();
    setAProp(inputText.current.value);
    inputText.current.value = '';
  }

  return (
    <div>
      <div>이것도 렌더링 되나?</div>
      <header>
        Hello world!
        <h1>This is a title</h1>
        <SubTitle>This is a subtitle</SubTitle>
        {/* <h2 style={{ fontSize: '36px' }}>This is a subtitle</h2> */}
        <div>{someText}</div>
      </header>
      <main>
        It's a main
        <div>
          <button onClick={onClickTogglePopButton}>toggle button</button>
          {pop && <span>kinda popup</span>}
        </div>
        <TestAnother />
        <div>
          <button onClick={onClickTestChangeState}>change state</button>
          <span>{count}</span>
        </div>
        <label>TestSubComponent의 aProp 값 변경</label>
        <form onSubmit={handleSubmitForm}>
          <input ref={inputText} type="text" />
        </form>
        <TestSubComponent
          aProp={aProp}
          setSomeTest={setSomeTest}
          someText={someText}
        />
      </main>

      <footer>
        <p>It's a footer</p>
        {/* <div>{someText}</div> */}
        <div>static text</div>
      </footer>
    </div>
  );
};

export default RerenderingTest;
