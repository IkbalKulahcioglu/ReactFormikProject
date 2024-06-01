import React from 'react'
import { useFormik } from 'formik';
import { basicSchemas } from '../schemas';
import {Link} from "react-router-dom"

const onSubmit = async (values, actions ) =>{

  await new Promise((resolve) => {
    setTimeout(resolve,1000)
  });
  actions.resetForm();
}

function GeneralForm() {
    const {values, handleChange,isSubmitting, handleSubmit, errors} = useFormik({
        initialValues: {
          email: '',
          age:'',
          password:'',
          confirmPassword:''
        },
        validationSchema:basicSchemas,
        onSubmit,
      });
      
  return (
    <form onSubmit={handleSubmit}>
        <div className="inputDiv">
            <label>Email</label>
            <input type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="Please enter your email"
            className={errors.email ? 'input-error' : ''}/>
            {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div className="inputDiv">
            <label>Age</label>
            <input type="number"
            value={values.age}
            onChange={handleChange}
            id="age"
            placeholder='Enter your age'
            className={errors.age ? 'input-error' : ''}/>
            {errors.age && <p className='error'>{errors.age}</p>}
        </div>
        <div className="inputDiv">
          <label>Password</label>
          <input type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder='Enter your password'
          className={errors.password ? 'input-error' : ''}/>
          {errors.password && <p className='error'>{errors.password}</p>}
        </div>
        <div className="inputDiv">
          <label>Password again</label>
          <input type='password'
          value={values.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          placeholder='Enter your password again'
          className={errors.confirmPassword ? 'input-error' : ''}/>
          {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
        </div>
        <button disabled={isSubmitting} type='submit'>Submit</button>
        <Link className="formLink" to="/portal"> Go to portal form </Link>
    </form>
  )
}

export default GeneralForm