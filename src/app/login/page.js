import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const LogIn = () => {
  return (

    <div style={{
      backgroundImage: 'url("/icon/loginbg.jpg")', backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100vh',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
          }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '16px' }}>
              Login
            </Typography>
            <form>
              <CardContent>
                <TextField
                  label="Email"
                  type="email"
                  margin="normal"
                  fullWidth
                  required
                />
                <TextField
                  label="Password"
                  type="password"
                  margin="normal"
                  fullWidth
                  required
                />

                <input className="w-1/5 px-4 py-2 rounded-mdtext-black border-2 border-red-500  hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium mt-2" type="submit" value="Login" />
              </CardContent>

            </form>
            <Typography variant='caption'>Did not Sign up Yet? <Link href="/signup"><span className='border-2 border-red-500 p-1'>Sign up</span></Link></Typography>
          </Card>
        </Grid>
      </div>
    </div>

  );
};

export default LogIn;