import {render, fireEvent} from '@testing-library/react';
import BoxList from './BoxList';

test('BoxList renders without crashing', () => {
    render(<BoxList/>);
});

test('Boxlist matches snapshot', () => {
    const {asFragment} = render(<BoxList/>);
    expect(asFragment).toMatchSnapshot();
});

test('It should add a new box', () => {
    const {queryByText, getByLabelText} = render(<BoxList/>);
    const widthInput = getByLabelText("Width:");
    const heightInput = getByLabelText("Height:");
    const colorInput = getByLabelText("Color:");
    const button = queryByText('Add Box!');

    expect(queryByText('X')).not.toBeInTheDocument();

    fireEvent.change(widthInput, {target: {value: 150} });
    fireEvent.change(heightInput, {target: {value: 150} });
    fireEvent.change(colorInput, {target: {value: 'red'} });
    fireEvent.click(button);

    expect(queryByText('X')).toBeInTheDocument();
})