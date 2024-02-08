import Input from './components/input/Input';
import styles from './App.module.css';

function App() {
  return (
    <>
      <header>
        <h1>Sample Sorter</h1>
      </header>
      <div className={styles.container}>
        <Input/>
      </div>
    </>
  );
}

export default App;
