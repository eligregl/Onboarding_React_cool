import React, { useState } from 'react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';


function App() {
  const [userName, setName] = useState('');
  const [page, setPage] = useState(1);
  
  const nextPage = () => {
    setPage (page => page + 1);
  }

  const lastPage = () => {
    setPage (page => page - 1);
  }

  return (
    <div>
     { page === 1 && <FirstPage guardarNombre = {setName} goToSecondPage = {nextPage}/>}
     { page === 2 && <SecondPage Nombre = {userName} goToFirstPage = {lastPage} goToThirdPage = {nextPage}/>}
     { page === 3 && <ThirdPage goToThirdPage = {nextPage}/>}
    </div>
  );
}

export default App;
