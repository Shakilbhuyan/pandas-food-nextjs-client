"use client"
import { Table, TableBody, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const TopRestaurant = () => {
    // This is for Table style
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
    
    return (
        <div>
             <Typography className='text-red-900 my-3 text-center' variant='h3'>~~~ Top Restaurent ~~~</Typography>
             <TableContainer className='p-6' component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Restaurant Name</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right">Rating</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              Handi Restaurant
              </StyledTableCell>
              <StyledTableCell align="right">1st Floor, 1552 O.R. Nizam Road, Chattogram 4000.</StyledTableCell>
              <StyledTableCell align="right">
              <StarRatings
        rating={parseFloat(4.2)}
        starRatedColor="blue"
        numberOfStars={5}
        name='rating'
      />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              Ambrosia
              </StyledTableCell>
              <StyledTableCell align="right">1223 CDA Avenue, East Nasirabad, Chattogram 4203.</StyledTableCell>
              <StyledTableCell align="right">
              <StarRatings
        rating={parseFloat(4.4)}
        starRatedColor="blue"
        numberOfStars={5}
        name='rating'
      />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              The Peninsula Chittagong
              </StyledTableCell>
              <StyledTableCell align="right"> 486/B O.R. Nizam Road, Chattogram 4100.</StyledTableCell>
              <StyledTableCell align="right">
              <StarRatings
        rating={parseFloat(4.5)}
        starRatedColor="blue"
        numberOfStars={5}
        name='rating'
      />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              Mezettont
              </StyledTableCell>
              <StyledTableCell align="right"> 1st Floor, 1552 O.R. Nizam Road, Chattogram 4000</StyledTableCell>
              <StyledTableCell align="right">
              <StarRatings
        rating={parseFloat(4.3)}
        starRatedColor="blue"
        numberOfStars={5}
        name='rating'
      />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              Handi Restaurant
              </StyledTableCell>
              <StyledTableCell align="right">1st Floor, 1552 O.R. Nizam Road, Chattogram 4000.</StyledTableCell>
              <StyledTableCell align="right">
              <StarRatings
        rating={parseFloat(3.9)}
        starRatedColor="blue"
        numberOfStars={5}
        name='rating'
      />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              Handi Restaurant
              </StyledTableCell>
              <StyledTableCell align="right">1st Floor, 1552 O.R. Nizam Road, Chattogram 4000.</StyledTableCell>
              <StyledTableCell align="right">
              <StarRatings
        rating={parseFloat(4.2)}
        starRatedColor="blue"
        numberOfStars={5}
        name='rating'
      />
              </StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default TopRestaurant;