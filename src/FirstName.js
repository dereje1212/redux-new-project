import React from 'react'
import{useSelector} from 'react-redux'
const FirstName = () => {
    const firstName= useSelector((state)=>state.firstName)
  return (
    <div>{firstName}</div>
  )
}

export default FirstName