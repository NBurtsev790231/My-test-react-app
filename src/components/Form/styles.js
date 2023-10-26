import styled from 'styled-components';

export const ContainerForm = styled.div`
display: flex;
justify-content: center;
`;

export const WrapperForm = styled.form`
padding: 20px;
border: 2px solid #7442c8;
border-radius: 5px;
`;

export const LabelForm = styled.label`
margin: 0px auto;
padding:5px;
display: block;
color:#064ba6;
font-size: 17px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-weight: bold;
`;

export const InputForm = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 5px;
  border: 2px solid #186318;
  width: 300px;
`;

export const SectionForm = styled.div`
  display: inline-block;
  vertical-align: middle;
  width:auto;
  height:115px;
`;

export const TextForm = styled.textarea`
border-radius: 5px;
border: 2px solid #186318;
width: 300px;  
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
  margin: 0 ;
  display: block;
  color:red;
`;