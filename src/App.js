import React from 'react';
import './App.css';
import  Products  from './pages/products';
import Header from './components/header';
import { useDarkMode } from './useThemContex';

function App() {
  const {isDarkMode} = useDarkMode();

  return (
    <div>
     <Header />
     <Products />
     </div>
  );
}

export default App;
