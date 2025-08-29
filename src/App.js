import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import TermsAndConditions from './components/Terms';
import Blog from './components/Blog';
import Registration from './components/Registration';
import Login from './components/SignIn';
import ProtectedRoutes from './context/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import AddNotePage from './pages/AddNote';
import NoteState from './context/notes/NoteState';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/dashboard" || location.pathname === "/addnote";
  return (
    <>
      <NoteState>
        {!hideNavbar && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addnote" element={<AddNotePage />} />
          </Route>
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </NoteState>
    </>
  );
}

export default App;
