import { configureStore, createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name:'products',
    initialState:{
        veg:[
            {name:'tomato', price:200.0},
            {name:'potato', price:100.8}
        ],
        nonVeg:[
            {name:'chicken', price:800.0},
            {name:'fish', price:1000.0}
        ],
    },
    reducers:{}
});


const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state, action) => {
            const status = state.find(item => item.name === action.payload.name);

            if(status){
                item.quantity += 1;
            }
            else{
                state.push({...action.payload, quantity:1});
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.find(item => item.name === action.payload);
            if (item) {
              item.quantity += 1;
            }
          },
          decrementQuantity: (state, action) => {
            const item = state.find(item => item.name === action.payload);
            if (item && item.quantity > 1) {
              item.quantity -= 1;
            }
            else{
              return state.filter(item => item.name !== action.payload);
            }
          },
          removeFromCart: (state, action) => {
            return state.filter(item => item.name !== action.payload);
          }
          
    
    }
})



const store=configureStore({
    reducer:{
        products:ProductSlice.reducer,
        cart:cartSlice.reducer
    }
})
export default store;
export const{addToCart,incrementQuantity, decrementQuantity, removeFromCart} =cartSlice.actions;