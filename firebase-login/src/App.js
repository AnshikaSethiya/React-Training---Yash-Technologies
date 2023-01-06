import './Components/styles.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Header from './Components/Header';
import { AddCarousel } from './Components/AddCarousel';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header />
       <AddCarousel />
          <Container>
            <Routes>
              <Route exact path= "/" element={<Login />}/>
              {/* <Route exact path="/signup" element={<Signup />}/> */}
            </Routes>
          </Container>
          <Footer />
       </BrowserRouter>
    </div>
  );
}

export default App;
