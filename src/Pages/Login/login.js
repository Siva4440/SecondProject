import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword, updateUSerName ,updateUserDetails} from "../../Reducers/loginSlice";
import loginService from "../../Services/loginAPI";

 
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(state=> state.login);

  const [validationMsg,setValidationMsg]= useState({userNameMsg:"",passwordMsg:""});

  const onLoginClick=()=>{
    if(validateForm()){
      loginService(data).then(res=>{
        //console.log("res",res)
        dispatch(updateUserDetails(res?.data))
       if(res.data !== false){
        navigate('/products')
       }
      })
    }
    
  }

  const validateForm=()=>{
      const {userName,password}=data;
      const validations ={};
      let isValid=true
      if(!userName){
        validations.userNameMsg="UserName is Mandaroty";
          isValid=false;
      }
      
      if(!password){
        validations.passwordMsg="Password is Mandaroty"
        isValid=false
      }

      setValidationMsg(validations)
      return  isValid;
  }
  
  
  return (
    <div>
      <Box
        sx={{
          width: 500,
          height: 250,
          borderRadius: 1,
          border: "1px solid black",
          padding: "25px",
          marginTop: "10%",
          marginLeft: "25%",
           
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Login
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              fullWidth
              size="small"
              onChange={e=> dispatch(updateUSerName(e.target.value))}
              error={Boolean(validationMsg.userNameMsg)}
              helperText={validationMsg.userNameMsg}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
              size="small"
              onChange={e=> dispatch(updatePassword(e.target.value))}
              error={Boolean(validationMsg.passwordMsg)}
              helperText={validationMsg.passwordMsg}
            />
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" fullWidth onClick={()=>navigate("/registration")}>
              Create Account
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" fullWidth onClick={onLoginClick}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
