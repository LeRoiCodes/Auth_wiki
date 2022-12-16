import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Library from './pages/Library/Library';
import FAQ from './pages/FAQ/FAQ';
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import AuthLibrary from './pages/Library/AuthLibrary';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Reset from './pages/Reset/Reset';
import Verify from './pages/Verification/Verify';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import CheckMail from './pages/Checkmail/CheckMail';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/team' element={<Team/>}/>  
          <Route path='/login' element={<Login/>} />
          <Route path='/reset' element={<Reset/>} />
          <Route path='/checkmail' element={<CheckMail />} />
          <Route path='/register' element={<Signup/>} />
          <Route path='/forget' element={<ForgotPassword />} />
          <Route path='/verification' element={<Verify/>}/>
          <Route path='/library/auth' element={<AuthLibrary/>} />
        </Routes>
      </BrowserRouter>
      {/* <AuthLibrary /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Reset /> */}
      {/* <Team /> */}
      {/* <Verify /> */}
      <Footer /> 
    </div>
  );
}

export default App;
