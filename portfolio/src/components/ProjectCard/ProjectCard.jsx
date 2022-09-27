import React from 'react'
import './projectCard.css'

export default function ProjectsCard(props) {
  return (
    <div className='project'>
    <img  src = { require( `./projectImg/project-${props.project}.png`) }  alt={props.name} />
    </div>
  )
}
