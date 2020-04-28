import styled from 'styled-components'

export const FooterHolder = styled.div`{
  color: black;
  display: flex;
  justify-content:space-between;
  padding: 1% 0 1% 0; 
  background-color: #111;
  color:white;
  @media(max-width: 600px) {
    padding: 3% 0 3% 0; 
  }
}`

export const FooterItem = styled.div`{
  font-size: 16px;
  display: flex;
  padding: 0 1% 0 1%;
  width: 50%;
  font-size: 20px;
  font-family: 'Black Ops One';
  @media(max-width: 600px) {
    font-size: 12px;
  }
}`
