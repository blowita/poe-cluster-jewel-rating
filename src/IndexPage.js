import React from 'react'

import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'

import IconAlphaSort from '@material-ui/icons/SortByAlpha'
import IconShuffled from '@material-ui/icons/Shuffle'

import IconButton from './IconButton'

import { getNotablesList } from './notables'

const useStyles = makeStyles(theme => ({
  searchBar: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  searchSelect: {
    minWidth: 100,
  },
  breakpointSelect: {
    minWidth: 120,
  },
  listWrapper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(1),
    height: '100%',
  },
  image: {
    width: 50,
    height: 50,
  },
  name: {
    color: theme.palette.type === 'dark' ? '#CAC2A8' : '#836D4D',
    fontWeight: 'bold',
  },
}))

const screenSizes = ['md', 'sm']

const breakpointOptions = {
  sm: [12, 6],
  md: [6, 4],
}

export default withWidth()(function IndexPage(props) {
  const [searchLocation, setSearchLocation] = React.useState(0)
  const [alphaSort, setAlphaSort] = React.useState(false)
  const [query, setQuery] = React.useState('')

  const notablesList = React.useMemo(
    () => getNotablesList({ alphaSort, query, searchLocation }),
    [alphaSort, query, searchLocation]
  )

  const [breakpoints, setBreakpoints] = React.useState({
    xs: 12,
    sm: 6,
    md: 4,
  })

  function handleChangeBreakpoint(e, size) {
    setBreakpoints(v => ({ ...v, [size]: e.target.value }))
  }

  const classes = useStyles()

  return (
    <Container component="main">
      <Grid
        container
        className={classes.searchBar}
        spacing={1}
        justify="center"
      >
        <Grid item>
          <FormControl
            variant="outlined"
            size="small"
            className={classes.searchSelect}
          >
            <InputLabel id="search-select-label">Search in</InputLabel>
            <Select
              labelId="search-select-label"
              labelWidth={80}
              value={searchLocation}
              onChange={e => setSearchLocation(e.target.value)}
            >
              <MenuItem value={0}>Stats</MenuItem>
              <MenuItem value={1}>Name</MenuItem>
              <MenuItem value={2}>Any</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            label="Regex search"
            aria-label="search notables using regex"
            value={query}
            onChange={e => setQuery(e.target.value)}
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item>
          <IconButton onClick={() => setAlphaSort(sort => !sort)}>
            {alphaSort ? <IconAlphaSort /> : <IconShuffled />}
          </IconButton>
        </Grid>
        <Grid item>
          {screenSizes.reduce(
            (node, size) =>
              node ||
              (isWidthUp(size, props.width) && (
                <FormControl
                  variant="outlined"
                  size="small"
                  className={classes.breakpointSelect}
                >
                  <InputLabel id="screensize-select-label">
                    Items per line
                  </InputLabel>
                  <Select
                    labelId="screensize-select-label"
                    labelWidth={120}
                    value={breakpoints[size]}
                    onChange={e => handleChangeBreakpoint(e, size)}
                  >
                    {breakpointOptions[size].map((item, key) => (
                      <MenuItem key={key} value={item}>
                        {12 / item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )),
            null
          )}
        </Grid>
      </Grid>
      <Grid container spacing={1} className={classes.listWrapper}>
        {notablesList.map((passive, idx) => (
          <Grid item key={idx} {...breakpoints}>
            <Paper variant="outlined" className={classes.card}>
              <Grid container direction="row" spacing={1}>
                <Grid item>
                  <img
                    src={passive.image}
                    alt={`${passive.name}`}
                    className={classes.image}
                  />
                </Grid>
                <Grid item xs container direction="column">
                  <Typography className={classes.name}>
                    {passive.name}
                  </Typography>
                  {passive.stats.map((stat, idy) => (
                    <React.Fragment key={idy}>
                      <Typography variant="caption">{stat}</Typography>
                    </React.Fragment>
                  ))}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
})
