import { useState } from 'react';
import styles from './TubeInputForm.module.css'

const TubeInputForm = ({ onAddTube }) => {
  const [form, setForm] = useState({
    id: '',
    age: '',
    company: '',
    cityDistrict: '',
    visionDefect: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, age, company, cityDistrict, visionDefect } = form;
    onAddTube({ id, patient: { age, company, cityDistrict, visionDefect } });
    setForm({
      id: '',
      age: '',
      company: '',
      cityDistrict: '',
      visionDefect: ''
    })
  };

  const updateForm = (value, key) => {
    setForm({
      ...form,
      [key]: value
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="number"
        placeholder="Id"
        value={form.id}
        onChange={e => updateForm(e.target.value, 'id')}
      />
      <input
        type="number"
        placeholder="Age"
        value={form.age}
        onChange={e => updateForm(e.target.value, 'age')}
      />
      <input
        type="text"
        placeholder="Company"
        value={form.company}
        onChange={e => updateForm(e.target.value, 'company')}
      />
      <input
        type="text"
        placeholder="City District"
        value={form.cityDistrict}
        onChange={e => updateForm(e.target.value, 'cityDistrict')}
      />
      <input
        type="text"
        placeholder="Vision Defect"
        value={form.visionDefect}
        onChange={e => updateForm(e.target.value, 'visionDefect')}
      />
      <button type="submit">Add Tube</button>
    </form>
  );
};

export default TubeInputForm;