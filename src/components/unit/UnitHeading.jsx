import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
// import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { setAppStateParams } from '../../store/appStateActions'
import { Link } from 'react-router-dom'
import orderBy from 'lodash/orderBy'
import { useDispatch, useSelector } from 'react-redux'

export default function UnitHeading(props) {
  const { heading } = useSelector(state => state.menu)
  const { trLang } = useSelector(state => state.pageContent)
  const dispatch = useDispatch()

  const headingOrdered = orderBy(heading, ['created.time'], ['asc'])

  const useStyles = makeStyles(theme => ({
    listItem: {
      paddingTop: 0,
      paddingBottom: 0,
      fontSize: '12px',
      lineHeight: 1
    }
  }))

  const classes = useStyles()

  const handleClick = () => {
    dispatch(setAppStateParams({ showHeadingDrawer: false }))
    // dispatch(clearCachedDocs())
  }

  return (
    <List>
      {headingOrdered.map(elem => {
        return (
          <ListItem
            component={Link}
            to={`/material/${elem._id}/${trLang}`}
            className={classes.listItem}
            button
            divider
            onClick={handleClick}
            key={`heading-${elem._id}`}
          >
            <ListItemText primary={elem.title} /* secondary={elem.title.ru} */ />
          </ListItem>
        )
      })}
    </List>
  )
}
