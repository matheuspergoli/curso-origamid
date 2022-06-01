import React from 'react'

const Input = ({label, id, type, ...props}) => {
  return (
    <div style={{margin: '1rem 0'}}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...props} />
    </div>
  )
}

export default Input
