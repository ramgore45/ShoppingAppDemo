import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className='relative'>
      <Navbar />
      <div className=' min-h-[80vh] w-[70vw] mx-auto my-[65px] flex felx-wrap justify-center items-center'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    
    </div>
  );
};

export default App;
