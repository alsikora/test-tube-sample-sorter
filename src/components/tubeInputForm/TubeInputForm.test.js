import { render, screen, fireEvent } from '@testing-library/react';
import TubeInputForm from './TubeInputForm';

describe('TubeInputForm component', () => {
  const mockOnAddTube = jest.fn();

  beforeEach(() => {
    mockOnAddTube.mockClear();
  });

  test('inputs should be initially empty', () => {
    render(<TubeInputForm onAddTube={mockOnAddTube} />);
    const idInput = screen.getByPlaceholderText('Id');
    const ageInput = screen.getByPlaceholderText('Age');
    const companyInput = screen.getByPlaceholderText('Company');
    const cityDistrictInput = screen.getByPlaceholderText('City District');
    const visionDefectInput = screen.getByPlaceholderText('Vision Defect');

    expect(idInput.value).toBe('');
    expect(ageInput.value).toBe('');
    expect(companyInput.value).toBe('');
    expect(cityDistrictInput.value).toBe('');
    expect(visionDefectInput.value).toBe('');
  });

  test('can enter values into inputs', () => {
    render(<TubeInputForm onAddTube={mockOnAddTube} />);
    const idInput = screen.getByPlaceholderText('Id');
    const ageInput = screen.getByPlaceholderText('Age');
    const companyInput = screen.getByPlaceholderText('Company');
    const cityDistrictInput = screen.getByPlaceholderText('City District');
    const visionDefectInput = screen.getByPlaceholderText('Vision Defect');

    fireEvent.change(idInput, { target: { value: '123' } });
    fireEvent.change(ageInput, { target: { value: '30' } });
    fireEvent.change(companyInput, { target: { value: 'Acme' } });
    fireEvent.change(cityDistrictInput, { target: { value: 'Downtown' } });
    fireEvent.change(visionDefectInput, { target: { value: 'Myopia' } });

    expect(idInput.value).toBe('123');
    expect(ageInput.value).toBe('30');
    expect(companyInput.value).toBe('Acme');
    expect(cityDistrictInput.value).toBe('Downtown');
    expect(visionDefectInput.value).toBe('Myopia');
  });

  test('submits the correct values', () => {
    render(<TubeInputForm onAddTube={mockOnAddTube} />);
    const idInput = screen.getByPlaceholderText('Id');
    const ageInput = screen.getByPlaceholderText('Age');
    const companyInput = screen.getByPlaceholderText('Company');
    const cityDistrictInput = screen.getByPlaceholderText('City District');
    const visionDefectInput = screen.getByPlaceholderText('Vision Defect');
    const submitButton = screen.getByText('Add Tube');

    // Enter data into the form inputs
    fireEvent.change(idInput, { target: { value: '123' } });
    fireEvent.change(ageInput, { target: { value: '30' } });
    fireEvent.change(companyInput, { target: { value: 'Acme' } });
    fireEvent.change(cityDistrictInput, { target: { value: 'Downtown' } });
    fireEvent.change(visionDefectInput, { target: { value: 'Myopia' } });

    // Submit the form
    fireEvent.click(submitButton);

    // Check if the mockOnAddTube function was called with the correct data
    expect(mockOnAddTube).toHaveBeenCalledWith({
      id: '123',
      patient: {
        age: '30',
        company: 'Acme',
        cityDistrict: 'Downtown',
        visionDefect: 'Myopia',
      },
    });
  });
});
