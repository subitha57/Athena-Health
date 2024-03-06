import React, { useState } from 'react';
import { TextField, Button, Grid, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import './PatientForm.css';


const PatientForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [gender, setGender] = useState<string>('');
  const [blood,setBlood]= useState<string>('');

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setGender(event.target.value);
  };
  const handleBloodChange =(event: SelectChangeEvent<string>) => {
    setBlood(event.target.value);

  }
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const handleSubmit =()=>{
    
  }
  return (
    <div className='container'>
    <form className='form-container' onSubmit={handleSubmit}>
     <h1>Patient Details</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}  className="form-item">
          <TextField label="First Name"  fullWidth/>
        </Grid>
        <Grid item xs={2} sm={6}  className="form-item">
          <TextField label="Last Name"  fullWidth />
        </Grid>
        <Grid item xs={2} sm={6}  className="form-item">
        <TextField
        type="date"
        value={selectedDate?.toISOString().substr(0, 10)}
        onChange={(e) => handleDateChange(new Date(e.target.value))}
      />
        </Grid>
        <Grid item xs={2} sm={6}  className="form-item">
        <InputLabel id="gender">Gender</InputLabel>  
                <Select
              labelId="gender"
              label="Gender"
            id="gender"
            value={gender} onChange={handleGenderChange}  
          >
            <MenuItem value= "gender">Gender</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </Grid><br/>
        <Grid item xs={2} sm={6}  className="form-item">
        <InputLabel id="blood-Type">BloodType</InputLabel>
                <Select
            labelId="blood-type"
            id="bloodType" 
            label="BloodType"
            value={blood} onChange={handleBloodChange}
          >
            <MenuItem value= "BloodType">BloodType</MenuItem>
            <MenuItem value="AB+">AB+</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
          </Select>
        </Grid>
        <Grid item  xs={2} sm={6}className="form-item" >
          <TextField label="Phone Number"  fullWidth />
        </Grid>
        <Grid item xs={12}  className="form-item">
          <TextField label="Email"  fullWidth />
        </Grid>
        <Grid item xs={12}  className="form-item">
          <TextField label="Address"  fullWidth />
        </Grid>
       
        <Grid item xs={12}  className="form-item">
          <Button variant="contained" color="primary"
           fullWidth
           type='submit'
           className="submit-btn" >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
    </div>
  );
};

export default PatientForm;
