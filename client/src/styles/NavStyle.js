import styled from 'styled-components'
import Sparkle from '../images/sparkles.jpg'

export const NavHolder = styled.div`{
  padding: .5%;
  color:black;
  display:flex;
  justify-content: space-between;
  padding: 10px 3%;
}`

export const style = {
  link:{
    color:'black',
    textDecoration:'none',
    fontWeight: 'bolder',
  }
}

export const ImageHolder = styled.div`
  margin: 0
`

export const LoginLink = styled.div`
  padding:1%;
  width: 25%;
  margin: 1%;
  color: #222;
  text-align:center;
  font-family: 'Electrolize';
  border-radius: 20px;
  border: 2px solid #333;
  font-family: 'Electrolize';
  text-decoration: none;
  &:hover{
    background-color: #333;
    color: white !important;
  }
`

export const RegisterLink = styled.div`
  padding:1%;
  width: 25%;
  margin: 1%;
  color: #222;
  text-decoration: none;
  font-family: 'Electrolize';
  text-align:center;
  border-radius: 20px;
  border: 2px solid #333;
  &:hover{
    background-color: #333;
    color: white !important;
  }
`