import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import styled from 'styled-components'
import { SiGmail, SiLinkedin, SiInstagram, SiSlack } from 'react-icons/si'
import { IoMdDocument } from 'react-icons/io'
import Fade from 'react-reveal/Fade'

function Contact() {
  const classes = useStyle()
  return (
    <Box id='contact' width='100vw' height='90vh' className={classes.root}>
      <Box component='h1' letterSpacing={6} pt={5}>
        Contact
      </Box>
      <Fade bottom>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='start'
          alignItems='center'
          mt={4}
          height='60vh'
        >
          <RightButton
            as='a'
            href='https://drive.google.com/file/d/1Ib-t-6GE6aep4eOmL8f_hOC-uNBXH92f/view?usp=sharing'
          >
            <IoMdDocument style={{ marginRight: '10px' }}></IoMdDocument>Resume
          </RightButton>
          <LeftButton as='a' href='mailto:deepjyotideka8@gmail.com'>
            <SiGmail style={{ marginRight: '10px' }}></SiGmail>Gmail
          </LeftButton>
          <RightButton
            as='a'
            href='https://www.linkedin.com/in/deepjyoti-deka-750816158/'
          >
            <SiLinkedin style={{ marginRight: '10px' }}> </SiLinkedin>
            Linkedin
          </RightButton>
          <LeftButton as='a' href='https://www.instagram.com/node.deepjyoti/'>
            <SiInstagram style={{ marginRight: '10px' }}></SiInstagram>Instagram
          </LeftButton>
          <RightButton as='a' href='https://slack.com/'>
            <SiSlack style={{ marginRight: '10px' }}></SiSlack>Slack
          </RightButton>
        </Box>
      </Fade>
    </Box>
  )
}

export default Contact

const useStyle = makeStyles((theme) => ({
  root: {
    color: 'white',
    background: '#141e30',
    background: '-webkit-linear-gradient(to right,#243b55, #141e30)',
    background: 'linear-gradient(to right,#243b55,#141e30)',
    clipPath: 'polygon(0 0, 134% 0, 100% 85%, 0% 100%)',
  },
  box: {
    // backgroundColor : 'red',
    // width: '100vw',
    // height: '100vh',
    paddingBottom: '4em',
    backgroundColor: (props) => (props.color ? props.color : 'pink'),
  },
  cardPadding: {
    padding: '0 3em',
  },
}))

const LeftButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 15px 8px;
  text-decoration: none;
`
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`
