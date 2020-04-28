import React from 'react'
import { HomeHeader, Holder, Option, Title, Main, Sub } from '../styles/HomeStyle'

export default class Home extends React.Component {

  render() {
    return (
      <>
        <Title>
          <div style={{backgroundColor:'rgba(45,45,45, 1)', margin: '0 30%', padding:'3%', borderRadius:'15px'}}>
            <Main>
              Some Sick Phrase ?
            </Main>
            <Sub>VIRTUS</Sub>
          </div>
        </Title>
        <div style={{margin: '2% 5%'}}>
          <div style={{fontFamily: 'Orbitron', color:'white', fontSize: '40px'}}>What We Offer</div>
          <div style={{color:'white', marginTop:'2%'}}>Services will go here</div>
        </div>

      </>
    )
  }
}