import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider"
import { NotAdminHolder, GoHome, Holder, Header, Menu, Options } from '../styles/AdminStyles'
import { Link } from 'react-router-dom'


class AdminPanel extends React.Component {

  componentDidMount() {
    this.changeValue('users', 'appointments')
  }

  changeValue = (id, ids) => {
    document.getElementById('users').style.backgroundColor = 'rgba(50,50,50, 0)'
    document.getElementById('appointments').style.backgroundColor = 'rgba(50,50,50, 0)'
    document.getElementById(id).style.backgroundColor = 'rgba(150,150,150, .1)'
  }

  render() {
    const { auth: { user } } = this.props
    return (
      <div>
        {user.role === 'admin' ?
          <Holder>
            <Header>Admin Panel</Header>
            <div style={{borderRadius:'10px', overflow:'hidden', backgroundColor:'rgba(50,50,50, .4)'}}>
              <Menu>
                <Options style={{ width: '50%' }} id='users' onMouseEnter={() => this.changeValue('users', 'appointments')}>
                  All Users
              </Options>
                <Options style={{ width: '50%' }} id='appointments' onMouseEnter={() => this.changeValue('appointments', 'users')}>
                  All Appointments
              </Options>
              </Menu>
              <div style={{ textAlign: 'center', padding: '2%', color:'white' }}>
                Nothing Works Yet
            </div>
            </div>
          </Holder>
          :
          <NotAdminHolder>
            <div>Sorry!</div>
            <div>But You Are Not An Admin</div>
            <div>Please Leave This Forbidden Place!</div>
            <GoHome as={Link} to='/'>Go Back To Home</GoHome>
          </NotAdminHolder>
        }
      </div>
    )
  }
}

export default class ConnectedAdminPanel extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <AdminPanel {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}