import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'; 
import registrationService from '../../Services/registrationAPi'
import { updateFirstName, updateLastName,updateEmail,updatePhone,updatePassword,updateGender } from "../../Reducers/registrationSlice";



const Registration = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector(state=> state.registration);

    const onRegistrationClick=()=>{
      registrationService (data)
    }
    
  return (
    <div>
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
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom align="center" >
              Registration
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField label="First Name" type="text" variant="outlined"fullWidth size="small" onChange={e=>dispatch(updateFirstName(e.target.value))}/>
          </Grid>
          <Grid item xs={6}>
            <TextField  label="Last Name" type="text" variant="outlined" fullWidth size="small" onChange={e=>dispatch(updateLastName(e.target.value))} />
          </Grid>

          <Grid item xs={6}>
            <TextField  label="Email" type="emial" variant="outlined" fullWidth size="small" onChange={e=>dispatch(updateEmail(e.target.value))} />
          </Grid>

          <Grid item xs={6}>
            <TextField  label="Number" type="number" variant="outlined" fullWidth size="small" onChange={e=>dispatch(updatePhone(e.target.value))} />
          </Grid>

          <Grid item xs={6}>
            <TextField  label="Password" type="password" variant="outlined" fullWidth size="small" onChange={e=>dispatch(updatePassword(e.target.value))} />
          </Grid>

          
          <Grid item xs={6}>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                <FormControlLabel value="female" control={<Radio />} label="Female"onChange={e=>dispatch(updateGender(e.target.value))} />
                <FormControlLabel value="male" control={<Radio />} label="Male"  onChange={e=>dispatch(updateGender(e.target.value))} />
                </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} align="center">
          <Button variant="outlined" fullWidth onClick={()=>navigate('/login')} >Back to Login</Button>
          </Grid>
          <Grid item xs={6} align="center">
          <Button variant="contained" fullWidth onClick={onRegistrationClick} >Registration</Button>
          </Grid>

        </Grid>
      </Box>
    </div>
  );
};
export default Registration;
