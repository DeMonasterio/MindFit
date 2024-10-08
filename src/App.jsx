import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Main from './pages/Main/Main.jsx';
import Search from "./pages/Search/Search.jsx";
import User from "./pages/User/User.jsx";
import Game from "./pages/Game/Game.jsx";
import NotDefined from './pages/NotDefined/NotDefined.jsx';
import { DataProvider } from './dataContext.jsx';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState()
    
  return (
    <>
      <DataProvider> 
        <Router>
          <Routes>
            <Route path="/" element={<Home handlesetUser={setUser} />} />
            <Route path="/Home" element={<Main  user={user}  />} />
            <Route path="/Search" element={<Search  user={user}   />} />
            <Route path="/User" element={<User  user={user}  />} />
            <Route path="/Game" element={<Game/>} />
            <Route path="*" element={<NotDefined />} />
          </Routes>
        </Router>
      </DataProvider>
    </>
  );
}

export default App;
