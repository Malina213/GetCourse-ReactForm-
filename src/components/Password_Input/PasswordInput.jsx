
import Input from '../Input/Input';
import Button from '../Button/Button';

const PasswordInput = ({ name, placeholder, isVisible, onToggle, onChange}) => (
    <div className='password__wrapper'>
        <Input
            type={isVisible ? 'text' : 'password'}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
        />
        <Button 
            type="button" className='showHide_password'
            onClick={onToggle}
            text = {isVisible ? "Hidden" : "Show"}
        />
    </div>
  );

export default PasswordInput;