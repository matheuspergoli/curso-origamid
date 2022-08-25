import { FC } from "react"

interface CheckboxProps {
  options: string[],
  value: string[],
  setValue: Function
}

const Checkbox:FC<CheckboxProps> = ({options, value, setValue}) => {
  function handleChange({target}: any) {
    if (target.checked) {
      setValue([...value, target.value])
    } else {
      setValue(value.filter(itemValue => itemValue !== target.value))
    }
  }

  return (
    <>
      {options.map(option => (
        <label key={option}>
          <input 
          type="checkbox"
          value={option}
          checked={value.includes(option)}
          onChange={handleChange} />
          {option}
        </label>
      ))}
    </>
  )
}

export default Checkbox
