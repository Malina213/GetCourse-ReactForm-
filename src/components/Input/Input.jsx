import './input.css'

const Input = (props) => {
  if (props.type !== 'checkbox') {
    return (
      <input
        type={props.type}
        className={`form__${props.name} form ${props.clickedInput === props.name ? 'clicked' : ''}`}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    );
  } 
  else {
    return (
      <input
        type={props.type}
        className={props.className}
        name={props.name}
        onChange={props.onChange}
        
      />
    );
  }
};

export default Input;