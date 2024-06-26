import React from 'react'
import { useField } from 'formik'

function CustomSelect({label, ...props}) {
    const[field, meta] =useField(props)
  return (
    <>
    <label>{label}</label>
    <select {...props}
    {...field}
    className={meta.error ? 'input-error' : ''}/>
    {meta.error && <div className='error'>{meta.error}</div>}
    </>
  )
}

export default CustomSelect