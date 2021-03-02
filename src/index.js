import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import TransactionPage from './pages/TransactionPage/TransactionPage';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Helvetica, Sans-Serif;
  }
  html {
    background-color: #f4f4f4;
  }
`

const App = () => {
  return (
    <main>
        <GlobalStyle/>
        <TransactionPage />
    </main>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
