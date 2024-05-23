import React, {useState} from 'react';
import './ToggleButton.scss';

const ToggleButton = ({onToggle, initialState = false, disabled = false}) => {
  const [isToggled, setIsToggled] = useState(initialState);

  const handleClick = e => {
    e.preventDefault();
    if (!disabled) {
      const newState = !isToggled;
      setIsToggled(newState);
      onToggle(newState);
    }
  };

  return (
    <button
      className={`toggle-button ${isToggled ? 'active' : ''} ${
        disabled ? 'disabled' : ''
      }`}
      onClick={handleClick}
      disabled={disabled}>
      {isToggled ? '' : ''}
    </button>
  );
};

export default ToggleButton;
