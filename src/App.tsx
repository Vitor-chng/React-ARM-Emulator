import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/home/Home';



const App: React.FC = () => {
  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = 'Lab Proc';
  }, []);
  return (
    <>
      <Home />
    </>

  );
}
export default App;
