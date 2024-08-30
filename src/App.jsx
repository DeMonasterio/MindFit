import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Main from './pages/Main/Main.jsx';
import NotDefined from './pages/NotDefined/NotDefined.jsx';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Main />} />
        <Route path="*" element={<NotDefined />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
