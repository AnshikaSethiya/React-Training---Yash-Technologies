import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import PageContent from './Components/PageContent/PageContent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <PageContent />
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
