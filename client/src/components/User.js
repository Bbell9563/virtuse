import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider"
import { InfoHolder, ImageHolder, Name, Info, Label, AppointmentHolder, Nothing, Header, Edit, Delete , Other, Buttons} from '../styles/UserStyle'


class User extends React.Component {

  render() {
    const { auth: { user } } = this.props;
    return (
      <>
        <InfoHolder>
          <div style={{ display: 'flex', justifyContent: 'center' }} >
            <div>
              <ImageHolder>
                <img style={style.photo} src={user.image} />
              </ImageHolder>
              <Name>{user.name}</Name>
            </div>
          </div>
          <Other>
            <Label>Phone Number</Label>
            <Info>{user.phone}</Info>
            <Label>Email Address</Label>
            <Info>{user.email}</Info>
            <Label>Age</Label>
            <Info>{user.age}</Info>
            <Label>Gender</Label>
            <Info>{user.gender}</Info>
            <Label>Has A Concealed Carry?</Label>
            <Info>{user.concealed ? <>Yes</> : <>No</> }</Info>
          </Other>
          <Buttons>
            <Edit>Edit</Edit>
            <Delete>Delete</Delete>
          </Buttons>
        </InfoHolder>

        
      </>
    )
  }
}

export default class ConnectedUser extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <User {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}

const style = {
  photo: {
    width: '300px',
    height: '300px'
  }
}