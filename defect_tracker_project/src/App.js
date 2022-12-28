import Login from './Components/Login';
import ViewDefectUser from './Components/Users/ViewDefectUser';
import Admin from './Components/Admin/Admin';
import Header from './Components/Header';
import AddDefect from './Components/Users/AddDefect';
import AuthenticateService from './Components/Services/AuthenticateService';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Components/styles/style.css'

function App() {

  const login = (username) => {
    AuthenticateService.login(username);
  }

  const logout = () => {
    AuthenticateService.logout();
  }

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login login={login}/>} />
          <Route exact path='/view' element={<ViewDefectUser />} />
          <Route exact path='/add' element={<AddDefect />} />
          <Route exact path='/admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;