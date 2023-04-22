'use client'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Body from "@/components/Body/Body"
import Navbar from "@/components/Navbar.tsx/Navbar"

const images = [
  '/images/tst1.jpg',
  '/images/tst2.jpg',
  '/images/tst3.jpg',
];

export default function Home() {

  const bg = {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    transition: 'background-image 1s ease-in-out',
    minHeight: '100vh',
  }

  const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 6000);
      return () => clearInterval(interval);
    }, []);

    const backgroundImageStyle = { backgroundImage: `url(${images[index]})` };

    return (
      <Box sx={{...bg}} style={backgroundImageStyle}>
        tsttst
      </Box>
    )
}
