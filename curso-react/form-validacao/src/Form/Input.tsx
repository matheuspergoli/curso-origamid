import { FC, FocusEventHandler, ChangeEventHandler } from "react"

interface PropsInput {
  label: string,
  id: string,
  value: string,
  onBlur: FocusEventHandler,
  onChange: ChangeEventHandler
}

const Input:FC<PropsInput> = ({label, id, value, onChange, onBlur}) => {

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input 
      type="text" 
      name={id} 
      id={id} 
      onBlur={onBlur}
      value={value} 
      onChange={onChange} />
    </>
  )
}

export default Input