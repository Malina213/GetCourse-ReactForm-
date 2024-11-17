
import Input from '../Input/Input';
import Button from '../Button/Button';

const PasswordInput = ({ name, placeholder, isVisible, onToggle, onChange,isErrors,button}) => (
    <div className='form_item'>
        <Input
            type={isVisible ? 'text' : 'password'}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
        />
        <Button 
            type="button" className='showHide_password'
            onClick={onToggle}
            text = {button ? (isVisible ? "Hidden" : "Show"):''}
        />
         {isErrors && <span className="error-message">{isErrors}</span>}
    </div>
  );

export default PasswordInput;