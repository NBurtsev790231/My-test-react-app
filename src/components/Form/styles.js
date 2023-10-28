import styled from 'styled-components';

export const ContainerForm = styled.div`
display: flex;
justify-content: center;
max-width: 1100px;
margin: 0px auto;
`;


export const WrapperForm = styled.form`
padding: 20px;
margin-bottom: 5px;
border-radius: 5px;
background-color: #f5f5f5;
`;

export const LabelForm = styled.label`
margin: 0 auto;
padding: 5px;
display: block;
color: #064ba6;
font-size: 17px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-weight: 900;
`;

export const InputForm = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #186318;
  width: 300px;
`;

export const SectionForm = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: auto;
  height: 100px;
`;

export const TextForm = styled.textarea`
padding: 5px;
margin: 5px;
border-radius: 5px;
border: 2px solid #186318;
width: 300px;
height: auto; 
`;

export const ButtonForm = styled.button`
padding: 8px;
border-radius: 4px;
border: none;
background-color: #0077ff;
color: #ffffff;
float: right;
font-weight: bold;
`;

export const ErrorForm = styled.p`
  margin: 0 auto;
  display: block;
  color: red;
  font-size: 15px;
`;