import React from 'react'
import styles from "./Input.module.css"

function Input({ label, type, name, value, onChange, onBlur, error }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input 
      className={styles.input} 
      type={type} 
      id={name} 
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={onChange} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input