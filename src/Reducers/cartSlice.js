import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE={
  products:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState : INITIAL_STATE,
    reducers:{
       updateProducts:(state,action)=>{
        state.products=[...state.products, action.payload]
       }
    }
});

export const  {updateProducts} = cartSlice.actions
export default cartSlice.reducer;