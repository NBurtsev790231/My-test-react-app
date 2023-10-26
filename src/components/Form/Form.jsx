import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ButtonForm, ContainerForm, ErrorForm, InputForm, LabelForm, SectionForm, TextForm, WrapperForm } from './styles';

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
  props.NewImage(namePhoto, linkPhoto, commentPhoto)
  setOnCheckBox(false)
  setCommentPhoto('')
  reset();
};

//Форма для ввода фото и описания
  return (
      <ContainerForm>
        <WrapperForm onSubmit={handleSubmit((data) => onSubmit())}>
          <LabelForm>Название фото</LabelForm>
          <InputForm
            maxLength={30}
            placeholder='Национальный парк'
            {...register('name',
              {
                required: 'Поле обязательно к заполнению',
                minLength: {
                  value: 3,
                  message: 'Минимум три символа',
                },
              })}
            onChange={event => setNamePhoto(event.target.value)} 
            />
          <div>
            {errors?.name &&
              <ErrorForm>{errors?.name?.message || 'Error'}</ErrorForm>};
          </div>

          <SectionForm>
            <LabelForm>Ссылка на фото</LabelForm>
            <InputForm
            placeholder='https://images.unsplash.com/photo-1619221881833-5e5aeff458fd?'
            {...register('link', {
            required: 'Поле обязательно к заполнению'})}
            onChange={event => setLinkPhoto(event.target.value)}
            />
            <div>
            {errors?.link &&
              <ErrorForm>{errors?.link?.message || 'Error'}</ErrorForm>};
            </div>
          </SectionForm>


          <div>
            <LabelForm>Описание фото</LabelForm>;
            <input type="checkbox" 
            onChange={(event) => event.target.checked === true?
              setOnCheckBox(true) : setOnCheckBox(false)}
              name='options'
              value='#'
              checked={onCheckBox}
            />
            
            <TextForm
            defaultValue=''
            hidden={!onCheckBox}
            {...register('comment', {
              required: onCheckBox,
            })}
            onChange={(event) => setCommentPhoto(event.target.value)}
            />
            {errors.comment && onCheckBox &&
            <ErrorForm>Поле обязательно к заполнению</ErrorForm>}
          </div>
          
          <ButtonForm>Добавить фото</ButtonForm>
        </WrapperForm>
      </ContainerForm>
  );
};
