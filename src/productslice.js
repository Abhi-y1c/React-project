import { createSlice } from "@reduxjs/toolkit"
const initialstate={
    cart:[]

}

const productSlice=createSlice({
        name:"addtocart",
        initialState:initialstate,
        reducers:{
            addData:(state,action)=>{
                var myitem =state.cart.filter((key)=>key.id==action.payload.id);
                if(myitem.length>=1)
                {
                    alert("this product is already added")
                }
                else
                {
                        state.cart.push(action.payload);
                }

            },
            proQtyInc:(state,action)=>{
                for (var i=0; i<state.cart.length; i++)
               {
                 if(state.cart[i].id==action.payload)
                {
                    state.cart[i].quantity++;
                }
                
               }
            },
            proQtyDec:(state,action)=>{
                for (var i=0; i<state.cart.length; i++)
               { 
                if(state.cart[i].id==action.payload)
                {
                   if( state.cart[i].quantity>1)
                   {
                    state.cart[i].quantity--;
                   }
                   else
                   {
                      alert("your product quantity atleast 1")
                   }
                }
                
               }
            },
        }
});
export const {addData,proQtyDec,proQtyInc}=productSlice.actions;
export default productSlice.reducer;