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
import withWidth, { isWidthUp, isWidthDown } from '@material-ui/core/withWidth'

import IconAlphaSort from '@material-ui/icons/SortByAlpha'
import IconShuffled from '@material-ui/icons/Shuffle'

import IconButton from './IconButton'

import { getNotablesList } from './notables'
import userRatings, { users } from './ratings'

const useStyles = makeStyles(theme => ({
  searchBar: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  userSelect: {
    minWidth: 200,
  },
  ratingSelect: {
    minWidth: 80,
  },
  searchSelect: {
    minWidth: 100,
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
  rating: {
    marginTop: theme.spacing(1),
    width: 45,
    height: 45,
  },
}))

const ratingBaseOptions = ['ANY', 'N/A', 'S', 'A', 'B', 'C', 'D', 'E', 'F']

export default withWidth()(function TiersPage(props) {
  const [selectedUser, setSelectedUser] = React.useState(users[0])
  const [searchLocation, setSearchLocation] = React.useState(0)
  const [alphaSort, setAlphaSort] = React.useState(false)
  const [query, setQuery] = React.useState('')

  const [ratings, setRatings] = React.useState(userRatings[users[0]])

  const [ratingOptions, setRatingOptions] = React.useState(['ANY', 'N/A'])
  const [selectedRating, setSelectedRating] = React.useState(
    ratingBaseOptions[0]
  )

  const [importOpen, setImportOpen] = React.useState(false)
  const [importedText, setImportedText] = React.useState('')

  React.useEffect(() => {
    if (selectedUser === 'Import') {
      setImportOpen(true)
    } else {
      setImportOpen(false)
    }
    let rts = userRatings[selectedUser]
    const rtsOptions = { ANY: true, 'N/A': true }
    if (!rts) {
      if (importedText) {
        try {
          rts = JSON.parse(importedText)
        } catch (err) {
          rts = userRatings[users[0]]
        }
      } else {
        rts = userRatings[users[0]]
      }
    }
    Object.values(rts).forEach(rt => {
      rtsOptions[rt] = true
    })
    setRatingOptions(Object.keys(rtsOptions))
    setRatings(rts)
  }, [importedText, selectedUser])

  const notablesList = React.useMemo(
    () =>
      getNotablesList({ alphaSort, query, searchLocation }).filter(notable => {
        if (selectedRating === 'ANY') {
          return true
        }
        if (selectedRating === 'N/A') {
          return !ratings[notable.name]
        }
        return ratings[notable.name] === selectedRating
      }),
    [alphaSort, query, ratings, searchLocation, selectedRating]
  )

  const classes = useStyles()

  return (
    <Container component="main">
      <Grid
        container
        className={classes.searchBar}
        spacing={1}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <FormControl
            variant="outlined"
            size="small"
            className={classes.userSelect}
          >
            <InputLabel id="user-select-label">Rated by</InputLabel>
            <Select
              labelId="user-select-label"
              labelWidth={75}
              value={selectedUser}
              onChange={e => setSelectedUser(e.target.value)}
            >
              <MenuItem value="Import">Import</MenuItem>
              {users.map((user, key) => (
                <MenuItem key={key} value={user}>
                  {user}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl
            variant="outlined"
            size="small"
            className={classes.ratingSelect}
          >
            <InputLabel id="rating-select-label">Rating</InputLabel>
            <Select
              labelId="rating-select-label"
              labelWidth={55}
              value={selectedRating}
              onChange={e => setSelectedRating(e.target.value)}
            >
              {ratingOptions.map((rating, key) => (
                <MenuItem key={key} value={rating}>
                  {rating}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
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
      </Grid>
      {importOpen && (
        <Grid className={classes.searchBar}>
          <TextField
            label="Paste rating JSON here"
            value={importedText}
            onChange={e => setImportedText(e.target.value)}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
      )}
      <Grid container spacing={1} className={classes.listWrapper}>
        {notablesList.map((passive, idx) => (
          <Grid item xs={12} key={idx}>
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
                  {isWidthDown('xs', props.width) &&
                    ratings[passive.name] &&
                    ratings[passive.name] !== 'N/A' && (
                      <Paper className={classes.rating} variant="outlined">
                        <Typography align="center" variant="h4">
                          {ratings[passive.name]}
                        </Typography>
                      </Paper>
                    )}
                </Grid>
                {isWidthUp('sm', props.width) &&
                  ratings[passive.name] &&
                  ratings[passive.name] !== 'N/A' && (
                    <Grid item>
                      <Paper className={classes.rating} variant="outlined">
                        <Typography align="center" variant="h4">
                          {ratings[passive.name]}
                        </Typography>
                      </Paper>
                    </Grid>
                  )}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
})
