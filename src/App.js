import { useState } from 'react';

import './App.css';

import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

function App() {
  const [user, setUser] = useState({username: "Monika Dwivedi", id: 1, type: "Customer"});
  const [activeMenu, setActiveMenu] = useState('Home');

  const server = "http://localhost:8000";
  const menuItems = ["Home", "Register", "Admin Login", "Customer Login"];
  const onMenuItemClick = (item) => {
    setActiveMenu(item);
  };

  return (
    <div className="App">
      <Header user={user} setUser={setUser} activeMenu={activeMenu} menuItems={menuItems} onMenuItemClick={onMenuItemClick}/>
      <Body activeMenu={activeMenu} server={server}/>
      <Footer/>
    </div>
  );
}

export default App;
