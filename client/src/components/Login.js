import React from 'react'
import { FormHeader, Form, FormInput, Label, SubmitButton, CancelButton, ButtonGroup } from '../styles/FormStyle'
import { Link } from 'react-router-dom'
import { AuthConsumer, } from "../providers/AuthProvider"

class Login extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }

  render() {
    return (
      <Form>
        <div style={{padding:'3%'}}>
          <FormHeader>Login</FormHeader>
          <Label>Email</Label>
          <FormInput id='email' style={{ padding: '1%' }} type='text' />
          <Label>Password</Label>
          <FormInput id='password' style={{ padding: '1%' }} type='password' />
          <ButtonGroup>
            <CancelButton as={Link} to='/'>Cancel</CancelButton>
            <SubmitButton onClick={this.handleSubmit} >Submit</SubmitButton>
          </ButtonGroup>
        </div>
      </Form>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}

