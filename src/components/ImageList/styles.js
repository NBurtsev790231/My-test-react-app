import styled from 'styled-components';

export const ImageListWrapper = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 1500px;
justify-content: center;
margin:10px auto;
border: 2px solid #7442c8;
`;

export const ImageTextArea = styled.textarea`
  width:340px;
  height:60px;
  background-color: white;
  border:none;
  resize: none;
  color:black;
  font-size:16px;
  font-family: "Times New Roman", Times, serif;
  border: 1px solid #000000;
`;

export const ImageName = styled.h1`
  font-size:24px;
  margin:0px 0px 10px;
  width:330px;
  height:55px;
  overflow: hidden; 
  word-wrap: break-word;
`;

export const ImageDate = styled.h2`
  font-size:18px;
  color:gray;
  margin:0px 0px 10px;
a{
  color:black;
}
`;


export const ImagePhoto = styled.img`
  width: 450px;
  height: 325px;
  border-radius:10px;
  border: 1px solid #000000;
`;

export const ImageItem = styled.div`
  position: relative;
  list-style: none;
  background-color: white;
  box-shadow: 0px 2px 2px 2px gray;
  border-radius: 5px;
  margin:0px 10px 20px;
  padding:10px 10px;
  width: 500px;
  height: 500px;
`;

export const DeleteImage = styled.button`
  position: absolute;
  right: 5px;
  background-color: rgba(0,0,0,0);
  border: none;
  width: 10px;

 & img {
  position: absolute;
  right: 5px;
  width: 30px;
  height: 30px;
 }
`;

