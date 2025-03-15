import { useEffect, useState } from "react";
import axios from "axios"

function Cart(){
   const[cart,setCart] = useState([])
  

    useEffect(()=>{
           axios.get("http://localhost:4000/Cart").then(res=>{setCart(res.data)
            console.log(res.data);
            
        }).catch(err=>{
          console.log(err)
        })
      },[])
    //   console.log(cart)

      


    return(
        <div>
        
          {
            cart.map(x=>{
                return(
                    <div>
                        <img src={x.images} alt="image" width={200}/>
                        {x.id}
                        {x.title}
                       <button>delete</button>
                        
                    </div>
                )
            })
          }
          

        </div>
    )
}
export default Cart;