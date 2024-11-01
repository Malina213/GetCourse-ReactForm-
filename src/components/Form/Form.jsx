

import './form.css';
import { useState } from 'react';
import Input from '../Input/Input';

const Form = () => {
  const [clickedInput, setClickedInput] = useState(null); 
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordRepeatShown, setPasswordRepeatShown] = useState(false);

  const [person, setPerson] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    password: '',
    repeat_password: '',
    checkbox_password: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPerson(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const buttonControl = () => {
    const { password, repeat_password, checkbox_password } = person;
    const isPasswordMatching = password === repeat_password && password !== '';
    
    if (!isPasswordMatching || !checkbox_password) {
      alert('Пароль не подтвержден');
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
      <form className='form__inner'>
        {['name', 'surname', 'phone', 'email'].map(field => (
          <Input
            key={field}
            type={field === 'phone' ? 'tel' : field === 'email' ? 'email' : 'text'}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            clickedInput={clickedInput}
            onFocus={() => setClickedInput(field)}
            onBlur={() => setClickedInput(null)}
            onChange={handleInputChange}
          />
        ))}

        <div className='password__wrapper'>
          <Input
            type={passwordShown ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            clickedInput={clickedInput}
            onFocus={() => setClickedInput('password')}
            onBlur={() => setClickedInput(null)}
            onChange={handleInputChange}
          />
          <button type="button"  className='showHide_password' onClick={() => setPasswordShown(!passwordShown)}>
            {passwordShown ? 'Hide' : 'Show'} 
          </button>
        </div>

        <div className='password__wrapper'>
          <Input
            type={passwordRepeatShown ? 'text' : 'password'}
            name="repeat_password"
            placeholder="Repeat password"
            clickedInput={clickedInput}
            onFocus={() => setClickedInput('repeat_password')}
            onBlur={() => setClickedInput(null)}
            onChange={handleInputChange}
          />
          <button type="button"  className='showHide_password' onClick={() => setPasswordRepeatShown(!passwordRepeatShown)}>
            {passwordRepeatShown ? 'Hide' : 'Show'} 
          </button>
        </div>

        <div className="checkbox-wrapper-1">
          <label>
            <Input
              className="checkbox-password-real"
              type="checkbox"
              name="checkbox_password"
              checked={person.checkbox_password}
              onChange={handleInputChange}
            />
            <span className='custom-checkbox'></span>
            Подтвердите пароль
          </label>
        </div>
      </form>
      
      <button className='form__button' onClick={buttonControl}>Продолжить</button>
    </div>
  );
};

export default Form;