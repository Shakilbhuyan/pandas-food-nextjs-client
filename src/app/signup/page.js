"use client"
import { Authcontext } from '@/provider/AuthProvider';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useContext, useState } from 'react';


const SignupPage = () => {
  const {createUser, updateUserProfile} = useContext(Authcontext);

  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;


    if(password !== confirmPassword || password.length < 6){
      setError('PassWord Not match or Must be 6 Character')
         
          return ;
    }

    setError("");
    createUser(email, password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      
    })
   
    
    
    

    
    
}
    return (
        <div style={{
            backgroundImage: 'url("/icon/loginbg.jpg")', backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh',
          }}>
            <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{
                  backgroundColor: 'rgba(256, 256, 256, 0.5)', // 70% opacity
                  border: '1px solid red',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '24px',
                  boxShadow: '10px 10px 10px 0px rgba(0, 0, 0, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop:"35px"
                }}>
                  <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '16px' }}>
                    Sign Up
                  </Typography>
                  <form onSubmit={handleRegister}>
                    <CardContent >
                      <TextField
                        label="Name"
                        type="text"
                        name='name'
                        margin="normal"
                        fullWidth
                        required
                      />
                       <TextField
                        label="Email"
                        type="email"
                        name='email'
                        margin="normal"
                        fullWidth
                        required
                      />
                      <TextField
                        label="Password"
                        type="password"
                        margin="normal"
                        name='password'
                        fullWidth
                        required
                      />
                         <TextField
                        label="Confirm Password"
                        type="password"
                        name='confirmPassword'
                        margin="normal"
                        fullWidth
                        required
                      />
      <Typography variant='body2' sx={{color:'red'}}>{error}</Typography>
                      <input className="w-1/5 px-4 py-2 rounded-mdtext-black border-2 border-red-500  hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium mt-2" type="submit" value="Sign Up" />
                    </CardContent>
      
                  </form>
                  <Typography variant='caption'>Did not Sign up Yet? <Link href="/login"><span className='border-2 border-red-500 p-1'>Login</span></Link></Typography>
                </Card>
              </Grid>
            </div>
          </div>
    );
};

export default SignupPage;