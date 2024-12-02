// Importing necessary functions and components from the testing library
import { render, screen } from '@testing-library/react';
// Importing the main App component to be tested
import App from './App';

// Defining a test case to check if the "learn react" link is rendered
test('renders learn react link', () => {
  // Rendering the App component
  render(<App />);
  // Finding the element that contains the text "learn react"
  const linkElement = screen.getByText(/learn react/i);
  // Asserting that the link element is present in the document
  expect(linkElement).toBeInTheDocument();
});
