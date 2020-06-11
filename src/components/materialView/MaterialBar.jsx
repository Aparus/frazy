import React from 'react'
import Fab from '@material-ui/core/Fab'
import MenuIcon from '@material-ui/icons/Menu'
import SettingsIcon from '@material-ui/icons/Settings'
import HelpIcon from '@material-ui/icons/Help'
import EditIcon from '@material-ui/icons/Edit'
import HomeIcon from '@material-ui/icons/Home'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import ButtonWithAuthPopover from '../auth/ButtonWithAuthPopover'
import { setAppStateParams } from '../../store/appStateActions'
import { loginDialog as local } from '../../localization/en'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles(theme => ({
  bottom: {
    position: 'fixed',
    bottom: 2,
    zIndex: 5
  },
  menu: {
    left: 3
  },
  home: {
    left: 58
  },
  settings: {
    right: 3
  },
  help: {
    right: 55
  },
  edit: {
    right: 110
  }
}))

function Appbar(props) {
  const dispatch = useDispatch()
  const { editMode } = useSelector(state => state.appState)
  const classes = useStyles()

  const toggleEditMode = () => {
    dispatch(setAppStateParams({ editMode: !editMode }))
  }

  return (
    <div>
      <Fab
        className={`${classes.bottom} ${classes.menu}`}
        onClick={() => {
          dispatch(setAppStateParams({ showHeadingDrawer: true }))
        }}
        color='primary'
        size='medium'
      >
        <MenuIcon />
      </Fab>

      <Fab
        className={`${classes.bottom} ${classes.home}`}
        component={Link}
        to='/'
        color='primary'
        size='medium'
      >
        <HomeIcon />
      </Fab>

      <Fab className={`${classes.bottom} ${classes.help}`} color='primary' size='medium'>
        <HelpIcon />
      </Fab>
      <div className={`${classes.bottom} ${classes.edit}`}>
        <ButtonWithAuthPopover
          actionOnSuccess={toggleEditMode}
          message={local.loginButtonMessageForEditMaterial}
          buttonIcon={<EditIcon />}
        />
      </div>

      <Fab
        className={`${classes.bottom} ${classes.settings}`}
        onClick={() => {
          dispatch(setAppStateParams({ showSettingsDrawer: true }))
        }}
        color='primary'
        size='medium'
      >
        <SettingsIcon />
      </Fab>
    </div>
  )
}

export default Appbar
