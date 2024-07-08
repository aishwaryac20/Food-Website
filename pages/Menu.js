import React from 'react';
import {MenuList} from '../data/data'
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
//import Layout from '../components/Layout/Layout'

const Menu = ()=> {
  return(
    <>
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {
          MenuList.map(menu => (
            <Card sx={{maxWidth:'390px',display:'flex',m:2}}>
              <CardActionArea>
                  <CardMedia sx={{minHeight:'400px'}} component={'img'}
                  src={menu.image} alt={menu.name}/>
                  <CardContent>
                    <Typography varient='h5' gutterBottom={'div'} >
                      {menu.name}
                    </Typography>
                    <Typography variant='body2'>
                      {menu.description}
                    </Typography>
                  </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </>
  )
}


export default Menu;
