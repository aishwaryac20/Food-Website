import React from 'react'
//import Layout from '../components/Layout/Layout';
import { Table, Box, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
const Contact = () => {
  return (
    <>
      <Box sx={{
        my: 10, ml: 10, "& h4": {
          fontWeight: 'bold', mb: 2
        }
      }}>
        <Typography variant='h4'>
          contact My Resturant
        </Typography>
        <p>
          jgfuergb jrfgubf urgfu4fh rufg4urfh urfgrufb
        </p>
      </Box>
      <Box sx={{
        m: 3, width: '600px', ml: 10, "@media (max-width:600px)": {
          width: '300px'
        }
      }}>
        <TableContainer component={Paper}>
          <Table arial-lable="contact table">
            <TableHead>
              <TableRow>
                <TableCell>
                  Contact Detail
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> 1234567890(tollfree)
                </TableCell>

              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: 'Skyblue', pt: 1 }} /> abc@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <PhoneIcon sx={{ color: 'red', pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default Contact
