import React, { useState } from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import { IoMenu } from 'react-icons/io5'
import { MdClear } from 'react-icons/md'

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false)
  const handleClick = () => {
    setBurgerStatus(burgerStatus ? false : true)
  }

  return (
    <Container>
      <Avatar style={{ color: 'white', backgroundColor: 'black' }}>DD</Avatar>

      <Menu>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
        <a href='https://drive.google.com/file/d/1Ib-t-6GE6aep4eOmL8f_hOC-uNBXH92f/view?usp=sharing'>
          Resume
        </a>
      </Menu>
      <RightMenu>
        <CustomMenu onClick={handleClick}></CustomMenu>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={handleClick}></CustomClose>
        </CloseWrapper>
        <li>
          <a href='#home'>Home </a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
        <li>
          <a href='https://drive.google.com/file/d/1Ib-t-6GE6aep4eOmL8f_hOC-uNBXH92f/view?usp=sharing'>
            Resume
          </a>
        </li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: absolute;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-right: 15px;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    color: white;
    // flex-wrap : nowrap;
  }

  @media (max-width: 863px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
  }
`

const CustomMenu = styled(IoMenu)`
  cursor: pointer;
  color: white;
  font-size: 24px;
`

const BurgerNav = styled.div`
  position: fixed;
  background-color: white;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  width: 300px;
  li {
    list-style-type: none;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
      color: black;
    }
  }
  padding: 20px;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 0.2s;
`

const CustomClose = styled(MdClear)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  text-align: right;
  font-size: 1.5em;
  color: black;
`
