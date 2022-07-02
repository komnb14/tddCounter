import {render, screen} from '@testing-library/react';
import App from './App';

test('it should have correct title', () => {
    render(<App/>);
    const text = screen.getByText(/Awesome Counter/i);
    expect(text).toBeInTheDocument();
});
