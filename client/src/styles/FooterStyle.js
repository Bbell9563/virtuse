import styled from 'styled-components'

export const FooterHolder = styled.div`{
  color: black;
  display: flex;
  justify-content:center;
  padding: 0.5% 0 0.5% 0; 
  @media(max-width: 600px) {
    padding: 3% 0 3% 0; 
  }
}`

export const FooterItem = styled.div`{
  margin: 1%;
  font-size: 16px;
  display: flex;
  padding: 0 1% 0 1%;
  @media(max-width: 600px) {
    font-size: 12px;
  }
}`

export const atIcon = styled.div`
  font-size: 16px;
  @media(max-width: 600px) {
    font-size: 10px;
  }
`