import React from 'react'
import { useHistory } from 'react-router-dom'

import { Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import IconOff from '@material-ui/icons/ToggleOff'
import IconOn from '@material-ui/icons/ToggleOn'
import LightBulbIcon from '@material-ui/icons/EmojiObjectsOutlined'

import DarkModeContext from './DarkModeContext'

import IconButton from './IconButton'

const useStyles = makeStyles(theme => ({
  header: {
    border: 'solid 1px',
    padding: theme.spacing(1),
  },
}))

export default function Header() {
  const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext)

  const history = useHistory()

  const classes = useStyles()

  return (
    <header className={classes.header}>
      <Grid container>
        <Grid
          item
          xs={8}
          container
          alignItems="center"
          justify="flex-start"
          spacing={1}
        >
          <Grid item>
            <Button onClick={() => history.push('/')} variant="outlined">
              Index
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={() => history.push('/tiers')} variant="outlined">
              Tiers
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={() => history.push('/rate')} variant="outlined">
              Rate
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          container
          alignItems="center"
          justify="flex-end"
          spacing={1}
        >
          <Grid item>
            <LightBulbIcon />
          </Grid>
          <Grid item>
            <IconButton onClick={() => toggleDarkMode()}>
              {darkMode ? <IconOff /> : <IconOn />}
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </header>
  )
}
