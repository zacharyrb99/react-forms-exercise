import {render} from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('NewBoxForm renders without crashing', () => {
    render(<NewBoxForm/>);
});

test('NewBoxForm matches snapshot', () => {
    const {asFragment} = render(<NewBoxForm/>);
    expect(asFragment).toMatchSnapshot();
});