import { Link,Outlet } from "react-router-dom";
import logo2 from './imges/logo2.png';
import bike3 from './imges/bike3.png';
import background4 from './imges/background4.jpg';
import { MdOutlineLocalGroceryStore , MdAddCall,MdMail} from "react-icons/md";
import { FaFacebook ,FaInstagram,FaYoutube,FaSafari} from "react-icons/fa";
import Marquee from "react-fast-marquee";

import { UseSelector, useSelector } from "react-redux";
const Layout=()=>{

   const mycartData=useSelector((state)=>state.addtocart.cart);
   const proCount=mycartData.length;
   return(
   <>

   <div className="navbar">  
                     <img style={{height:"10%",width:"5%"}} src={logo2}/>
               <Link to="home">Home</Link> 
               <Link to="about">About</Link> 
               <Link to="home">Menu</Link> 
               <Link to="home">FoodGallary</Link>
               <Link to="shop">Shop</Link>
               <Link to="home">Contact</Link>
              
                <div className="btn2">
                <Link to="shop">  <MdOutlineLocalGroceryStore/> <span> {proCount} </span></Link>
          
            </div> 
           <div>
             <button className="btn1">ORDER ONLINE</button>
          </div> 
   </div>
   {/* ============================================================================= */}
   <Outlet/> 


   {/* ===============================footer===================================== */}
   <div className="footer" style={{ backgroundImage: `url(${background4})`,width:"100%",height:"550px",borderStartStartRadius:"100px"}}>

  
             <div className="footerfont"><span style={{fontSize:"100px", marginLeft:"80px"}}>R</span> <img style={{height:"10%",width:"5%", paddingTop:"20px"}} src={logo2}/> estro...
                    
             </div>



             <div style={{display:"flex" , justifyContent:"space-evenly"}}>
                <div>
                   <div className="footeroffice">Head Office</div><br/>
                     <div className="footertooffice">1st Flore Sangam Tent House<br/>Ashoka Garden,Bhopal<br/>Madhya Pradesh<br/><br/>
                      < MdAddCall/>7247571437<br/> <br/><MdMail/>Abhi.yd1437@gmail.com
                     </div>
                 </div>
                 <div>
                    <div className="footertime"><div style={{fontSize:"30px",fontWeight:"bold"}}>Opning Time.</div><br/>
                      Monday : 08.00 - 5.00<br/>
                      Saturday: 08.00 - 5.00<br/>
                      Sunday : 08.00 - 5.00<br/>
                      Wenesday : 08.00 - 5.00<br/>
                      Thursday : 11.00 - 5.00<br/><br/>
                      Friday : Closed
                    </div>
                    </div>
        <div>
          <div>
             <div className="footericon">
                  <div><FaFacebook/></div><div><FaInstagram/></div><div><FaYoutube/></div><div><FaSafari/></div>
             </div>
             <div className="footername">
               <a href="#">Home</a>
               <a href="#">About</a>
               <a href="#">Menu</a>
               <a href="#">Blog</a>
               <a href="#">Contact</a>
            </div>
        </div>
        </div>
    </div>

      <Marquee> 
         <img style={{}} src={bike3}/>
      </Marquee>
      <hr size="1" color="gray" />
      <div style={{textAlign:"center", fontSize:"20px", padding:"8px" ,color:"orange"}}>Copyright@2024,Created by Abhishek </div>

   </div>



   </>

   )
};
export default Layout;