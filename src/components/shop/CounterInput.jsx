import PropTypes from 'prop-types';
import styles from './Shop.module.css';
import { useState } from 'react';

function CounterInput({ value, setValue }) {
  const [newValue, setNewValue] = useState(value);
  const handleInputValue = (e) => {
    const newValue = Number(e.target.value);
    if (newValue >= 0 && newValue <= 99) {
      if (setValue) {
        setValue(newValue);
      }
      setNewValue(newValue);
    }
  };

  const handleIncremet = () => {
    if (setValue) {
      setValue((prev) => Math.min(prev + 1, 99));
    }
    setNewValue((prev) => Math.min(prev + 1, 99));
  };

  const handleDecremet = () => {
    if (setValue) {
      setValue((prev) => Math.max(prev - 1, 1));
    }
    setNewValue((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className={styles.inputContainer}>
      <button className={styles.decrement} onClick={handleDecremet}>
        {' '}
        -{' '}
      </button>
      <input
        type="number"
        value={newValue}
        onChange={handleInputValue}
        min="1"
        max="20"
      />
      <button className={styles.increment} onClick={handleIncremet}>
        {' '}
        +{' '}
      </button>
    </div>
  );
}

CounterInput.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func,
};

export default CounterInput;
