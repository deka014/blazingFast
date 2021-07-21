import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header'
// import { makeStyles } from '@material-ui/core';
// import { StylesProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      {/* <Second></Second> */}
    </div>
  )
}

export default App
