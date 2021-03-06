import React /* , { useState } */ from 'react'

import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import RoundButton from '../translations/RoundButton'
import Translations from '../translations/RoundButtonsBlock'

// import clsx from 'clsx'
// import IconButton from '@material-ui/core/IconButton'
// import Collapse from '@material-ui/core/Collapse'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  materialEvent: {
    boxShadow: '0px 1px 5px lightgrey',
    margin: 5,
    padding: 5,
    position: 'relative',
    display: 'block',
  },
  firstLine: {
    position: 'relative',
  },
  secondLine: {
    position: 'relative',
    paddingLeft: 36,
  },
  translations: {
    position: 'absolute',
    right: 5,
    bottom: 1,
  },

  title: {
    display: 'inline',
    marginLeft: 5,
  },
  actions: {
    position: 'absolute',
    top: 1,
    // right: 20,
    right: 8,
    color: theme.palette.grey[400],
    fontSize: 10,
  },
  /* 
  detailedInfoExpand: {
    position: 'absolute',
    top: -8,
    right: 2,
    height: 20,
    width: 20,
    zIndex: 20
  },
  detailedInfo: {
    backgroundColor: theme.palette.grey[100],
    minHeight: 200,
    marginTop: 10,
    padding: 20
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
   */
}))

const Event = (props) => {
  const history = useHistory()
  const classes = useStyles()
  // const [expanded, setExpanded] = useState(false)

  const onTranslationClick = (materialId, trLang) => (event) => {
    history.push(`material/${materialId}/${trLang}`)
  }

  const onEventClick = (event) => {
    history.push(`material/${props.materialId}`)
  }

  const { actions = [] } = props

  return (
    <div style={{ position: 'relative' }}>
      <ButtonBase component='div' onClick={onEventClick} className={classes.materialEvent}>
        <Typography className={classes.actions} variant='body2'>
          {actions.join(', ')}
        </Typography>
        {/* 
      <div className={classes.detailedInfoExpand}>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          size='small'
          edge='start'
          onClick={() => setExpanded(!expanded)}
        >
          <ExpandMoreIcon />
        </IconButton>
      </div>
       */}
        <div className={classes.firstLine}>
          <RoundButton
            lang={props.lang}
            size={30}
            color='skyblue'
            materialId={props.materialId}
            trLang={''}
            onClick={() => {}}
          />
          <Typography className={classes.title} variant='body1'>
            {props.title}
          </Typography>
        </div>
        <div className={classes.secondLine}>
          <Typography color='textSecondary' variant='body2'>
            {props.trTitle}
          </Typography>
        </div>
        {/* 
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <div className={classes.detailedInfo}>
          <Typography variant='body2'>detailed info about updates</Typography>
        </div>
      </Collapse>
       */}
      </ButtonBase>
      <div className={classes.translations}>
        <Translations
          onClick={onTranslationClick}
          materialId={props.materialId}
          activeLang={props.trLang}
          langs={props.translations}
          size={20}
          title='available translation'
        />
      </div>
    </div>
  )
}

export default Event
