import logo2 from './imges/logo2.png';
import burger2 from './imges/burger2.jpg';
import burger from './imges/burger.jpg';
import chocko from './imges/chocko.jpg';
import product from './product'
import Aos from 'aos';
import 'aos/dist/aos.css'


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";


import { useDispatch, useSelector } from 'react-redux'
import { addData } from './productslice'
import { useEffect } from 'react';




const Home=()=>{
  
  const mycart=useSelector((state)=>state.addtocart.cart);
  console.log(mycart);
  const dispatch=useDispatch();
  const mydataAdd=(id,name,detail,image,price,quantity)=>{
    let productObj={id:id,name:name,detail:detail,image:image,price:price,quantity:quantity}
    dispatch(addData(productObj));
  }
            


  const Ans = product.map((key)=>{
    return(
     <>
            

           <div className='' style={{margin:"30px"}}>
              <div className='homemade' >
                 <img style={{width:"65%"}}  src={"imges/"+key.image}/> 
                <h2> {key.name}</h2>   <div>{key.detail}</div>
                <h3> price:{key.price} $  </h3>       <br/>
                <button onClick={()=>{mydataAdd(key.id,key.name,key.detail,key.image,key.price,key.quantity)}} className='homebtn'>Add to Card</button>
             </div> 

             </div>
     </>
    );
  })

  
    return(
       <>
      
           {/* <h1>Home  <img style={{height:"100%",width:"100%"}} src={img1}/> </h1> */}
              
           <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          number: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="avv">
       <center>   <img height="500px" width="90%" src={chocko} /></center>  
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="avv">
          <center>   <img height="500px" width="90%" src={burger2} />   </center> 
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img height="auto" width="100%" src={slise2} /> */}
          <div className="avv"><center>
            <img height="500px" width="90%"  src={burger}/></center>
            <div className="av">
              Pick Up <br/>  ...The Burger.
             
              <button className="btn-4">Click me</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
          <div className='grid'> 
          {Ans}
           </div> 
          
       </>
    );

} 
export default Home;