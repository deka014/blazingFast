import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Typed from 'typed.js'
import Fade from 'react-reveal/Fade'

import Container from '@material-ui/core/Container'

function Home() {
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      strings: ['Deep', 'Deka', 'Deepjyoti Deka'],
      typeSpeed: 100,
      backSpeed: 80,
      smartBackspace: false,
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      // to prevent memory leaks
      typed.current.destroy()
    }
  }, [])

  return (
    <Cover id='home'>
      <TextBox>
        <h1>
          Hello, my name is {''}
          <span ref={el} Style='color: red ;'></span>
        </h1>
      </TextBox>

      <ImgBox>
        <img width='300' src='/images/me.png' />
      </ImgBox>
    </Cover>
  )
}

export default Home

const Cover = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100vw;
  height: 80vh;
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  clip-path: polygon(0 0, 100% 0, 100% 150%, 0% 70%);
  // @media (max-width: 290px) {
  //   clip-path: none;
  // }
`

const TextBox = styled(Container)`
  font-size: 1em;
  span {
    margin-top: 5px;
    display: inline-block;
  }
  @media (max-width: 453px) {
    padding-bottom: 4em;
  }
`

const ImgBox = styled.div`
  position: absolute;
  right: 0;
  bottom: -8.5em;
  z-index: +11;
`

const Introduction = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`
