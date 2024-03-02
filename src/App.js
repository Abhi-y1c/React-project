import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import About from "./about";
import Shop from "./bag";
import Payment from "./payment";
const App=()=>{
    return(
       <>
       <BrowserRouter>
         <Routes>
             <Route  path="/" element={<Layout/>}>
             <Route indexelement={<Home/>}/>
             <Route  path="home" element={<Home/>}/>
             <Route  path="about" element={<About/>}/>
             <Route  path="shop" element={<Shop/>}/>
             <Route path="payment" element={<Payment/>}/>
             </Route>
         </Routes>
       </BrowserRouter>
       </>
    );
  }
  export default App;
// abhishek new
