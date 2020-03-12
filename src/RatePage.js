import React from 'react'
import { useCopyToClipboard } from 'react-use'

import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import withWidth, { isWidthUp, isWidthDown } from '@material-ui/core/withWidth'
import { Alert } from '@material-ui/lab'

import IconClear from '@material-ui/icons/Clear'
import IconCopy from '@material-ui/icons/AssignmentReturned'
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
  rateSelect: {
    marginTop: theme.spacing(2),
    minWidth: 80,
    maxWidth: 80,
  },
}))

export default withWidth()(function RatePage(props) {
  const [searchLocation, setSearchLocation] = React.useState(0)
  const [alphaSort, setAlphaSort] = React.useState(false)
  const [query, setQuery] = React.useState('')

  const [ratings, setRatings] = React.useState({})
  const [exported, setExported] = React.useState(false)
  const [exportedText, setExportedText] = React.useState('')

  const notablesList = React.useMemo(
    () => getNotablesList({ alphaSort, query, searchLocation }),
    [alphaSort, query, searchLocation]
  )

  function handleExport() {
    setExported(false)
    const rts = {}
    Object.keys(ratings).forEach(key => {
      if (ratings[key] && ratings[key] !== 'N/A') {
        rts[key] = ratings[key]
      }
    })
    setExportedText(JSON.stringify(rts))
    setExported(true)
  }

  const [snackOpen, setSnackOpen] = React.useState(false)

  function handleCloseSnackbar(event, reason) {
    if (reason === 'clickaway') return

    setSnackOpen(false)
  }

  const [copied, copyToClipboard] = useCopyToClipboard()

  React.useEffect(() => {
    if (copied.value || copied.error) {
      setSnackOpen(true)
    } else {
      setSnackOpen(false)
    }
  }, [copied])

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
          <Button variant="outlined" onClick={handleExport}>
            Export Ratings
          </Button>
        </Grid>
      </Grid>
      {exported && (
        <Grid container spacing={1}>
          <IconButton onClick={() => setExported(false)}>
            <IconClear />
          </IconButton>
          <Box flexGrow={1} mx={1}>
            <TextField
              value={exportedText}
              onClick={() => copyToClipboard(exportedText)}
              multiline
              variant="outlined"
              fullWidth
            />
          </Box>
          <IconButton onClick={() => copyToClipboard(exportedText)}>
            <IconCopy />
          </IconButton>
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
                  {isWidthDown('xs', props.width) && (
                    <FormControl
                      variant="outlined"
                      size="small"
                      className={classes.rateSelect}
                    >
                      <InputLabel>Rate it</InputLabel>
                      <Select
                        labelWidth={60}
                        value={ratings[passive.name] || 'N/A'}
                        onChange={e =>
                          setRatings(r => ({
                            ...r,
                            [passive.name]: e.target.value,
                          }))
                        }
                      >
                        <MenuItem value="N/A">N/A</MenuItem>
                        <MenuItem value="S">S</MenuItem>
                        <MenuItem value="A">A</MenuItem>
                        <MenuItem value="B">B</MenuItem>
                        <MenuItem value="C">C</MenuItem>
                        <MenuItem value="D">D</MenuItem>
                        <MenuItem value="E">E</MenuItem>
                        <MenuItem value="F">F</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                </Grid>
                {isWidthUp('sm', props.width) && (
                  <Grid item>
                    <FormControl
                      variant="outlined"
                      size="small"
                      className={classes.rateSelect}
                    >
                      <InputLabel>Rate it</InputLabel>
                      <Select
                        labelWidth={60}
                        value={ratings[passive.name] || 'N/A'}
                        onChange={e =>
                          setRatings(r => ({
                            ...r,
                            [passive.name]: e.target.value,
                          }))
                        }
                      >
                        <MenuItem value="N/A">N/A</MenuItem>
                        <MenuItem value="S">S</MenuItem>
                        <MenuItem value="A">A</MenuItem>
                        <MenuItem value="B">B</MenuItem>
                        <MenuItem value="C">C</MenuItem>
                        <MenuItem value="D">D</MenuItem>
                        <MenuItem value="E">E</MenuItem>
                        <MenuItem value="F">F</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                )}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {copied.value && (
        <Snackbar
          open={snackOpen}
          autoHideDuration={5000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            Copied to clipboard
          </Alert>
        </Snackbar>
      )}
      {copied.error && (
        <Snackbar
          open={snackOpen}
          autoHideDuration={5000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="error">
            Failed to copy to clipboard: {copied.error.message}
          </Alert>
        </Snackbar>
      )}
    </Container>
  )
})
