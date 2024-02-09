import { useState } from 'react';
import TubeInputForm from '../tubeInputForm/TubeInputForm';
import { sortTubesIntoRacks } from '../../utils/sortTubes'

const RackManager = () => {
  const [tubes, setTubes] = useState([]);
  const [racks, setRacks] = useState([]);

  const addTube = (tube) => {
    const newTubes = [...tubes, tube];
    setRacks(sortTubesIntoRacks(newTubes));
    setTubes(t => [...t, tube]);
  };

  return (
    <div>
      <TubeInputForm onAddTube={addTube}/>
      <div>
        {racks.map((rack, index) => (
          <div key={index}>
            <h2>Rack {index + 1}</h2>
            <ul>
              {rack.map((tube, i) => (
                <li key={i}>Patient: Age {tube.patient.age}, Company {tube.patient.company},
                  District {tube.patient.cityDistrict}, Vision {tube.patient.visionDefect}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RackManager;