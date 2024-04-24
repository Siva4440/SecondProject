import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'; 
// import registrationService from '../../Services/registrationAPi'
import { updateProfile } from "../../Reducers/loginSlice";
import Header from "../../components/Header";



const Profile = () => {
    const dispatch = useDispatch();
    const [isEditMode,setIsEditMode] = useState(false);
    const data = useSelector(state=>state.login.userDetails)
    // console.log("data",data)
    const {firstName,lastName,email,phone,gender ,password} = data;


    const updateTextField=(e)=>{
      const {name,value}=e.target;
      console.log(name,value)
      dispatch(updateProfile({[name]:value}))
      
    }

  return (
    <div>
      < Header />
      <Box
        sx={{
          width: 500,
          height: 300,
          border: '1px solid grey',
          padding: "20px",
          marginLeft:'30%',
          marginTop:'8%',
          borderRadius:'8px'
        }}
      >
        <Grid container  spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom align="left" >
              Profile
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="outlined"  onClick={()=>setIsEditMode(true)}>Edit Profile</Button>
          </Grid>
          <Grid item xs={6}>
            <TextField name="firstName" label="First Name" disabled={!isEditMode} value={firstName} type="text" variant="outlined"fullWidth size="small" onChange={updateTextField}/>
          </Grid>
          <Grid item xs={6}>
            <TextField  name="lastName" label="Last Name" disabled={!isEditMode} value={lastName} type="text" variant="outlined" fullWidth size="small" onChange={updateTextField} />
          </Grid>

          <Grid item xs={6}>
            <TextField  label="Email" value={email} disabled type="emial" variant="outlined" fullWidth size="small" onChange={updateTextField} />
          </Grid>

          <Grid item xs={6}>
            <TextField name="phone" label="Number" type="number" disabled={!isEditMode} value={phone} variant="outlined" fullWidth size="small" onChange={updateTextField} />
          </Grid>

          <Grid item xs={6}>
            <TextField  name="password" label="Password" value={password} disabled={!isEditMode} type="password" variant="outlined" fullWidth size="small" onChange={updateTextField} />
          </Grid>

          <Grid item xs={6}>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label" >Gender</FormLabel>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group"
                 onChange={updateTextField} value={gender}  >
                <FormControlLabel name="gender" value="female" disabled={!isEditMode} control={<Radio />} label="Female"  />
                <FormControlLabel name="gender" value="male" disabled={!isEditMode} control={<Radio />} label="Male"  />
                </RadioGroup>
            </FormControl>
          </Grid>
          {
            isEditMode && 
            <Grid item xs={12}>
            <Button fullWidth variant="contained"  onClick={()=>setIsEditMode(false)}>Update Profile</Button>
          </Grid>
          }
        </Grid>
      </Box>
    </div>
  );
};
export default Profile;
