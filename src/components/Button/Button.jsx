
import './button.css'

const Button = ({ type = 'button', onClick, text, className }) => {
    return (
      <button type={type} className={className} onClick={onClick}>
          {text}
      </button>
    );
};

export default Button;
