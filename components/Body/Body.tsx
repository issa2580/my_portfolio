import React from 'react'
import { motion } from "framer-motion";
import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import Bridge from '@/assets/images/bridg.png';
import { display } from '@mui/system';

function Body() {
    return (
      <motion.div
      className="box"
      /**
       * Setting the initial keyframe to "null" will use
       * the current value to allow for interruptable keyframes.
       */
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}>
            <Typography sx={{
              fontSize: 150,
              fontWeight: 900,
              color: "white",
              textAlign: "center",
              marginTop: 10,
              fontFamily: "Poppins",
              textTransform: "uppercase",
              letterSpacing: 5,
            }}>

            Issa Diop
            </Typography>
            <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
            >
              <Typography sx={{
                fontSize: 15,
                fontWeight: 700,
                color: "white",
                textAlign: "center",
                fontFamily: "Poppins",
                textTransform: "uppercase",
                letterSpacing: 5,
              }}>
                frontend dev
              </Typography>
              <Divider 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid white',
                height: '20px',
                mx: '20px',
              }}
              />
              <Typography sx={{
                fontSize: 15,
                fontWeight: 700,
                color: "white",
                textAlign: "center",
                fontFamily: "Montserrat",
                textTransform: "uppercase",
                letterSpacing: 5,
              }}>
                backend dev
              </Typography>
              <Divider 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid white',
                height: '20px',
                mx: '20px',
              }}
              />
              <Typography sx={{
                fontSize: 15,
                fontWeight: 700,
                color: "white",
                textAlign: "center",
                fontFamily: "Montserrat",
                textTransform: "uppercase",
                letterSpacing: 5,
              }}>
                database manager
              </Typography>

            </Box>
        </motion.div>
      );
}

export default Body
