import { FC, FocusEventHandler } from "react"

interface PropsInput {
  label: string,
  id: string,
  value: string,
  setValue: Function,
  onBlur: FocusEventHandler
}

const Input:FC<PropsInput> = ({label, id, value, setValue, onBlur}) => {

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input 
      type="text" 
      name={id} 
      id={id} 
      onBlur={onBlur}
      value={value} 
      onChange={({target}) => setValue(target.value)} />
    </>
  )
}

export default Input