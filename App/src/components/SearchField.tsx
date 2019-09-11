import * as React from 'react'
import { createStyles, Theme, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { fade } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { theme } from '../App'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto'
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 400
      }
    }
  })
)

export const SearchField = (props: {
  text: string
  onChange: (text: string) => void
}) => {
  const classes = useStyles(theme)

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          input: classes.inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={search => props.onChange(search.target.value)}
      />
    </div>
  )
}
