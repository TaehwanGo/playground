import React, { useEffect, useRef } from 'react';

const TestSubComponent = ({ aProp, setSomeTest, someText }) => {
  const inputText = useRef();
  function handleSubmitForm(event) {
    event.preventDefault();
    setSomeTest(inputText.current.value);
    inputText.current.value = '';
  }
  useEffect(() => {
    console.log('someText', someText);
  }, [someText]);
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label>TestSubComponent</label>
        <input ref={inputText} type="text" />
      </form>
      {aProp}
    </div>
  );
};

export default TestSubComponent;
