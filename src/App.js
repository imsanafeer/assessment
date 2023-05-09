import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddBlog from './components/AddBlog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
        <Routes >
        <Route path='/' element={<Home/>}></Route>
          <Route path='/add' element={<AddBlog/>}></Route>  

        </Routes>  

      </BrowserRouter>
    </div>
  );
}

export default App;
