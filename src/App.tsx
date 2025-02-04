import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '@components/Header/Header';
import Main from '@pages/Main';
import NotFound from '@pages/NotFount';

function App() {
  return (
    <div id='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
