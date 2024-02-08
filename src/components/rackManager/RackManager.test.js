import { render, screen, fireEvent } from '@testing-library/react';
import RackManager from './RackManager';

jest.mock('../tubeInputForm/TubeInputForm', () => (props) => {
  // Mock the form to directly call onAddTube when submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddTube({
      id: 'mockId',
      patient: { age: '25', company: 'MockCompany', cityDistrict: 'MockDistrict', visionDefect: 'MockDefect' }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Add Mock Tube</button>
    </form>
  );
});

describe('RackManager component', () => {
  test('renders TubeInputForm', () => {
    render(<RackManager />);
    const addButton = screen.getByText('Add Mock Tube');
    expect(addButton).toBeInTheDocument();
  });

  test('successfully adds a mock tube and updates racks', () => {
    render(<RackManager />);

    // Simulate form submission
    fireEvent.click(screen.getByText('Add Mock Tube'));

    expect(screen.getByText(/Rack 1/)).toBeInTheDocument();
    // Adapt the expected text based on how component renders tube details
    expect(screen.getByText(/MockCompany/)).toBeInTheDocument();
    expect(screen.getByText(/MockDistrict/)).toBeInTheDocument();
    expect(screen.getByText(/MockDefect/)).toBeInTheDocument();
  });

});

