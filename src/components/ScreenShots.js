import React from 'react'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './ScreenShots.css'

const ScreenShots = (props) => {

  const screens = { ...props.location.screens }
  console.log(screens.short_screenshots.map(screen => screen.image))
  return (
    <>
      <div>
        <Link to="/"><button className="buttonFilter">Retour</button></Link>
        <div className="displayScreenShots">
          {
            screens.short_screenshots.map(screen =>
              <div className="screen"><img src={screen.image} alt={screen.id} className="gameImage" /></div>
            )
          }
        </div>
      </div>
    </>
  )
}
export default ScreenShots