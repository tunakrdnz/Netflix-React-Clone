import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Animation4 from "./components/Animation4";
import FaqCard from "./components/FaqCard";
import Animation1 from "./components/Animation1";
import Animation2 from "./components/Animation2";
import Animation3 from "./components/Animation3";
import Footer from "./components/Footer";
import Login from "./pages/Login";


function App() {
  return (
    <>
     <Navbar/>
     <Routes>
        <Route path='/login' element={<Login />} />
     </Routes>
     <Main/>
     <Animation1/>
     <Animation2/>
     <Animation3/>
     <Animation4/>
     <FaqCard/>
     <Footer/>
    </>
  );
}

export default App;
