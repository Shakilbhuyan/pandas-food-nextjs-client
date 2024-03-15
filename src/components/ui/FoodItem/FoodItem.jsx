import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import food1 from "@/asset/asparagus.jpg"
import food2 from "@/asset/breakfast.jpg"
import food3 from "@/asset/hamburger.jpg"
import food4 from "@/asset/salmon.jpg"
import Image from 'next/image';

const FoodItem = () => {
  return (
    <Box className=" px-10 py-5 ">
      <Typography className='text-red-900 my-3 text-center' variant='h3'>~~~ Top Food ~~~</Typography>
      <Grid className='mx-auto w-full text-center' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={2} md={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia>
                <Image src={food1} alt='food' height={400} width={500}></Image>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Stack
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="medium" color="error" variant='outlined'>
               Order
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4} sm={2} md={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia>
                <Image src={food2} alt='food' height={400} width={500}></Image>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 English Breakfast
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="medium" color="error" variant='outlined'>
               Order
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4} sm={2} md={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia>
                <Image src={food3} alt='food' height={400} width={500}></Image>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Burger
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="medium" color="error" variant='outlined'>
               Order
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4} sm={2} md={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia>
                <Image src={food4} alt='food' height={400} width={500}></Image>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Salmon
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="medium" color="error" variant='outlined'>
               Order
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FoodItem;