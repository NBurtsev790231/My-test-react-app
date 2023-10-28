import styled from 'styled-components';

export const ImageListWrapper = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 1100px;
justify-content: center;
margin: 10px auto; 
`;

export const ImageTextArea = styled.textarea`
  width: 300px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  resize: none;
  color: black;
  font-size: 16px;
  font-family: "Times New Roman", Times, serif;
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
  width: 300px;
  height: 235px;
  border-radius:10px;
`;

export const ImageItem = styled.div`
  position: relative;
  list-style: none;
  background-color: #f5f5f5;
  box-shadow: 0px 4px 4px 2px gray;
  border-radius: 5px;
  margin: 0px 10px 20px;
  padding: 10px 10px;
  width: 400px;
  height: 400px;
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
  width: 25px;
  height: 25px;
 }
`;

