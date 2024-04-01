import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import './App.css';
import Home from './screens/Home';
import LoginForm from './screens/LoginForm';
import Dashboard from './screens/Dashboard';
import useToken from './util/UseToken';

function App() {
  const {token, setToken} = useToken();
  if (!token) {
    return <LoginForm setToken={setToken} />
  }
  localStorage.clear();
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/home' element={<Home />} />5
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
