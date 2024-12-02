// Importing the React library
import React from 'react';
// Importing the ReactDOM library for rendering React components
import ReactDOM from 'react-dom/client';
// Importing the main CSS file for styling
import './index.css';
// Importing the main App component
import App from './App';
// Importing the reportWebVitals function for performance measurement
import reportWebVitals from './reportWebVitals';
// Importing the UserProvider component from the UserContext
import { UserProvider } from './context/UserContext';

// Creating a root element for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the React application within the root element
root.render(
  <React.StrictMode>
    {/* Wrapping the App component with UserProvider to provide user context */}
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);

/*
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();
/*Detailed Documentation
Imports:

import React from 'react';
Imports the React library, which is necessary for creating React components.
import ReactDOM from 'react-dom/client';
Imports the ReactDOM library, specifically the createRoot method, for rendering React components to the DOM.
import './index.css';
Imports the main CSS file for global styling of the application.
import App from './App';
Imports the main App component, which serves as the root component of the application.
import reportWebVitals from './reportWebVitals';
Imports the reportWebVitals function, which is used for measuring the performance of the application.
import { UserProvider } from './context/UserContext';
Imports the UserProvider component from the UserContext file, which provides user-related context to the application.
Creating the Root Element:

const root = ReactDOM.createRoot(document.getElementById('root'));
Creates a root element using the createRoot method and assigns it to the root variable. This root element is where the React application will be rendered.
Rendering the Application:

root.render(...);
Renders the React application within the root element.
The application is wrapped in <React.StrictMode> to enable additional checks and warnings during development.
The App component is wrapped with the UserProvider component to provide user context throughout the application.
Performance Measurement:

reportWebVitals();
Calls the reportWebVitals function to start measuring the performance of the application.
The function can be configured to log results or send them to an analytics endpoint.*/
