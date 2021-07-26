import React from 'react';
import Slider from 'react-slick';
import styled, { createGlobalStyle } from 'styled-components';

const SliderStyle = styled.span`
  background-color: orange;
`;

const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: pink;
  overflow: hidden;
`;

const ImgWrapper = styled.div`
  padding: 32px;
  text-align: center;
`;

const Global = createGlobalStyle`
    .slick-slide {
        display: inline-block;
    }
`;

const CustomSlider = () => {
  return (
    <SlickWrapper>
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
          <ImgWrapper>
            <SliderStyle>1</SliderStyle>
          </ImgWrapper>
          <ImgWrapper>
            <SliderStyle>2</SliderStyle>
          </ImgWrapper>
          <ImgWrapper>
            <SliderStyle>3</SliderStyle>
          </ImgWrapper>
          <ImgWrapper>
            <SliderStyle>4</SliderStyle>
          </ImgWrapper>
          <ImgWrapper>
            <SliderStyle>5</SliderStyle>
          </ImgWrapper>
          <ImgWrapper>
            <SliderStyle>6</SliderStyle>
          </ImgWrapper>
        </Slider>
      </div>
    </SlickWrapper>
  );
};

export default CustomSlider;
