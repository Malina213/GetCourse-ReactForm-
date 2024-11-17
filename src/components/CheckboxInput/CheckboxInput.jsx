
import Input from '../Input/Input';
import './checkboxInput.css'

const CheckboxInput = ({type="checkbox", name, className, checked, onChange}) => (
    <div className='checkbox-wrapper-1'>
        <label>
            <Input
                className= {className}
                type={type}
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <span className='custom-checkbox'></span>
                Подтверждаю данные 
        </label>
    </div>
  );

export default CheckboxInput;
