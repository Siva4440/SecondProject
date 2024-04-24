import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = {
    firstName:"",
    lastName:"",
    password:"",
    email:"",
    phone:"",
    gender:"",
    
}


const registrationSlice = createSlice({
    name:'registration',
    initialState :INITIAL_STATE,
    reducers:{
        updateFirstName:(state,action)=>{
            state.firstName= action.payload
        },
        updateLastName:(state,action)=>{
            state.lastName= action.payload
        },
        updatePassword:(state,action)=>{
            state.password= action.payload
        },
        updateEmail:(state,action)=>{
            state.email= action.payload
        },
        updatePhone:(state,action)=>{
            state.phone= action.payload
        },
        updateGender:(state,action)=>{
            state.gender= action.payload
        }
    }
})

 export const{ updateFirstName, updateLastName,updateEmail,updatePhone,updatePassword,updateGender }= registrationSlice.actions;

 export default registrationSlice.reducer;

