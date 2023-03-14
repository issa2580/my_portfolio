import React from 'react'
import Box from '@mui/material/Box'
import Link from 'next/link'
import Image from 'next/image'
import LOGO from '@/assets/images/logo.png'
import Typography from '@mui/material/Typography'
import { NavLinks } from '@/app/config'

const linkStyle = {
    content: '0 counter(item) .',
    marginRight: '5px',
    color: '#64ffda',
    fontSize: '14px',
    textAlign: 'right',
}as const

const Navbar = () => {
  return (
    <Box 
      component='header'
      sx={{
        position: 'fixed',
        top: 0,
        backgroundColor: 'rgba(10, 25, 47, 0.85)',
        zIndex: 11,
        padding: '0px ,50px',
        width: '100%',
        height: '100px',
        filter: 'none !important',
        pointerEvents: 'auto !important',
        userSelect: 'auto !important',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
      }} >
        <Box 
          component='nav'
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            color: '#ccd6f6',
            fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
            counterReset: 'item 0',
            zIndex: 12,
          }} >
            <Box
              component='div' >
              <Link 
                href='#'
                style={{
                  color: '#64ffda',
                }}>
                <Image 
                  src={LOGO}
                  alt=''
                  style={{
                    width: '45px',
                    height: '45px',
                    display: 'inline-block',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    margin: '30px 50px',
                  }}
                />
              </Link>
            </Box>
            <Box
              component='div'
              sx={{
                display: 'flex',
                position: 'relative',
                left: '50%',
                alignItems: 'center',
                
              }} >
                <Typography component='ol' 
                  sx={{
                    padding: 0,
                    margin: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'row',
                  }} >
                  {NavLinks && NavLinks.map(({url, name}, i) => (
                    <Typography
                      component='li'
                      key={i}
                      sx={{
                        margin: '0 5px',
                        position: 'relative',
                        counterIncrement: 'item 1',
                        fontSize: '14px',
                        display: 'flex',
                        
                      }} >
                      <Link 
                        href={url}
                        style={{
                          padding: '10px',
                          // '& before': { ...linkStyle }
                        }} >
                        <Typography>{name}</Typography>
                      </Link>
                    </Typography>
                  ))}
                </Typography>

            </Box>
            <Box
              component='div' 
              sx={{
                display: 'flex',
                position: 'relative',
                left: '50%',
                alignItems: 'center',
              }}>
              <Link 
                href='#'
                target='_blank'
                style={{
                  fontSize: '14px',
                  marginLeft: '10px',
                }}>
                  Resume
              </Link>
              
            </Box>
        </Box>
       
      
    </Box>
  )
}

export default Navbar