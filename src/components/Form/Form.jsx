import { useState } from 'react';
import { useForm } from 'react-hook-form';

//Реализация формы
export const Form = (props) => {

const {
  register,
  reset, 
  handleSubmit, 
  formState: {errors, isValid }} = useForm();

const [namePhoto, setNamePhoto] = useState();

const [linkPhoto, setLinkPhoto] = useState();

const [onCheckBox, setOnCheckBox] = useState();

const [commentPhoto, setCommentPhoto] = useState();

const onSubmit = (data) => {
  props.newPhoto(namePhoto, linkPhoto, commentPhoto)
  setOnCheckBox(false)
  setCommentPhoto('')
  reset();
};

//Форма для ввода фото и описания
  return (
      <div>
        <form onSubmit={handleSubmit((data) => onSubmit())}>
          <label>Название фото</label>
          <input
            maxLength={30}
            placeholder='Национальный парк'
            {...register('name',
              {
                required: 'поле обязательно к заполнению',
                minLength: {
                  value: 3,
                  message: 'Минимум три символа',
                },
              })}
            onChange={event => setNamePhoto(event.target.value)} />
          <div>
            {errors?.name &&
              <p>{errors?.name?.message || 'Error'}</p>};
          </div>

          <div>
            <label>Ссылка на фото</label>
            <input
            placeholder='https://images.unsplash.com/photo-1619221881833-5e5aeff458fd?'
            {...register('link', {
            required: 'Поле обязательно к заполнению'})}
            onChange={event => setLinkPhoto(event.target.value)}
            />
            <div>
            {errors?.link &&
              <p>{errors?.link?.message || 'Error'}</p>};
            </div>
          </div>


          <div>
            <p>Описание фото</p>;
            <input type="checkbox" 
            onChange={(event) => event.target.checked === true?
              setOnCheckBox(true) : setOnCheckBox(false)}
              name='options'
              value='#'
              checked={onCheckBox}
            />
            
            <textarea
            defaultValue=''
            hidden={!onCheckBox}
            {...register('comment', {
              required: onCheckBox,
            })}
            onChange={(e) => setCommentPhoto(e.target.value)}
            />
            {errors.comment && onCheckBox &&
            <p>Поле обязательно к заполнению</p>}
          </div>
          
          <input type='submit' value='Добавить фото'/>
        </form>
      </div>
  );
};
