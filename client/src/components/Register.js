import React from 'react'
import { FormInput, FormArea, Form, FormHeader, FormGroup, ButtonGroup, SubmitButton, CancelButton } from '../styles/FormStyle'
import { Link } from 'react-router-dom'

export default class Register extends React.Component {
  
  handleSubmit = (e) => {
    e.preventDefault()

  }

  render() {
    return (
      <Form>
        <FormHeader>Register</FormHeader>
        <FormGroup>
          <div style={{ width: '48%' }}>
            <label>First Name</label>
            <FormInput style={{ padding: '2%' }} type='text' />
          </div>
          <div style={{ width: '48%' }}>
            <label>Last Name</label>
            <FormInput style={{ padding: '2%' }} type='text' />
          </div>
        </FormGroup>

        <FormGroup>
          <div style={{ width: '34%' }}>
            <label>Email</label>
            <FormInput style={{ padding: '2%' }} type='text' />
          </div>

          <div style={{ width: '34%' }}>
            <label>Phone</label>
            <FormInput style={{ padding: '2%' }} type='text' />
          </div>
          <div style={{ width: '15%' }}>
            <label>Gender</label>
            <select style={{ width: '100%', fontSize: '28px', border: 'none' }} type='text' placeholder='Gender' >
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>
            </select>
          </div>

          <div style={{ width: '5%' }}>
            <label>Age</label>
            <FormInput style={{ padding: '15%' }} type='text' />
          </div>


        </FormGroup>
        <div>
          <label>Medical History</label>
          <FormArea style={{ padding: '2%' }} type='text' />
        </div>
        <FormGroup>
          <div style={{ width: '48%' }}>
            <label>Password</label>
            <FormInput style={{ padding: '2%' }} type='text' />
          </div>
          <div style={{ width: '48%' }}>
            <label>Password confirmation</label>
            <FormInput style={{ padding: '2%' }} type='text' />
          </div>
        </FormGroup>
        <ButtonGroup>
          <CancelButton as={Link} to='/'>Cancel</CancelButton>
          <SubmitButton onClick={this.handleSubmit}>Submit</SubmitButton>
        </ButtonGroup>

      </Form>
    )
  }
}