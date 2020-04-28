
import styled from 'styled-components'

const Button = styled.div`
  cursor: pointer;
  padding: 1%;
  text-align:center;
  border-radius: 10px;
  width:40%;
  font-weight:bolder;
`
export const ButtonGroup = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top: 2%
`

export const SubmitButton = styled(Button)`
  color: #333;
  border: 2px solid #333;
  &:hover{
    background-color: #333;
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
  font-family: 'Parisienne', cursive;
  font-weight: bolder;
`

export const Form = styled.form`
  margin: 5% 15%;
  background-color: rgba(105, 89, 100, .3);
  padding: 3%;
  border-radius: 10px;
`

export const FormInput = styled.input`
  border: none;
  border-radius: 10px;
  width:100%;
  padding:1%;
  margin-top: .5%;
  margin-bottom: 1%;
  font-size: 20px;
  outline:none;
`

export const FormArea = styled.textarea`
  border: none;
  border-radius: 10px;
  width:98%;
  padding:1%;
  margin-top: .5%;
  margin-bottom: 1%;
  font-size: 20px
  outline:none;
`
export const FormGroup = styled.div`
  display:flex;
  justify-content: space-between;
  width:100%
`