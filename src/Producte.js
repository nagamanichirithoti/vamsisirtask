import axios from "axios"
function Product({data}){
    console.log(data)
    function handleCart(item){

        axios.post("http://localhost:4000/Cart",item)
        alert("added to cart itemes")
        console.log(item)
            }
    return(
        <div style={{display:"flex", flexWrap:"wrap",gap:"20px"}}>
        
        {
                data.map((x)=>{
                    return(
                     <div>
                        <img src={x.images} alt="image" width={200}/>
                        <p>{x.id}</p>
                        <h1>{x.title}</h1>
                        <button onClick={()=>handleCart(x)}>Addtocart</button>
                       
                    </div>
                    )
                    
                })
            }
        </div>
    )
}
export default Product;