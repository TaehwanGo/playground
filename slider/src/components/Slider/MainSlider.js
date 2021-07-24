import { mainSliderData } from '../../api/dummyData';
import React, { useState } from 'react';
import Slider from 'react-slick';
import styled, { createGlobalStyle } from 'styled-components';
import MainSliderItem from './MainSliderItem';

const SliderWrapper = styled.div`
  background: pink;
  overflow: hidden;
`;

const Global = createGlobalStyle`
  * {
    box-sizing: border-box
  }
    .slick-slide {
        display: inline-block;
    }
    .container {
      max-width: 1200px;
      margin: 0 10px;
      margin: auto;
    }
`;

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <SliderWrapper>
      <Global />
      <div>
        <Slider
          arrows={false}
          initialSlide={0}
          slidesToShow={1}
          swipeToSlide={1}
          infinite
          // dots={true}
        >
          {mainSliderData.map((item, index) => (
            <MainSliderItem key={item.id} item={item} index={index} />
          ))}
        </Slider>
      </div>
    </SliderWrapper>
  );
};

export default MainSlider;
