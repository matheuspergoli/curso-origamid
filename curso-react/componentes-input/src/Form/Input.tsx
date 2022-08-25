import React from "react"
import { FC } from "react"

interface PropsInput {
  label: String,
  id: string,
  required: boolean,
  value: string,
  setValue: Function
}

const Input:FC<PropsInput> = ({label, id, value, setValue, required}) => {

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input 
      type="text" 
      name={id} 
      id={id} 
      value={value} 
      onChange={({target}) => setValue(target.value)}
      required={required} />
    </>
  )
}

export default Input
