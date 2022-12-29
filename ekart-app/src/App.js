import './Components/styles.css'
import MyState from './Context/MyState';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <MyState>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </MyState>
    </div>

  );

}



export default App;
