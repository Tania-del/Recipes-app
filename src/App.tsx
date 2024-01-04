import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';


function App() {
  return (
    <div className='font-roboto'>
      <Header />
      <main className='max-w-[1140px] mt-0 mr-auto mb-0 ml-auto'>
      <Categories  />
      </main>
    </div>
  );
}

export default App;
