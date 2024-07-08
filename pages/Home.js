import React from 'react';
//import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
//import {Box,Typography} from '@mui/material';
const Home = () => {


  return (
    <>
      <div className='home' style={{ backgroundImage: 'url("https://th.bing.com/th/id/OIP.zUHvnrTWalY4hCyUNVZjqgHaE8?rs=1&pid=ImgDetMain")' }}>
        <div className='headerContainer'>
          <h1>Food Website</h1>
          <p>Best Food in India</p>
          <Link to='/menu'>
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </>
  )
}


export default Home
