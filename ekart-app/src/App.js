import './Components/styles.css'
import MyState from './Context/MyState';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <MyState>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </MyState>
    </div>

  );

}



export default App;
