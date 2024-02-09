/**
 * Checks for any matching attributes that would cause a conflict
 * @param tube
 * @param rack
 * @returns {boolean}
 */
export const canPlaceTubeInRack = (tube, rack) => {
  return !rack.some(otherTube =>
    tube.patient.age === otherTube.patient.age ||
    tube.patient.company === otherTube.patient.company ||
    tube.patient.cityDistrict === otherTube.patient.cityDistrict ||
    tube.patient.visionDefect === otherTube.patient.visionDefect
  );
};

export const sortTubesIntoRacks = (newTubes) => {
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

  return newRacks;
};