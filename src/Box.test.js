import {render} from '@testing-library/react';
import Box from './Box';

test('Box renders without crashing', () => {
    render(<Box/>);
});

test('Box matches snapshot', () => {
    const {asFragment} = render(<Box/>);
    expect(asFragment).toMatchSnapshot();
});