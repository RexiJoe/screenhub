import './App.css';
import Main from './components/content/Main';
import Header from './components/header/Header.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePages from './pages/MoviePages';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path='/' element={<Main />} ></Route>

          <Route path=':MP' element={<MoviePages />} ></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );

}

export default App;
