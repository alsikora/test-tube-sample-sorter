import styles from './Input.module.css';

function Input() {
  return (
    <div className={styles.container}>
      <input/>
      <button type={"button"}>Run</button>
    </div>
  );
}

export default Input;