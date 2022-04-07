import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Main from './components/main/Main';
// import Login from './components/authentication/Login';
// import Register from './components/authentication/Register';
// import PasswordRecovery from './components/authentication/PasswordRecovery';

import { BrowserRouter } from 'react-router-dom'
import Authentication from './components/authentication/Authentication';

function App() {
const [auth,setAuth]=useState(true)

  if(auth===true){
    return (
    <div className='container'>
      <BrowserRouter>
        <Sidebar />

        <Main/>
      </BrowserRouter>
    </div>
  )}else{
  return(
    <Authentication/>
    // <Register/>
    // <PasswordRecovery/>
  )
  }
}

export default App;
