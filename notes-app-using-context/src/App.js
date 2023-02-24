import "./App.css";
import Home from "./Components/Home";
import NotesState from "./Context/NotesState";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotesPage from "./Components/NotesPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NotesState>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/notes" element={<NotesPage />} />
          </Routes>
        </NotesState>
      </BrowserRouter>
    </div>
  );
}

export default App;
