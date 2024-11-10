
import './form.css';
import { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import PasswordInput from '../Password_Input/PasswordInput';
import CheckboxInput from '../CheckboxInput/CheckboxInput';


const Form = () => {
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
      <form className='form__inner'>
        {['name', 'surname', 'phone', 'email'].map(field => (
          <Input
            key={field}
            type={field === 'phone' ? 'tel' : field === 'email' ? 'email' : 'text'}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            onChange={handleInputChange}
          />
        ))}

          <PasswordInput 
            name="password"
            placeholder="Password"
            isVisible={passwordShown}
            onToggle={() => setPasswordShown(!passwordShown)}
            onChange={handleInputChange}
          />
          
          <PasswordInput 
            name="repeat_password"
            placeholder="Repeat password"
            isVisible={passwordRepeatShown}
            onToggle={() => setPasswordRepeatShown(!passwordRepeatShown)}
            onChange={handleInputChange}
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