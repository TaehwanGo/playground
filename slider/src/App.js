import Routes from './router/Routes';
import GlobalStyle from './style/GlobalStyle';

function App({ children }) {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
