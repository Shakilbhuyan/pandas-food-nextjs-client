import Banner from '@/components/ui/Banner';
import Cuisine from '@/components/ui/Cuisine/Cuisine';
import FoodItem from '@/components/ui/FoodItem/FoodItem';
import TopRestaurant from '@/components/ui/TopRestaurant/TopRestaurant';
import React from 'react';

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <FoodItem></FoodItem>
      <Cuisine></Cuisine>
      <TopRestaurant></TopRestaurant>
    </div>
  );
};

export default Homepage;