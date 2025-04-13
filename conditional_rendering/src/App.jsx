import React, { useState } from 'react'
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true)

  return (
    <div>
      {!isLoggedIn && <LoginBtn /> }
      {isLoggedIn && <LogoutBtn /> }
    </div>
  );

}

export default App
