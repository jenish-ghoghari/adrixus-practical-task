// GLobal styles
import GlobalStyles from './Styles/Global.Styles';

// components
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Register from './components/Registration/Registration';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/register' element={<Register />} />
				<Route exact path='/' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
