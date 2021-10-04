import React, { useEffect, useState } from 'react';
import AppLayout from '../components/AppLayout';
import { MainSlider } from '../components/Slider';
// import PauseOnHover from '../components/PauseOnHover';

const Home = () => {
  const [text, setText] = useState('asdf');
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(text);
    setText('qwer');
    console.log(text);
    console.log(count);
  }, [setCount]);
  const onClickBtn = () => {
    setCount((count) => (count = count + 1));
    // console.log('count : ', count);
  };
  function downloadTest() {
    // download 속성은 역시 안먹힘
    console.clear();
    const aTag = document.createElement('a');
    aTag.href =
      // 'https://source.unsplash.com/random/500x500';
      'https://wetubetony.s3.ap-northeast-2.amazonaws.com/video/6a3261c1aae8da977fb6a4fc51dcc116';
    aTag.download = 'testVideo.mp4'; // 안먹힘(same origin URL이 아니기 때문)
    aTag.click();
    aTag.remove();
    console.log('downloadTest in react');
  }
  return (
    <AppLayout>
      {console.log('rendering text', text)}
      {/* {console.log('count : ', count)} */}
      {/* <MainSlider /> */}
      {/* <button onClick={onClickBtn}>click {count}</button> */}
      <button onClick={downloadTest}>download test</button>
    </AppLayout>
  );
};

export default Home;
