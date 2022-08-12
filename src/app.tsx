import React, { useState } from 'react';
import { Box } from './box';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

export default function App () {
  const [counter, setCounter] = useState<number>(0);

  function incrementCounter () { setCounter(counter + 1); }
  function decrementCounter () { setCounter(counter - 1); }

  return (
    <ThemeProvider theme={theme}>
    <h1> Hello World 2e3 </h1>
    <h3> {counter} </h3>
    <button onClick={() => incrementCounter()}> increment </button>
    <button onClick={() => decrementCounter()}> decrement </button>
    <Box />
    <GlobalStyle />

    </ThemeProvider>);
}
