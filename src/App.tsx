import 'react-calendar-heatmap/dist/styles.css';

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Repo from './pages/Repo';

import { ThemeName, themes } from './styles/themes';
import Loader from './components/Loader';

function App() {
  const [ themeName, setThemeName ] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];
  const [loading, setLoading] = useState(true);
  
  useEffect(() =>{
    setTimeout(() =>{
      setLoading(false)
    }, 2000)
  }, [])
  
  return (
    <ThemeProvider theme={currentTheme}>
      {
        loading ? (
          <Loader/>
        ) : (
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName} />

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:reponame" element={<Repo />} />
        </Routes>

        <Footer />

        <GlobalStyles />
      </BrowserRouter>)
      }
    </ThemeProvider>
  );
}

export default App;
