import { canPlaceTubeInRack, sortTubesIntoRacks } from './sortTubes';

describe('Rack Management Logic', () => {
  describe('canPlaceTubeInRack', () => {
    test('returns true when rack is empty', () => {
      const tube = { patient: { age: 25, company: 'A', cityDistrict: 'North', visionDefect: 'Myopia' } };
      const rack = [];

      expect(canPlaceTubeInRack(tube, rack)).toBe(true);
    });

    test('returns false for tube with matching patient attribute in rack', () => {
      const tube = { patient: { age: 30, company: 'B', cityDistrict: 'East', visionDefect: 'Hyperopia' } };
      const rack = [
        { patient: { age: 30, company: 'A', cityDistrict: 'West', visionDefect: 'None' } }
      ];

      expect(canPlaceTubeInRack(tube, rack)).toBe(false);
    });

    test('returns true for tube with no matching patient attribute in rack', () => {
      const tube = { patient: { age: 35, company: 'C', cityDistrict: 'South', visionDefect: 'Astigmatism' } };
      const rack = [
        { patient: { age: 30, company: 'B', cityDistrict: 'East', visionDefect: 'Hyperopia' } }
      ];

      expect(canPlaceTubeInRack(tube, rack)).toBe(true);
    });
  });

  describe('sortTubesIntoRacks', () => {
    test('correctly sorts tubes into separate racks based on attributes', () => {
      const tubes = [
        { patient: { age: 40, company: 'X', cityDistrict: 'North', visionDefect: 'Myopia' } },
        { patient: { age: 40, company: 'Y', cityDistrict: 'South', visionDefect: 'Hyperopia' } }, // Should be in a separate rack due to age conflict
        { patient: { age: 45, company: 'X', cityDistrict: 'East', visionDefect: 'None' } } // Can be in the same rack as the first tube due to no conflicts
      ];

      const sortedRacks = sortTubesIntoRacks(tubes);
      expect(sortedRacks.length).toBe(2); // Expecting 2 racks due to the age conflict
      expect(sortedRacks[0].length).toBe(1);
      expect(sortedRacks[1].length).toBe(2);
    });

    test('places all tubes in one rack when there are no conflicts', () => {
      const tubes = [
        { patient: { age: 50, company: 'Z', cityDistrict: 'West', visionDefect: 'Astigmatism' } },
        { patient: { age: 55, company: 'A', cityDistrict: 'East', visionDefect: 'None' } }
      ];

      const sortedRacks = sortTubesIntoRacks(tubes);
      expect(sortedRacks.length).toBe(1); // Only one rack needed
      expect(sortedRacks[0].length).toBe(2); // The single rack contains both tubes
    });
  });
});
