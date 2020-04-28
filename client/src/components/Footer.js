import React from 'react'
import {FooterHolder, FooterItem} from '../styles/FooterStyle'


const Footer = () => (
  <FooterHolder>
    <FooterItem style={{display:'flex', justifyContent:'flex-end', borderRight: '2px solid #333'}}>Phone: (562) 544 - 0419</FooterItem>
    <FooterItem >Email: email@goeshere.com</FooterItem>
  </FooterHolder>
)

export default Footer