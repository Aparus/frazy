import React, { useEffect } from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { getDownloadUrlById } from '../../utils/firebase'
import { setMenuParameters } from '../../store/menuActions'

export default function Heading(props) {
  const { trLang } = useSelector(state => state.appState)
  const dispatch = useDispatch()

  const {
    unit: {
      title,
      author,
      lang,
      description,
      logo = 'default-files/default-logo.png',
      background = 'default-files/default-background.jpg'
    }
  } = useSelector(state => state.data) || {}

  const { logoUrl, backgroundUrl } = useSelector(state => state.menu)

  useEffect(() => {
    const getAsyncUrls = async () => {
      console.log('logo, bckg', logo, background)
      const [logoUrl, backgroundUrl] = await getDownloadUrlById([
        logo ? logo : 'default-files/default-logo.png',
        background ? background : 'default-files/default-background.jpg'
      ])
      dispatch(setMenuParameters({ logoUrl, backgroundUrl }))
    }
    if (!(logoUrl && backgroundUrl)) getAsyncUrls()
  }, [logo, background])

  const {
    unitTranslations: {
      [trLang]: { title: trTitle, author: trAuthor, description: trDescription } = {}
    }
  } = useSelector(state => state.data) || {}

  const useStyles = makeStyles(theme => ({
    header: {
      textAlign: 'center',
      padding: 20,
      backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.7)), url(${backgroundUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'round',
      backgroundPosition: 'center center'
    }
  }))

  const classes = useStyles()

  const Title = props => {
    const { title, lang, author } = props
    return (
      <>
        <Typography variant='h6'>{title}</Typography>
        <Typography variant='body2' style={{ marginTop: -11 }} color='primary'>
          {lang}
        </Typography>
        <Typography variant='subtitle1' style={{ marginTop: -7 }}>
          {author}
        </Typography>
      </>
    )
  }

  return (
    <div className={classes.header}>
      <Title {...{ title, lang, author }} />
      {logoUrl && <img style={{ maxWidth: 200, borderRadius: 100 }} alt={title} src={logoUrl} />}
      <Title {...{ title: trTitle, lang: trLang, author: trAuthor }} />
      <div style={{ textAlign: 'left' }}>
        {description && (
          <>
            <hr />
            <Typography variant='body1'>{description}</Typography>
          </>
        )}
        {trDescription && (
          <>
            <hr />
            <Typography variant='body1'>{trDescription}</Typography>
          </>
        )}
      </div>
    </div>
  )
}
