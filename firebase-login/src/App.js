import './Components/styles.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Header from './Components/Header';
import { AddCarousel } from './Components/AddCarousel';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header />
          <Container>
            <Routes>
              <Route exact path= "/" element={<Home />}/>
              <Route exact path="/signup" element={<Signup />}/>
              <Route exact path="/login" element={<Login />}/>
            </Routes>
          </Container>
          <Footer />
       </BrowserRouter>
    </div>
  );
}

export default App;
