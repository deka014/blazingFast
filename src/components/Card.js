import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { MdBrightnessMedium } from 'react-icons/md'

function ProjectCard(proj) {
  const [darkMode, setDarkMode] = useState(false)
  const classes = useStyle({ darkMode: darkMode })
  return (
    <Card className={classes.root} raised='true'>
      <CardActionArea>
        <CardHeader
          className={classes.fontHeader}
          title={
            <Typography component='p' className={classes.type} variant='marasd'>
              {proj.title}
            </Typography>
          }
          // avatar={'P1'}
        ></CardHeader>
        <CardMedia
          component='img'
          src={proj.image}
          title={proj.alt}
        ></CardMedia>
        <CardContent>
          <Typography paragraph className={classes.content}>
            {proj.about}
          </Typography>
          <CardActions className={classes.flex}>
            {proj.github && (
              <Button
                href={proj.github}
                color='primary'
                variant='contained'
                size='small'
              >
                Github
              </Button>
            )}

            {proj.demo && (
              <Button
                href={proj.demo}
                color='secondary'
                variant='contained'
                size='small'
              >
                Demo
              </Button>
            )}

            <Button
              className={classes.dark}
              color='primary'
              size='medium'
              variant='contained'
              onClick={() =>
                darkMode ? setDarkMode(false) : setDarkMode(true)
              }
            >
              <MdBrightnessMedium size='1.4em'></MdBrightnessMedium>
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProjectCard

const useStyle = makeStyles((theme) => ({
  flex: { display: 'flex', justifyContent: 'space-between' },
  root: {
    backgroundColor: (props) => (props.darkMode ? ' #141414 ' : 'white'),
    color: (props) => (props.darkMode ? 'white' : ' #141414 '),
  },
  type: {
    fontSize: '1.1em',
    fontWeight: 700,
  },
  content: {
    textAlign: 'justify',
    textJustify: 'inter-word',
    fontSize: '1em',
    // textTransform: 'capitalize',
  },
  dark: {
    backgroundColor: (props) => (props.darkMode ? 'white' : 'black'),
    color: (props) => (props.darkMode ? 'black' : 'white'),
  },
}))
