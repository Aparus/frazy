import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, isLoaded } from 'react-redux-firebase'
import firebase from '../firebase/firebase'
import { setMenuParameter } from '../store/menuActions'
import { CircularProgress } from '@material-ui/core'
import HeadingDrawerHOC from './HeadingDrawerHOC'

/**
 * this component loads data from Firebase
 * @param {} props
 */
function HeadingFirebaseHOC(props) {
  const { unitInfo, heading, setMenuParameter, unit } = props

  if (isLoaded(unitInfo, heading)) {
    if (unitInfo) {
      //may be unitInfo not exists
      const { title, author, logo, background } = unitInfo
      setMenuParameter(['title', title])
      setMenuParameter(['author', author])
      setMenuParameter(['heading', heading])
      setMenuParameter(['background', background])

      firebase
        .storage()
        .ref(logo)
        .getDownloadURL()
        .then(url => {
          setMenuParameter(['logo', url])
        })

      firebase
        .storage()
        .ref(background)
        .getDownloadURL()
        .then(url => {
          setMenuParameter(['background', url])
        })
    } else {
      //default heading when unit data not exists
      setMenuParameter(['title', unit])
      setMenuParameter(['author', 'There is no info for this unit. Please add it'])
    }

    return <HeadingDrawerHOC />
  } else {
    return <CircularProgress />
  }
}

const mapStateToProps = state => {
  const { unitInfo } = state.firestore.data
  const { heading } = state.firestore.ordered
  const { unit } = state.menu
  return { unitInfo, heading, unit }
}

const mapDispatchToProps = dispatch => {
  return {
    setMenuParameter: payload => dispatch(setMenuParameter(payload))
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => {
    // const { materialId } = props.match.params
    const { unit } = props
    return [
      { collection: 'units', doc: unit, storeAs: 'unitInfo' },
      {
        collection: 'materialInfo',
        where: [['unit', '==', unit]],
        storeAs: 'heading'
      } //[materialInfo]
    ]
  })
)(HeadingFirebaseHOC)
