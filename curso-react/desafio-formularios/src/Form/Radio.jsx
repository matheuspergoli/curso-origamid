function Radio({ pergunta, options, value, onChange, id, active}) {
  
  const styleFieldset = {
    margin: '0 0 20px 0'
  }

  const styleLegend = {
    fontSize: '25px',
    fontWeight: 'bold'
  }

  const styleLabel = {
    padding: '10px',
    fontFamily: 'monospace'
  }
  
  if (active === false) return null
  return (
    <fieldset style={styleFieldset}>
      <legend style={styleLegend}>{pergunta}</legend>
      {options.map((option) => (
        <label key={option} style={styleLabel}>
          <input type="radio" id={id} value={option} onChange={onChange} checked={value === option} />
          {option}
        </label>
      ))}
    </fieldset>
  )
}

export default Radio
