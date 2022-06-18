

import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

export const FullScreenLoading = () => {
  return (
    <Box 
        display='flex' 
        justifyContent='center' 
        alignItems='center' 
        height='calc(100vh - 200px)'
        width={'100vw'}
    >
        <Typography sx={{ mb: 3 }} variant="h2"  fontWeight={ 200 } fontSize={ 50 }>Espere por favor...</Typography>
        <CircularProgress thickness={ 2 } />
    </Box>
  )
}