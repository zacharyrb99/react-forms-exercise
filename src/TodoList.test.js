import {render, fireEvent} from '@testing-library/react';
import TodoList from './TodoList';

test('TodoList renders without crashing', () => {
    render(<TodoList/>);
});

test('TodoList matches snapshot' , () => {
    const {asFragment} = render(<TodoList/>);
    expect(asFragment).toMatchSnapshot();
});

test('It adds a new to-do', () => {
    const {queryByText, getByLabelText} = render(<TodoList/>);
    const textInput = getByLabelText('To-Do Text:');
    const button = queryByText('Add To-Do');

    expect(queryByText('Test To-Do')).not.toBeInTheDocument();

    fireEvent.change(textInput, {target: {value: 'Test To-Do'} });
    fireEvent.click(button);

    expect(queryByText('Test To-Do')).toBeInTheDocument();
});