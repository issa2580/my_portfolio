'use client'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Body from "@/components/Body/Body"
import Navbar from "@/components/Navbar.tsx/Navbar"

const images = [
  '/images/tst3.jpg',
  '/images/pic1.svg',
  '/images/pic2.svg',
  '/images/pic3.svg',
];

export default function Home() {

  const bg = {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    transition: 'background-image 1s ease-in-out',
    minHeight: '100vh',
  }

  const fadeInOut = {
    animationName: '$fadeInOut',
    animationDuration: '1s',
    animationTimingFunction: 'linear',

  '@keyframes fadeInOut': {
    '0%': {
      opacity: 0,
      transform: 'translateY(5px)',
    },
    '50%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
    '100%': {
      opacity: 0,
      transform: 'translateY(-5px)',
    },
  }
  }

  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex(prevIndex => (prevIndex + 1) % images.length);
        setIsAnimating(false);
      }, 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[index]})`,
    animation: isAnimating ? `${{...fadeInOut}} 1s linear` : '',
  };

    return (
      <Box sx={{...bg}} style={backgroundImageStyle}>
        tsttst
      </Box>
    )
}
