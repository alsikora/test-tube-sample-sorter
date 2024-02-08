import { useState } from 'react';
import TubeInputForm from '../tubeInputForm/TubeInputForm';

const RackManager = () => {
  const [tubes, setTubes] = useState([]);
  const [racks, setRacks] = useState([]);

  const addTube = (tube) => {
    const newTubes = [...tubes, tube];
    sortTubesIntoRacks(newTubes);
    setTubes(t => [...t, tube]);
  };

  /**
   * Checks for any matching attributes that would cause a conflict
   * @param tube
   * @param rack
   * @returns {boolean}
   */
  const canPlaceTubeInRack = (tube, rack) => {
    return !rack.some(otherTube =>
      tube.patient.age === otherTube.patient.age ||
      tube.patient.company === otherTube.patient.company ||
      tube.patient.cityDistrict === otherTube.patient.cityDistrict ||
      tube.patient.visionDefect === otherTube.patient.visionDefect
    );
  };

  const sortTubesIntoRacks = (newTubes) => {
    const newRacks = [];

    newTubes.forEach(tube => {
      let placed = false;
      for (const rack of newRacks) {
        // Try to find a rack that can accommodate the tube
        if (canPlaceTubeInRack(tube, rack)) {
          rack.push(tube);
          placed = true;
          break;
        }
      }
      // If no suitable rack is found, create a new one
      if (!placed) {
        newRacks.push([tube]);
      }
    });

    setRacks(newRacks);
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