import { FaTruckFast } from "react-icons/fa6";


const Payment=()=>{
return(
    <>
     


      {/* <div className="mx-auto gradient-custom mt-5" style={{ maxWidth: '800px', height: '400px' }}>
        <MDBRow className="pt-3 mx-3">
          <MDBCol md="3">
            <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px' }}>
              <MDBIcon fas icon="shipping-fast text-white" size="3x" />
              <MDBTypography tag="h3" className="text-white">Welcome</MDBTypography>
              <p className="white-text">You are 30 seconds away from compleating your order!</p>
            </div>
            <div className="text-center">
              <MDBBtn color="white" rounded className="back-button">Go back</MDBBtn>
            </div>
          </MDBCol>
          <MDBCol md="9" className="justify-content-center">
            <MDBCard className="card-custom pb-4">
              <MDBCardBody className="mt-0 mx-5">
                <div className="text-center mb-3 pb-2 mt-3">
                  <MDBTypography tag="h4" style={{ color: '#495057' }} >Delivery Details</MDBTypography>
                </div>

                <form className="mb-0">
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='First name' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Last name' type='text' />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='City' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Zip' type='text' />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='Address' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Email' type='text' />
                    </MDBCol>
                  </MDBRow>

                  <div className="float-end">
                    <MDBBtn rounded style={{backgroundColor: '#0062CC'}}>Place order</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div> */}
    

    <div className="payheader">
        <div>
         <div className="headericon">  <FaTruckFast/></div> 
         <div className="fontheader">Welcome</div>
         <div style={{color:"white",fontSize:"20px", marginLeft:"30px"}}>You are 30 seconds away from<br/> compleating your order!</div>
         <div className="headerbutton">GO BACK</div>
     </div>
         <div className="payheader2">
             <div style={{paddingLeft:"250px",fontSize:"40px",fontWeight:"bold",paddingTop:"10px"}}>Delivery Details</div>
             <div className="payheader3" >
            <input type="text" style={{fontSize:"24px",width:"230px",padding:"5px", borderRadius:"10px",margin:"20px"}}  placeholder="First Name"/>
            <input type="text" style={{fontSize:"24px",width:"230px",padding:"5px",borderRadius:"10px"}}  placeholder="Last Name"/>
             <br/>
             <input type="text" style={{fontSize:"24px",width:"230px",padding:"5px", borderRadius:"10px",margin:"20px"}}  placeholder=" City"/>
            <input type="text" style={{fontSize:"24px",width:"230px",padding:"5px",borderRadius:"10px"}}  placeholder="Pin Code"/>
             <br/>
             <input type="text" style={{fontSize:"24px",width:"230px",padding:"5px", borderRadius:"10px",margin:"20px"}}  placeholder="Address"/>
            <input type="text" style={{fontSize:"24px",width:"230px",padding:"5px",borderRadius:"10px"}}  placeholder="Email"/>
               <div className="headerbutton1">Place order</div>
          </div>
    
         </div>
        
    </div>
 
    </>
);
}
export default Payment;
