import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Listing from 'pages/Listing';
import Form from 'pages/Form';


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
