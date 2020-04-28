import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom'
import { NavHolder, style, ImageHolder, LoginLink, RegisterLink } from '../styles/NavStyle'
import Logo from '../images/Logo.png'

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <div onClick={() => handleLogout(this.props.history)}>
          Log-Out
        </div>
      )
    } else {
      return (
        <div style={{ width: '50%', display: 'flex', flexDirection:'column', justifyContent:'center' }}>
          <div style={{ display: 'flex', justifyContent:'flex-end', padding:'1% 0 1% 0' }}>
            <LoginLink as={Link} to='/login'>
              Login
            </LoginLink>
            <RegisterLink as={Link} to='/register'>
                Register
            </RegisterLink>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <NavHolder>
        <div>
          <Link to='/'>
            <img src={Logo} style={{ width: '100px' }} />
          </Link>
        </div>
        {this.rightNavItems()}
      </NavHolder>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);