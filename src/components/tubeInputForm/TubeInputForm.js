import { useState } from 'react';
import styles from './TubeInputForm.module.css'

const TubeInputForm = ({ onAddTube }) => {
  // @ToDo Refactor to use one object with a state instead of several separate states.
  // https://react.dev/reference/react/useState#updating-objects-and-arrays-in-state
  const [id, setId] = useState('');
  const [age, setAge] = useState('');
  const [company, setCompany] = useState('');
  const [cityDistrict, setCityDistrict] = useState('');
  const [visionDefect, setVisionDefect] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTube({ id, patient: { age, company, cityDistrict, visionDefect } });
    setId('');
    setAge('');
    setCompany('');
    setCityDistrict('');
    setVisionDefect('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="number"
        placeholder="Id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="City District"
        value={cityDistrict}
        onChange={(e) => setCityDistrict(e.target.value)}
      />
      <input
        type="text"
        placeholder="Vision Defect"
        value={visionDefect}
        onChange={(e) => setVisionDefect(e.target.value)}
      />
      <button type="submit">Add Tube</button>
    </form>
  );
};

export default TubeInputForm;