import React from 'react'
import PropTypes from 'prop-types'

import Landing from './Landing'
import Article from './Article'

import './Project.scss'

function Project (props) {
  const project = props.project.toLowerCase()

  return (
    <React.Fragment>
      <section className="landing">
        <Landing project={project}/>
      </section>
      <section className="proj_article">
        <Article project={project}/>
      </section>
    </React.Fragment>
  )
}

Project.propTypes = {
  project: PropTypes.string
}

export default Project
