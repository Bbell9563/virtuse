import React from 'react'
import { FormInput, FormArea, Form, FormHeader, FormGroup, ButtonGroup, SubmitButton, CancelButton, Label, Alert } from '../styles/FormStyle'
import { Link } from 'react-router-dom'
import { AuthConsumer, } from "../providers/AuthProvider"

class Register extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const { auth: { handleRegister, }, history, } = this.props;
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value
    var gender = document.getElementById('gender').value
    var age = document.getElementById('age').value
    var concealed = document.getElementById('medical').checked
    var password = document.getElementById('pass').value
    var passConfirm = document.getElementById('passConfirm').value
    var role = 'user'
    var image = 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
    if (password === passConfirm) {
      handleRegister({
        email, password, phone, gender, concealed, age, role, name, image
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
        <Alert id='alert' style={{ display: 'none' }}>Alert</Alert>
        <Form>
          <FormHeader>Register</FormHeader>

          <div>
            <Label>Name</Label>
            <FormInput id='name' type='text' />
          </div>



          <div>
            <Label>Email</Label>
            <FormInput id='email' type='text' />
          </div>

          <div>
            <Label>Phone</Label>
            <FormInput id='phone' type='text' />
          </div>

          <FormGroup>
            <div style={{ width: '30%' }}>
              <Label>Gender</Label>
              <FormInput style={{ paddingTop: '3%', paddingBottom: '3%' }} id='gender' />
            </div>
            <div style={{ width: '30%' }}>
              <Label>Age</Label>
              <FormInput style={{ paddingTop: '3%', paddingBottom: '3%' }} id='age' type='text' />
            </div>
            <div style={{ width: '20%' , display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <div>
                <Label>Have A Concealed? </Label>
                <input type='checkbox' value='true' id='medical' />
              </div>
            </div>
          </FormGroup>

          <div>
            <Label>Password</Label>
            <FormInput id='pass' type='password' />
          </div>
          <div>
            <Label>Password confirmation</Label>
            <FormInput id='passConfirm' type='password' />
          </div>

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

