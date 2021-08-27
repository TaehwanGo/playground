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
    setCount(count => (count = count + 1));
    // console.log('count : ', count);
  };
  return (
    <AppLayout>
      {console.log('rendering text', text)}
      {/* {console.log('count : ', count)} */}
      {/* <MainSlider /> */}
      <button onClick={onClickBtn}>click {count}</button>
    </AppLayout>
  );
};

export default Home;
