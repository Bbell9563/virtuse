
import styled from 'styled-components'

export const Alert = styled.div`
  background-color: rgba(168, 37, 44, .7);
  width: 100%;
  padding-top: 1%;
  padding-bottom: 1%;
  color:white;
  text-align: center;
  font-family: 'Black Ops One';
`

const Button = styled.div`
  cursor: pointer;
  padding: 1%;
  text-align:center;
  border-radius: 10px;
  width:47%;
  font-family: 'Electrolize';
  font-weight: bolder;
  font-size: 20px;
`
export const ButtonGroup = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top: 2%;
  @media(max-width: 600px) {
    margin-top: 5%;
  }
`

export const SubmitButton = styled(Button)`
  color: #888;
  border: 2px solid #888;
  &:hover{
    background-color: #888;
    color: white;
  }
  
`
export const CancelButton = styled(Button)`
  color:#a8252c ;
  border: 2px solid #a8252c;
  text-decoration:none;
  &:hover{
    background-color: #a8252c;
    color: white;
  }
`
export const FormHeader = styled.div`
  text-align: center;
  font-size: 50px;
  font-weight: bolder;
  font-family: 'Orbitron';
  color:white;
`

export const Form = styled.form`
  margin: 1% 15%;
  border-radius: 10px;
  overflow:hidden;
  @media(max-width: 600px) {
    margin: 3% 3%;
  }
`

export const FormInput = styled.input`
  border: none;
  border-radius: 10px;
  width:98%;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  margin-top: .5%;
  margin-bottom: 1%;
  font-size: 20px;
  outline:none;
  font-family: 'Electrolize';
  @media(max-width: 600px) {
    font-size: 25px;
    padding-top: 3%;
    padding-bottom: 3%;
  }
`

export const FormArea = styled.textarea`
  border: none;
  border-radius: 10px;
  width:97%;
  padding:1%;
  margin-top: .5%;
  margin-bottom: 1%;
  font-size: 20px;
  outline:none;
  font-family: 'Electrolize';
`
export const FormGroup = styled.div`
  display:flex;
  justify-content: space-between;
  width:100%;
`
export const Label = styled.label`
  font-size: 16px;
  font-family: 'Electrolize';
  font-weight: bolder;
  color:white;
`