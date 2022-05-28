import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Home/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login/Login';
import SignUp from './Pages/Home/Login/SignUp';
import NotFound from './Pages/Home/NotFound';
import Portfolio from './Pages/Home/Portfolio';
import Navbar from './Pages/Shared/Navbar';
import RequireAuth from './Pages/Home/RequireAuth';
import OrderDetail from './Pages/OrderDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='blog' element={<Blogs />}></Route>
        <Route path='/tools/:toolsId' element={
          <RequireAuth>
            <OrderDetail></OrderDetail>
          </RequireAuth>
        } ></Route>

        <Route path='portfolio' element={<Portfolio />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes >
      <ToastContainer />

    </div >
  );
}

export default App;
