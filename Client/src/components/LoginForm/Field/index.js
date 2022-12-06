import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { changeInputValue } from 'src/actions/user';

import './style.scss';

function Field({
  name,
  placeholder,
  type,

}) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.user[name]);

  const handleChange = (event) => {
    dispatch(changeInputValue(name, event.target.value));
  };

  const inputId = `login-${name}`;

  return (
    <div className="login__field">
      <label
        htmlFor={inputId}
        className="login__label"
      >
        {placeholder}
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        className="login__input"
        value={value}
        onChange={handleChange}
      />

    </div>
  );
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Field;
