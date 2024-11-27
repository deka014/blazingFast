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
            I am software engineer with more than 1 year experience in FullStack development, I can build applications using Java, Spring Boot, Node.js, SQL, MongoDB, React while following microservices architectures/patters.

I thrive on solving problems, whether it’s optimizing system performance, enhancing security, or streamlining workflows through automation. My projects have spanned diverse domains, including payroll systems, expense management platforms, and machine learning-based applications, reflecting my commitment to continuous learning and adaptability.

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
  // z-index: +12;
  position: relative;
  // max-width : 50vw;
  // display : flex;
  // flex-direction : column;
`
