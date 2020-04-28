import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom'
import { NavHolder, style } from '../styles/NavStyle'

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <div onClick={ () => handleLogout(this.props.history) }>
          Log-Out
        </div>
      )
    } else {
      return (
        <div>
          <div>
            <Link to='/login' style={style.link}>
              Login
          </Link>
          </div>
          <div>
            <Link to='/register' style={style.link}>
              Register
          </Link>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <NavHolder>
        <div>
          <Link to='/' style={{...style.link, fontFamily: 'Parisienne', fontSize:'40px'}}>
            Shakti
        </Link>
        </div>
        <div>
          {this.rightNavItems()}
        </div>
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