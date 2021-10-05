import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Editor } from '@tinymce/tinymce-react';
import TestPage from './components/TestPage';
import styled from 'styled-components';

const DivDiv = styled.div``;

function App() {
  const [test, setTest] = useState(0);
  function onClickButton() {
    setTest(prev => (prev += 1));
  }
  // const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };
  // useEffect(() => {
  //   console.log('tiny key', process.env.REACT_APP_TINYMCE_KEY);
  // }, []);
  return (
    // <>
    //   <Editor
    //     apiKey={process.env.REACT_APP_TINYMCE_KEY}
    //     onInit={(evt, editor) => (editorRef.current = editor)}
    //     initialValue="<p>This is the initial content of the editor.</p>"
    //     init={{
    //       height: 500,
    //       menubar: false,
    //       plugins: [
    //         'advlist autolink lists link image charmap print preview anchor',
    //         'searchreplace visualblocks code fullscreen',
    //         'insertdatetime media table paste code help wordcount',
    //       ],
    //       toolbar:
    //         'undo redo | formatselect | ' +
    //         'bold italic backcolor | alignleft aligncenter ' +
    //         'alignright alignjustify | bullist numlist outdent indent | ' +
    //         'removeformat | help',
    //       content_style:
    //         'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
    //     }}
    //   />
    //   <button onClick={log}>Log editor content</button>
    // </>
    <>
      <nav>
        <button onClick={onClickButton}>test button</button>
        {test}
      </nav>
      <header>
        <div>header</div>
        <div>header</div>
        <div>header</div>
        {/* <DivDiv>header</DivDiv> */}
      </header>
      <main>
        <TestPage />
      </main>
      <footer>
        <div>footer</div>
        <div>footer</div>
        <div>footer</div>
      </footer>
    </>
  );
}

export default App;
