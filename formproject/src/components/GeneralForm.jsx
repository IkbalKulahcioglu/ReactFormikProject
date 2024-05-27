import React from 'react'
import { useFormik } from 'formik';

function GeneralForm() {
    const {values, handleChange, handleSubmit, errors} = useFormik({
        initialValues: {
          email: '',
          age:'',
          password:'',
        },
      });
      
  return (
    <form>
        <div>
            <label>Email</label>
            <input type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="Please enter your email"/>
        </div>
        <div>
            <label>Age</label>
            <input type="number"
            value={values.age}
            onChange={handleChange}
            id="age"
            placeholder='Enter your age'/>
        </div>
        
    </form>
  )
}

export default GeneralForm