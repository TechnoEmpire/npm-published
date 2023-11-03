import React from 'react';
import Home from './Home';
import { Header } from './component/Header';
function App() {
  return (
    <>
      <div className='w-full h-screen relative p-16'>
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
