import { useField } from 'formik'
import React from 'react'

function CustomInput({label, ...props}) {
    const[field, meta] = useField(props)
    console.log(field)
    console.log(meta)
  return (
    <>
    <label>{label}</label>
    <input
    {...props}
    {...field}
    className={meta.error ? 'input-error' : ''}
    />
    {meta.error && <div className="error">{meta.error}</div>}
    </>
  )
}

export default CustomInput