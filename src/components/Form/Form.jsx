/* eslint-disable no-case-declarations */

import './form.css';
import { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import PasswordInput from '../Password_Input/PasswordInput';
import CheckboxInput from '../CheckboxInput/CheckboxInput';


const Form = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordRepeatShown, setPasswordRepeatShown] = useState(false);
  const [isErrors,setIsErrors] = useState(false);

  const [person, setPerson] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    password: '',
    repeat_password: '',
    checkbox_password: false,
  });
  
  const validateField = (name, value) => {
    if(value){
      switch (name) {
        case 'name':
        case 'surname':
        const namePattern = /^[a-zA-Zа-яА-ЯёЁ\s]+$/; 
        return namePattern.test(value) ? '' : 'Имя/фамилия должны содержать только буквы';
        case 'phone':
          const phonePattern = /^\d{1}-\d{3}-\d{3}-\d{2}-\d{2}$/;
          return phonePattern.test(value) ? '' : 'Неверный формат номера телефона. Используйте формат: 7-777-777-77-77.';
        case 'email':
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailPattern.test(value) ? '' : 'Введите корректный адрес электронной почты.';
        case 'password':
          return value.length >= 6 ? '' : 'Пароль должен содержать не менее 6 символов.';
        case 'repeat_password':
          return value === person.password ? '' : 'Пароли не совпадают.';
        default:
          return '';
      }
    }else{
      return ''
    }

  };
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    const errorMessage = validateField(name, value);
    setIsErrors(prevErrors => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
    setPerson(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const buttonControl = () => {
    const { password, repeat_password, checkbox_password } = person;
    const isPasswordMatching = password === repeat_password && password !== '';
    
    if (!isPasswordMatching || !checkbox_password) {
      alert('Что-то не так с данными!');
      return;
    }

    let message = 'Данные о пользователе\n';
    const keys = ['name', 'surname', 'phone', 'email','password'];
    for (const key in person) {
      if (!person[key]) {
        alert('Форма не заполнена полностью');
        return;
      }
      if (keys.includes(key)) {
        message += `${key}: ${person[key]}\n`;
      }
    }

    alert('Форма заполнена полностью');
    alert(message);
  };

  return (
    <div className="container"> 
      <form className='form__inner' >
        {['name', 'surname', 'phone', 'email'].map((field,id) => (
          <div key={id} className='form_item'>
            <Input
              type={field === 'phone' ? 'tel' : field === 'email' ? 'email' : 'text'}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              onChange={handleInputChange}
            />
            {isErrors[field] && <span className="error-message">{isErrors[field]}</span>}
          </div>
        ))}

          <PasswordInput 
            name="password"
            placeholder="Password"
            isVisible={passwordShown}
            onToggle={() => setPasswordShown(!passwordShown)}
            onChange={handleInputChange}
            isErrors={isErrors.password}
            button={true}
          />
          
          
          <PasswordInput 
            name="repeat_password"
            placeholder="Repeat password"
            isVisible={passwordRepeatShown}
            onToggle={() => setPasswordRepeatShown(!passwordRepeatShown)}
            onChange={handleInputChange}
            isErrors={isErrors.repeat_password}
            button={false}
          />
          
          <CheckboxInput
            name="checkbox_password"
            className="checkbox-password-real"
            checked={person.checkbox_password}
            onChange={handleInputChange}
          />

          <Button
            className='form__button'
            onClick={buttonControl}
            text ='Продолжить'
          />
      </form>
    </div>

  );
};

export default Form;