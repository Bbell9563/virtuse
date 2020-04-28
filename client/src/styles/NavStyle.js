import styled from 'styled-components'

export const NavHolder = styled.div`{
  padding: .5%;
  color:black;
  display:flex;
  justify-content: space-between;
  padding: 10px 3%;
  background-color: #111;
}`

export const style = {
  link:{
    color:'white',
    textDecoration:'none',
    fontWeight: 'bolder',
  }
}

export const ImageHolder = styled.div`
  margin: 0
`
export const IconDiv = styled.div`
  display:flex;
  text-decoration:none;
  color:black;
`

export const LoginLink = styled.div`
  padding:1%;
  width: 25%;
  margin: 1%;
  color: #bf2121;
  text-align:center;
  font-family: 'Orbitron';
  border-radius: 10px;
  border: 2px solid #bf2121;
  font-weight: bolder;
  text-decoration: none;
  &:hover{
    background-color: #bf2121;
    color: white !important;
  };
  @media(max-width: 600px) {
    font-size: 10px;
    width: 70%;
    padding:4%
  }
`

export const RegisterLink = styled.div`
  padding:1%;
  width: 25%;
  margin: 1%;
  color: #888;
  text-align:center;
  font-family: 'Orbitron';
  border-radius: 10px;
  border: 2px solid #888;
  font-weight: bolder;
  text-decoration: none;
  &:hover{
    background-color: #888;
    color: white !important;
  };
  @media(max-width: 600px) {
    font-size: 10px;
    width: 70%;
    padding:4%
  }
`