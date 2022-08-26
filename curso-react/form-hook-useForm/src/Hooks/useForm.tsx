import React from "react"

const types: any = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido.'
  },
  
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido.'
  }
}

const useForm = (type: string) => {
  const [value, setValue] = React.useState('')  
  const [erro, setErro] = React.useState<null | string>(null)

  function validate(value: any) {
    if (value.length === 0) {
      setErro('Preencha um valor')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setErro(types[type].message)
      return false
    } else {
      setErro(null)
      return true
    }
  }

  function onChange({target}: any) {
    if (erro) {
      validate(target.value)
    }
    setValue(target.value)
  }

  return {
    erro,
    value,
    setValue,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value)
  }
}

export default useForm
