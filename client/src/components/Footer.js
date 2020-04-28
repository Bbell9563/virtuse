import React from 'react'
import {FooterHolder, FooterItem, atIcon} from '../styles/FooterStyle'


const Footer = () => (
  <FooterHolder>
    <FooterItem style={{fontFamily: 'Electrolize', borderRight:'1px solid black'}}>385.227.2091</FooterItem>
    <FooterItem style={{display:'flex'}}>
      <div style={{fontFamily: 'Electrolize'}}>LADASHTON</div>
      <div style={{fontSize:"16px"}}>@</div>
      <div style={{fontFamily: 'Electrolize'}}>GMAIL.COM</div>
    </FooterItem>
    <FooterItem style={{fontFamily: 'Electrolize', borderLeft:'1px solid black'}}>SANDY, UT</FooterItem>
  </FooterHolder>
)

export default Footer