import React from 'react'
import { Settings as SettingsIcon } from '@material-ui/icons'
import { Typography, Checkbox, Slider, makeStyles } from '@material-ui/core'
/* REDUX */
import { connect } from 'react-redux'
import { setPlayerSettings } from '../store/playerSettingsActions'

const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gridGap: '1px',
    justifyItems: 'center',
    alignItems: 'center'
  }
})

function PlayerSettings(props) {
  const classes = useStyles()

  const {
    showPlayer,
    showOriginalText,
    showTranslation,
    volume,
    playbackRate,
    dictationDelay,
    dictationRepeats
  } = props.playerSettings

  const { setPlayerSettings } = props

  const handleChange = (event, newValue) => {
    // console.log('event.target.id, newValue', event.target.id, newValue)
    setPlayerSettings([event.target.id, newValue])
  }

  return (
    <div style={{ margin: 10 }}>
      <Typography variant='h6'>
        <SettingsIcon style={{ marginTop: 5, fontSize: 17 }} /> Player settings
      </Typography>

      <Typography variant='subtitle1'>Display:</Typography>
      <div className={classes.grid}>
        <Typography variant='body2'>Show player</Typography>
        <Checkbox checked={showPlayer} id='showPlayer' onChange={handleChange} />

        <Typography variant='body2'>Show original text</Typography>
        <Checkbox checked={showOriginalText} id='showOriginalText' onChange={handleChange} />

        <Typography variant='body2'>Show translation</Typography>
        <Checkbox checked={showTranslation} id='showTranslation' onChange={handleChange} />
      </div>

      {/* 
      <Typography variant='subtitle1'>Playback:</Typography>
      <div className={classes.grid}>
        <Typography variant='body2'>Volume</Typography>
        <Slider
          defaultValue={volume}
          id='volume'
          onChange={handleChange}
          style={{ width: '80%' }}
        />

        <Typography variant='body2'>Playback rate</Typography>
        <Slider
          defaultValue={playbackRate}
          id='playbackRate'
          onChange={handleChange}
          style={{ width: '80%' }}
          valueLabelDisplay='on'
          step={0.25}
          min={0.25}
          max={2}
        />
      </div>
 */}

      <Typography variant='subtitle1'>Dictation:</Typography>
      <div className={classes.grid}>
        <Typography variant='body2'>Repeat count</Typography>

        <Slider
          defaultValue={dictationRepeats}
          id='dictationRepeats'
          onChange={handleChange}
          style={{ width: '80%' }}
          valueLabelDisplay='on'
          step={1}
          min={1}
          max={10}
        />

        <Typography variant='body2'>Delay between repeats (x phrase length)</Typography>
        <Slider
          defaultValue={dictationDelay}
          id='dictationDelay'
          onChange={handleChange}
          style={{ width: '80%' }}
          valueLabelDisplay='on'
          step={1}
          min={1}
          max={10}
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return { playerSettings: state.playerSettings }
}

const mapDispatchToProps = dispatch => {
  return {
    setPlayerSettings: payload => dispatch(setPlayerSettings(payload))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerSettings)
