import React from 'react'

import { Button } from 'react-bootstrap'
import { FaPause, FaPlay } from 'react-icons/fa'


export default function PlayButton({currentStatus, setCurrentStatus}) {
    const displayIcon = () => currentStatus ? <FaPause/> : <FaPlay />
  
  return (
    <Button onClick={() => setCurrentStatus((currentStatus)=> ! currentStatus)} variant='danger'>
        {displayIcon()}
    </Button>
  )
}
