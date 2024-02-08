import RackManager from './components/rackManager/RackManager';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1>Test Tube Rack Manager</h1>
      <RackManager />
    </div>
  );
}

export default App;
