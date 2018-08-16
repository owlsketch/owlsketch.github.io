import React from 'react'
import Arrow from './Arrow'
import PropTypes from 'prop-types'

import './Navigation.scss'

function Navigation (props) {
  const projects = props.projects

  return (
    <div className="proj_nav_layer">
      <div className="proj_arrows">
        <Arrow direction="left" projects={projects} />
        <Arrow direction="right" projects={projects} />
      </div>
    </div>
  )
}

Navigation.propTypes = {
  projects: PropTypes.array
}

export default Navigation
