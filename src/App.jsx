import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./features/Movies/Movies";
import SingleMovie from "./features/Movies/SingleMovie";
import SingleShow from "./features/Shows/SingleShow";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:imdbID" element={<SingleMovie />} />
          <Route path="/show/:imdbID" element={<SingleShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
