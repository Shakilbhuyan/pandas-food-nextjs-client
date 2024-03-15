// components/Banner.js
import { Box, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
  return (
    <Box className="relative h-screen overflow-hidden">
      {/* Video background */}
    <video
        className="absolute z-0 w-full h-auto object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/my-video.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
        <Typography variant='h4'>Are You Hungry? Order Now on Pandas Food!</Typography>
        <button class="outline-none mt-3 border border-red-500 hover:bg-white hover:text-red-500 py-2 px-5 rounded">Order
</button>
      </div>
    </Box>
  );
};

export default Banner;
