import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MainSliderItem = ({ item }) => {
  const [isMobile, setIsMobile] = useState(false);

  const ItemWrapper = styled.div`
    display: flex !important;
    height: 320px;
  `;

  const ItemLeft = styled.div`
    background: gray;
    width: 45%;
    height: 100%;
    padding: 30px 10px;
    .pre {
      white-space: pre;
      word-break: keep-all;
    }

    .item__tags {
      background-color: red;
      display: inline-block;
      padding: 5px;
      border-radius: 4px;
      font-size: 0.9rem;
      margin-bottom: 0.9rem;
    }
    .item__title {
      font-size: 26px;
    }
    .item__text {
      font-weight: 600;
      color: whitesmoke;
    }
  `;

  const ItemRight = styled.div`
    width: 55%;
    height: 100%;

    & img {
      background: center/cover;
      src: ${isMobile ? item.mobileImg : item.pcImg};
      alt: ${item.title};
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left;
    }
  `;

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <ItemWrapper className="container">
      <ItemLeft>
        {item.tags[0] && (
          <div className="item__tags item__text">
            {item.tags.map(tag => tag)}
          </div>
        )}
        {/* <div className="item__tags item__text">{item.tags.map(tag => tag)}</div> */}
        <div className="item__title pre item__text">{item.title}</div>
        <p className="item__text pre item__text">{item.text}</p>
      </ItemLeft>
      <ItemRight>
        <img src={isMobile ? item.mobileImg : item.pcImg} alt={item.title} />
      </ItemRight>
    </ItemWrapper>
  );
};

export default MainSliderItem;
