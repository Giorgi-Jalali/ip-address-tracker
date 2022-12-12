import { createGlobalStyle } from "styled-components";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Main />
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }

  body {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    @media (min-width: 800px) {
      height: 100vh;
    }
  }

`;
