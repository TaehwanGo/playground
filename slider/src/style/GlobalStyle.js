import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  /* Color */
  --color-dark-grey: #363636;
  --color-grey: #616161;
  --color-light-grey: #838383;
  --color-orange: #feb546;
  --color-yellow: #fdcc11;
  --color-blue: #175cbe;
  --color-light-pink: hsl(321, 63%, 90%);
}
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* background-color: #444444;
    color: whitesmoke; */
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    // 기존 css 파일들 styled component로 옮기는 작업 진행할 예정
    // 이 파일은 globals.css 파일에 있는 것을 그대로 가져오면 됨
    .slick-slide {
        display: inline-block;
    }
`;

export default GlobalStyle;
