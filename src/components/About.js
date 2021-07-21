import React from 'react'
import styled from 'styled-components'
import { Container, Grid, Box } from '@material-ui/core'
import { IoLogoJavascript, IoLogoPython } from 'react-icons/io'
import {
  SiCplusplus,
  SiReact,
  SiDocker,
  SiMongodb,
  SiAmazonaws,
  SiGithub,
  SiTensorflow,
} from 'react-icons/si'
import Fade from 'react-reveal/Fade'

function About() {
  return (
    <Section id='about'>
      <TextBox>
        <Box component='h1' letterSpacing={6}>
          About
        </Box>
        <Fade bottom>
          <Container maxWidth='md'>
            <p Style={'margin : 4em 0 ; font-weight:500 ; line-height : 2em;'}>
              I am a Computer Science Engineering Student with interest in
              web-development , ML and IOT . My current work stacks are MERN ,
              Tensorflow , Javascript and Python. I first started my coding
              journey with web but as i dived deep into different programming
              languages and their libraries and frameworks , my focus inclined
              more on open-sourcing , developing applications , API's and
              Machine Learning models which can be integrated onto browsers as
              interface while solving real life problems.
            </p>
          </Container>
          <Grid
            m={4}
            container
            alignContents='space-between'
            justifyContent='space-between'
            spacing={4}
          >
            <Grid item xs={4}>
              <IoLogoJavascript size='3em'></IoLogoJavascript>
            </Grid>
            <Grid item xs={4}>
              <SiReact size='3em'></SiReact>
            </Grid>
            <Grid item xs={4}>
              <SiDocker size='3em'></SiDocker>
            </Grid>
            <Grid item xs={4}>
              <IoLogoPython size='3em'></IoLogoPython>
            </Grid>
            <Grid item xs={4}>
              <SiCplusplus size='3em'></SiCplusplus>
            </Grid>
            <Grid item xs={4}>
              <SiMongodb size='3em'></SiMongodb>
            </Grid>
            <Grid item xs={4}>
              <SiAmazonaws size='4em'></SiAmazonaws>
            </Grid>
            <Grid item xs={4}>
              <SiGithub size='3em'></SiGithub>
            </Grid>
            <Grid item xs={4}>
              <SiTensorflow size='3em'></SiTensorflow>
            </Grid>
          </Grid>
        </Fade>
      </TextBox>
    </Section>
  )
}

export default About

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: #d9d9d9;
`

const TextBox = styled.div`
  // background-color : yellow;
  margin: 4em 0;
  z-index: +12;
  position: relative;
  // max-width : 50vw;
  // display : flex;
  // flex-direction : column;
`
