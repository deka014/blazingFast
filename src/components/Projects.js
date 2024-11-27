import React from 'react'
import { Box, Container, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ProjectCard from './Card'
import Fade from 'react-reveal/Fade'

let projDetails = [
  {
    title: 'Real Time Tracker',
    image: './images/rtds.jpg',
    about:
      'ML5-Object-Detector on COCO model was used for Object detection with Maps API. It was tested on several images from google to detect and frame the objects classes and return an array with a label and confidence. ',
    github: 'https://github.com/bbhupen/RTDS',
    // demo: 'https://assaminnovate.herokuapp.com/',
  },
  {
    title: 'ML Disease Detection',
    image: './images/healthai.jpg',
    about:
      'Health AI is an integrated platform for multipurpose assistance in the field of healthcare. The idea of this project is to build a platform that provides facilities like disease predictions based on symptoms or images and give the users easy diagnosis. ',
    github: 'https://github.com/deka014/healthAi',
    // demo: 'www',
  },
  {
    title: 'AWS Hosted Dynamic Blog',
    image: './images/frappeco.png',
    about:
      'Frappeco is a dynamic blog website hosted on AWS EC2 linux instance. It uses mongoDB as database and has login interace with email authentication , hashed passwords and rolling database stored cookies. It follows MVC architecture and uses EJS as templating engine.',
    // github: 'www',
    demo: 'https://frappeco.com/',
  },
]

function Projects() {
  const classes = useStyle()
  return (
    <Box id='projects' className={classes.box} component='div'>
      <Container maxWidth='md'>
        <Box component='h1' pt={6} letterSpacing={6}>
          Projects
        </Box>
      </Container>
      <Fade bottom>
        <Box component='div' mt={9} mx='2rem'>
          <Grid
            container
            // justifyContent
            spacing={3}
            justifyContent='space-evenly'
          >
            {projDetails.map((project, id) => {
              return (
                <Grid key={id} item sm={12} xs={12} md={4}>
                  <ProjectCard {...project}></ProjectCard>
                </Grid>
              )
            })}
          </Grid>
        </Box>
        <Box mt={6}>
          <Button
            href={'https://github.com/deka014?tab=repositories'}
            size='large'
            variant='outlined'
          >
            View All Projects
          </Button>
        </Box>
      </Fade>
    </Box>
  )
}

export default Projects

const useStyle = makeStyles((theme) => ({
  box: {
    // backgroundColor : 'red',
    // width: '100vw',
    // height: '100vh',
    paddingBottom: '4em',
    backgroundColor: 'pink',
  },
  cardPadding: {
    padding: '0 3em',
  },
}))
