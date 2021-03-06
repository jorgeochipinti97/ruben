import { Fullscreen } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { LayoutUser } from '../components/layout/LayoutUser'
import { FullScreenLoading } from '../components/ui'
import confetti from 'canvas-confetti'

export default function Home() {
  const [time, setTime] = useState(false)
  useEffect(() => {
    const int = setInterval(() => {
      setTime(true)
      clearInterval(int)
    }, 1200);
  }, [])

  useEffect(()=>{
    confetti({
      particleCount: 300,
      angle: 60,
      spread: 100,
      origin: { x: 0 }
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 300,
      angle: 120,
      spread: 100,
      origin: { x: 1 }
    });
  },[])
  const pics = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]

  return (
    <>
      <LayoutUser title={'Ruben Ochipinti'}>
        <Box display='flex' justifyContent='center'>

          <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <Typography align='center' variant='h3' sx={{ mt: 3 }}>Feliz día pitu, tus 4 hijos te desean lo mejor!</Typography>
            <Typography align='center' variant='subtitle1' sx={{ mt: 3 }}>Te regalamos esta página para que puedas llevar la docencia al siguiente nivel</Typography>
          </div>

        </Box>
        <Grid container>
          {!time
            ? (
              <FullScreenLoading />

            )
            : pics.map(e => (
              <Grid item xs={12} md={6} lg={6} xl={3} key={`${e}`}>
                <div data-aos="flip-right" data-aos-delay="300">
                  <Box display='flex' justifyContent='center' sx={{ m: 3 }}>
                    <Image src={e <= 29 || e == 36 || e == 37 || e == 38 || e == 39 ? `/${e}.jpeg` : `/${e}.png`} width={1150} height={1000} />
                  </Box>
                </div>
              </Grid>
            ))
          }
        </Grid>
      </LayoutUser>
    </>
  )
}
