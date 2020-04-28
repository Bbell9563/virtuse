import React from 'react'
import { FormInput, FormArea, Form, FormHeader, FormGroup, ButtonGroup, SubmitButton, CancelButton, Label, Alert } from '../styles/FormStyle'
import { Link } from 'react-router-dom'
import { AuthConsumer, } from "../providers/AuthProvider"

class Register extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const { auth: { handleRegister, }, history, } = this.props;
    var name = `${document.getElementById('firstName').value}${document.getElementById('lastName').value}`
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value
    var gender = document.getElementById('gender').value
    var age = document.getElementById('age').value
    var medical_history = document.getElementById('medical').value
    var password = document.getElementById('pass').value
    var passConfirm = document.getElementById('passConfirm').value
    var role = 'user'
    if (password === passConfirm) {
      handleRegister({
         email, password, phone, gender, medical_history, age, role, name
        }, history);
    }
    else {
      var alert = document.getElementById('alert')
      alert.innerHTML = 'Your Passwords Do Not Match'
      alert.style.display = 'block'
    }
  }

  render() {
    return (
      <div>
        <Alert id='alert' style={{display:'none'}}>Alert</Alert>
        <Form>
          <FormHeader>Register</FormHeader>
          <FormGroup>
            <div style={{ width: '48%' }}>
              <Label>First Name</Label>
              <FormInput id='firstName' type='text' />
            </div>
            <div style={{ width: '48%' }}>
              <Label>Last Name</Label>
              <FormInput id='lastName' type='text' />
            </div>
          </FormGroup>

          <FormGroup>
            <div style={{ width: '48%' }}>
              <Label>Email</Label>
              <FormInput id='email' type='text' />
            </div>

            <div style={{ width: '48%' }}>
              <Label>Phone</Label>
              <FormInput id='phone' type='text' />
            </div>
          </FormGroup>
          <FormGroup>
            <div style={{ width: '48%' }}>
              <Label>Gender</Label>
              <FormInput id='gender' />
            </div>
            <div style={{ width: '48%' }}>
              <Label>Age</Label>
              <FormInput id='age' type='text' />
            </div>


          </FormGroup>
          <div>
            <Label>Medical History</Label>
            <FormArea id='medical' type='text' />
          </div>
          <FormGroup>
            <div style={{ width: '48%' }}>
              <Label>Password</Label>
              <FormInput id='pass' type='password' />
            </div>
            <div style={{ width: '48%' }}>
              <Label>Password confirmation</Label>
              <FormInput id='passConfirm' type='password' />
            </div>
          </FormGroup>
          <ButtonGroup>
            <CancelButton as={Link} to='/'>Cancel</CancelButton>
            <SubmitButton onClick={this.handleSubmit}>Submit</SubmitButton>
          </ButtonGroup>

        </Form>
      </div>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}

