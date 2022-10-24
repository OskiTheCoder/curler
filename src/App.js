import Main from './components/main/Main';
import Header from './components/header/Header';
import CurlForm from './components/curl_form/CurlForm';
import { green, purple } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: green,
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Header />
        <CurlForm />
      </Main>
    </ThemeProvider>
  );
}

export default App;
