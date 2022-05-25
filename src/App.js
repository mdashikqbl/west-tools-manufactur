import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Home/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login/Login';
import NotFound from './Pages/Home/NotFound';
import Portfolio from './Pages/Home/Portfolio';
import Navbar from './Pages/Shared/Navbar';
function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='blog' element={<Blogs />}></Route>
        <Route path='portfolio' element={<Portfolio />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

    </div>
  );
}

export default App;
