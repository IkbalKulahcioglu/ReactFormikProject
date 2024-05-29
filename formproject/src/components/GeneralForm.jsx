import React from 'react'
import { useFormik } from 'formik';

function GeneralForm() {
    const {values, handleChange, handleSubmit, errors} = useFormik({
        initialValues: {
          email: '',
          age:'',
          password:'',
          confirmPassword:''
        },
      });
      
  return (
    <form>
        <div className="inputDiv">
            <label>Email</label>
            <input type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="Please enter your email"/>
        </div>
        <div className="inputDiv">
            <label>Age</label>
            <input type="number"
            value={values.age}
            onChange={handleChange}
            id="age"
            placeholder='Enter your age'/>
        </div>
        <div className="inputDiv">
          <label>Password</label>
          <input type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder='Enter your password'/>
        </div>
        <div className="inputDiv">
          <label>Password again</label>
          <input type='password'
          value={values.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          placeholder='Enter your password again'/>
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default GeneralForm