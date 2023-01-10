import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { changeInputValue } from 'src/actions/user';

import './style.scss';

function FieldAccount({
  name,
  placeholder,
  type,
  label
}) 
{
  const dispatch = useDispatch();
  const value = useSelector((state) => state.user[name]);

  const handleChange = (event) => {
    dispatch(changeInputValue(name, event.target.value));
  };

  const inputId = `field__${name}`;

  return (
    <div className="field">
      <label
       forhtml={inputId}
        className="field__label"
      >
      {label}
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        className="field__input"
        value={value}
        onChange={handleChange}
        
      />

    </div>
  );
}

FieldAccount.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
FieldAccount.defaultProps = {
  placeholder: ""
};
export default FieldAccount;
