import Navbar1 from "./Navbar";
import {Routes, Route} from 'react-router-dom'
import Home from "./Home";
import Product from "./Producte";
import Cart from "./Cart";
import { useEffect,useState } from "react";
import axios from 'axios'

function App() {
  const [data,setData]= useState([])

  useEffect(()=>{
    axios.get("http://localhost:4000/products").then(res=>setData(res.data)).catch(err=>{
      console.log(err)
    })
  },[])
 
console.log(data)

  return (
    <div>
     <Navbar1 />
     <Routes>
       
       <Route path="/home" element={<Home />} />
       <Route path="/product" element={<Product data={data} />} />
       <Route path="/cart" element={<Cart />} />
      

       
     </Routes>
    </div>
  );
}

export default App;
