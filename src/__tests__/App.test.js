// App.test.js
import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'; // <-- Add this import

describe('App component', () => {
  it('renders the welcome message', () => {
    render(<App />);
    
    // Check for the "Hi, I'm _______" text inside the <h1> tag
    const headingElement = screen.getByText(/Hi, I'm _______/i);
    
    // Ensure it's in the document
    expect(headingElement).toBeInTheDocument();  // This should work now
  });
});
