import { useDispatch, useSelector } from "react-redux";
import { proQtyDec,proQtyInc } from "./productslice";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import Payment from "./payment";
import { Link } from "react-router-dom";
const Shop=()=>{

  var netAmount=0;

  const cartItem =useSelector((state)=>state.addtocart.cart);
  const dispatch=useDispatch();
  const productQntInc=(myid)=>{
    dispatch(proQtyInc(myid));
  }
  
  const productQntDec =(myid)=>{
    dispatch(proQtyDec(myid));
  }

//   const productRemove=(myid)=>{
//     dispatch(cartProductRemove(myid));
//   }

  
   const productData=cartItem.map((key)=>{
    netAmount+=key.price*key.quantity;
    return(
        <>
          <tr className="tabledata" align="center">
            <td><img style={{width:"30%"}} src={"imges/"+key.image}/> </td>
            <td>{key.name}</td>
            <td>{key.price} </td>
            <td>
                <FaPlusCircle  onClick={()=>{productQntInc(key.id)}}
                style={{marginRight:"8px",cursor:"Pointer",color:"black"}} />
                <span style={{border:"1px solid gray",width:"20px",padding:"10px"}}>{key.quantity}</span>

                <FaMinusCircle  onClick={()=>{productQntDec(key.id)}}
                style={{marginRight:"8px",cursor:"Pointer",color:"black"}} />
            </td>
            <td>{key.price*key.quantity}</td>
          </tr>
          <tr>
            <td colSpan="6">
                <hr size="2" color="lightblue"/>
            </td>
          </tr>
            

        </>
    )
   });

    return(
        <>
       <center>
         <table  style={{fontSize:"30px"}}>
          <tr  className="ammount1">
            <td style={{paddingLeft:"200px"}}>Image</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
          </tr> 
       {productData}
       </table></center>
       <center>
          <div className="ammount" >
              Total Amount: {netAmount}
      
          </div></center><br/><br/>
           <Link to="/payment" className="payment" >payment</Link>
        </>
    );
}
export default Shop;