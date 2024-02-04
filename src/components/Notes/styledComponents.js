import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 40px;
  background-color: #ffffff;
  font-family: 'Roboto';
`
export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 40px;
  color: #4c63b6;
  margin-bottom: 40px;
  @media screen and (max-width: 767px) {
    font-size: 25px;
    margin-bottom: 25px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  box-shadow: 0px 4px 16px 0px #475569;
  min-height: 200px;
  margin-bottom: 25px;
  padding: 30px;
  border-radius: 10px;
`

export const TitleInput = styled.input`
  border: none;
  outline: none;
  color: #334155;
  padding: 15px;
  width: 100%;
  margin-bottom: 10px;
  font-size: 15px;
`
export const TextInput = styled.textarea`
  border: none;
  outline: none;
  color: #334155;
  padding: 15px;
  width: 100%;
  margin-bottom: 10px;
  font-size: 15px;
`

export const Button = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  font-size: 16px;
  padding: 15px;
  text-align: center;
  width: 70px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;
`

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  min-height: 250px;
  width: 100%;
  padding-left: 0px;
  margin-left: 0px;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const ImageEl = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 15px;
  @media screen and (max-width: 767px) {
    height: 100px;
    width: 100px;
  }
`
export const NoHeading = styled.h1`
  color: #1e293b;
  font-size: 20px;
  font-family: 'Roboto';
  margin-bottom: 10px;
`
export const NoPara = styled.p`
  color: #475569;
  font-size: 15px;
  font-family: 'Roboto';
  margin-bottom: 10px;
`
