import { FC, FocusEventHandler, ChangeEventHandler } from "react"

interface PropsInput {
  label: string,
  id: string,
  erro: string | null,
  type: string,
  value: string,
  placeholder?: string,
  onBlur: FocusEventHandler,
  onChange: ChangeEventHandler
}

const Input:FC<PropsInput> = ({label, id, value, type, placeholder, erro, onChange, onBlur}) => {

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
      name={id} 
      id={id}
      type={type}
      value={value} 
      onBlur={onBlur}
      onChange={onChange} 
      placeholder={placeholder} />
      {erro && <p>{erro}</p>}
    </>
  )
}

export default Input