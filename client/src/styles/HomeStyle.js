import styled from 'styled-components'

export const HomeHeader = styled.div`
  font-size: 40px;
  font-family: 'Parisienne', cursive;
  font-weight: bolder;
  padding:2%;
  @media(max-width: 600px) {
    font-size: 30px;
  }
`
export const Holder = styled.div`
  margin: 2% 10%;
  @media(max-width: 600px) {
    margin: 2% 2%;
  }
`
export const Title = styled.div`
  text-align:center;
  padding:1%;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://dallasvoice.com/wp-content/uploads/2019/07/self-defense-header.jpg');
  display:flex;
  flex-direction: column;
  justify-content: center;
  @media(max-width: 600px) {
    margin: 2% 2%;
  }
  
`

export const Main = styled.div`
  font-family: 'Black Ops One';
  color:white;
  font-size: 30px;
  font-weight: bolder;
  @media(max-width: 600px) {
    font-size: 20px;
  }
`

export const Sub = styled.div`
  font-size: 70px;
  font-weight: bolder;
  margin-top: 2%;
  color: white;
  font-family: 'Orbitron';
  @media(max-width: 600px) {
    font-size: 40px;
  }
`

export const Option = styled.div`
  font-family: 'Electrolize';
  font-size: 20px;
  margin: 2%;
  display:flex
`