'use client'
import Body from "@/components/Body/Body"
import Navbar from "@/components/Navbar.tsx/Navbar"
import { Box } from "@mui/material"

export default function Home() {
  return (

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#0a192f',
      }}>
        <Navbar />
        <Body />
    </Box>

  )
}
