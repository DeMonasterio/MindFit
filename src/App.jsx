import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Main from './pages/Main/Main.jsx';
import Search from "./pages/Search/Search.jsx";
import User from "./pages/User/User.jsx";
import NotDefined from './pages/NotDefined/NotDefined.jsx';
import { DataProvider } from './dataContext.jsx';

function App() {
  return (
    <>
      <DataProvider> 
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Main />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/User" element={<User />} />
            <Route path="*" element={<NotDefined />} />
          </Routes>
        </Router>
      </DataProvider>
    </>
  );
}

export default App;
