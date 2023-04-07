import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/favs' element={<Favs/>}/>
            <Route path='/dentist/:id' element={<Detail/>}/>

          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
