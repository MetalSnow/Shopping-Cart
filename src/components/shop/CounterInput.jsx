import PropTypes from 'prop-types';
import styles from './Shop.module.css';

function CounterInput({ value, setValue }) {
  const handleInputValue = (e) => {
    const newValue = Number(e.target.value);
    if (newValue >= 0 && newValue <= 99) {
      setValue(newValue);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <button
        className={styles.decrement}
        onClick={() => setValue((prev) => Math.max(prev - 1, 1))}
      >
        {' '}
        -{' '}
      </button>
      <input
        type="number"
        value={value}
        onChange={handleInputValue}
        min="1"
        max="20"
      />
      <button
        className={styles.increment}
        onClick={() => setValue((prev) => Math.min(prev + 1, 99))}
      >
        {' '}
        +{' '}
      </button>
    </div>
  );
}

CounterInput.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  handleInputValue: PropTypes.func.isRequired,
};

export default CounterInput;
