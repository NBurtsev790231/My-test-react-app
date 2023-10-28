/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useRef, useState } from 'react';

import { Form } from '../Form';

import { DeleteImage, ImageDate, ImageItem, ImageListContainer, ImageListWrapper, ImageName, ImagePhoto, ImageTextArea } from './styles';
//Импорт иконки как компонента
import  Delete from './img/icon-delete.png';

function DeleteImageComponent() {
  return <img src={Delete} alt='#'/>;
}

export default DeleteImageComponent;

//Реализация списка изображений
export const ImageList = () => {
  const [ImageList, setImageList] = useState([]);

  const [codeStatus, setCodeStatus] = useState('');

  const url = 'https://api.unsplash.com/photos/random/?query=parks&count=5&client_id=ue66y_t3CMluJDMhaNONYCxoVmRZCFUTbyH9Sjlj-jA';

  const effectCalled = useRef(false);


//Реализация списка изображений
  const MyNewImage = (description, link, comment) => {
    let date = (new Date()).toLocaleDateString('ru', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })

    setImageList([...ImageList, { 
      id: Math.round(Math.random()), 
      date: date, 
      name: description, 
      url: link, 
      comment: comment }]);
  };


  const fetchPhoto = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();

      if (res.status === 200) {
        for (let i = 0; i < Object.keys(json).length; i++) {
          let date = (new Date (json[i].created_at)).toLocaleDateString('ru', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })
          let description = json[i].description !==null ? json[i].description: json[i].alt_description

          setImageList(item => [...item, {
            id: json[i].id + Math.round(Math.random()), 
            url: json[i].urls.regular, 
            date: date, 
            name: description}])
        }
      }

      //Проверка статуса на ошибку
      else 
        {setCodeStatus(`Статус: ${res.status} Ошибка: ${json.errors}`)}
    } catch (error) {
      console.log('error', error);
    }
  };


  useEffect(() => {
    if (effectCalled.current === false) {
       fetchPhoto()
    }

    return () => effectCalled.current = true;
  }, []);


//Вывод списка изображений
  return (
    <>
    <Form NewImage={(name, link, comment) => MyNewImage(name, link, comment)}/>
    {codeStatus}
    <ImageListWrapper>
      {ImageList.map((Image) =>
      <ImageItem>
        <li key={Image.id}> 
        <DeleteImage onClick={() => setImageList(ImageList.filter(value => value !== Image))}>
<img src={Delete}/>
        </DeleteImage>
        <ImageName>{Image.name}</ImageName>
        <ImageDate>Дата добавления: <a>{Image.date}</a></ImageDate>
        <ImagePhoto className={ImageListWrapper.Image} src={Image.url} alt='#'/>
        <ImageTextArea name='description' value={Image.comment !== undefined ? 
          ('Описание: ' + Image.comment): ''} disabled={true}></ImageTextArea>
        </li>
      </ImageItem>
      )}
    </ImageListWrapper>
    </>
  );
};

