import React from 'react'

export default class Login extends React.Component{

  render(){
    return(
      <form>
        <div>
          <label>Email</label>
          <input type='text'/>
        </div>
        <div>
          <label>Password</label>
          <input type='text'/>
        </div>
      </form>
    )
  }
}