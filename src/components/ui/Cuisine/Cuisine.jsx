import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import style from './cuisine.module.css'
import Image from 'next/image';

const Cuisine = () => {
    const cuisines = [
        { name: 'Bangladeshi', src: '/cuisins/bangladeshi.jpg' },
        { name: 'Italian', src: '/cuisins/italian.jpg' },
        { name: 'Chinese', src: '/cuisins/indian.jpg'},
        { name: 'Japanese', src: '/cuisins/japanies.jpg' },
        { name: 'Thai', src: '/cuisins/bangladeshi.jpg' },
        { name: 'Indian', src: '/cuisins/indian.jpg' },
        { name: 'Mexican', src: '/cuisins/japanies.jpg' },
        { name: 'French',  src: '/cuisins/italian.jpg' },
        { name: 'Spanish', src:'/cuisins/bangladeshi.jpg'},
        { name: 'Peruvian', src: '/cuisins/indian.jpg' },
    ];

    return (
        <div className={style.parallax}>
            <Typography className=' my-5 text-center' variant='h3'>~~~ Cuisine ~~~</Typography>
           <Grid container className='p-10 mx-auto' spacing={3}>
                {cuisines.map((cuisine, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                  <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg flex flex-col items-center justify-center bg-white relative">
      <div className="w-full h-full absolute inset-0">
        <Image
          src={cuisine.src}
          alt="cusine"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h2 className="text-white bg-slate-500 text-center text-sm font-medium absolute bottom-4 w-full">{cuisine.name}</h2>
    </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Cuisine;