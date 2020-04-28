import React from 'react'
import {FooterHolder, FooterItem, AtIcon} from '../styles/FooterStyle'


const Footer = () => (
  <FooterHolder>
    <FooterItem style={{fontFamily: 'Electrolize', borderRight:'1px solid black',  width:'30%', display:'flex', justifyContent:'flex-end'}}>385.227.2091</FooterItem>
    <FooterItem style={{display:'flex'}}>
      <div style={{fontFamily: 'Electrolize'}}>LADASHTON</div>
      <AtIcon>@</AtIcon>
      <div style={{fontFamily: 'Electrolize'}}>GMAIL.COM</div>
    </FooterItem>
    <FooterItem style={{fontFamily: 'Electrolize', borderLeft:'1px solid black', width:'30%'}}>SANDY, UT</FooterItem>
  </FooterHolder>
)

export default Footer