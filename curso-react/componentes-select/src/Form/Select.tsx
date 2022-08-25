import { FC } from "react"

interface SelectProps {
  options: string[],
  value: string,
  setValue: Function
}

const Select:FC<SelectProps> = ({options, value, setValue}) => {

  return (
    <select value={value} onChange={({target}) => setValue(target.value)}>
      <option value="" disabled>Selecione</option>
      {options.map(option => <option key={option} value={option}>{option}</option>)}
    </select>
  )
}

export default Select
