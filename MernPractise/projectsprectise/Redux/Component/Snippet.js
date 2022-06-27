import React from 'react'
import Form from './Form'
import {useSelector} from 'react-redux'

function Snippet() {
  const state = useSelector((a)=> a)

  return (
    <div>
      {state.name}
    </div>

  )
}

export default Snippet