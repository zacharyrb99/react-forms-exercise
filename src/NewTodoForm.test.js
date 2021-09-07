import {render} from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('NewTodoForm renders without crashing', () => {
    render(<NewTodoForm/>);
});

test('NewTodoForm matches snapshot', () => {
    const {asFragment} = render(<NewTodoForm/>);
    expect(asFragment).toMatchSnapshot();
});