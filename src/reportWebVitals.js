// Function to report web vitals
const reportWebVitals = onPerfEntry => {
  // Check if onPerfEntry is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the 'web-vitals' library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call the provided function with the Cumulative Layout Shift (CLS) metric
      getCLS(onPerfEntry);
      // Call the provided function with the First Input Delay (FID) metric
      getFID(onPerfEntry);
      // Call the provided function with the First Contentful Paint (FCP) metric
      getFCP(onPerfEntry);
      // Call the provided function with the Largest Contentful Paint (LCP) metric
      getLCP(onPerfEntry);
      // Call the provided function with the Time to First Byte (TTFB) metric
      getTTFB(onPerfEntry);
    });
  }
};

// Export the reportWebVitals function as the default export
export default reportWebVitals;

/*
Detailed Documentation
Function Definition:

const reportWebVitals = onPerfEntry => { ... };
Defines a function named reportWebVitals that takes a single argument onPerfEntry.
Argument Check:

if (onPerfEntry && onPerfEntry instanceof Function) { ... }
Checks if onPerfEntry is defined and is an instance of a function.
This ensures that the provided argument is a valid function before proceeding.
Dynamic Import:

import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => { ... });
Dynamically imports the web-vitals library.
The then method is used to handle the promise returned by the import.
Destructures the imported object to extract the getCLS, getFID, getFCP, getLCP, and getTTFB functions.
Web Vitals Metrics:

getCLS(onPerfEntry);

Calls the getCLS function with onPerfEntry as the argument.
getCLS measures the Cumulative Layout Shift (CLS) metric and passes the result to onPerfEntry.
getFID(onPerfEntry);

Calls the getFID function with onPerfEntry as the argument.
getFID measures the First Input Delay (FID) metric and passes the result to onPerfEntry.
getFCP(onPerfEntry);

Calls the getFCP function with onPerfEntry as the argument.
getFCP measures the First Contentful Paint (FCP) metric and passes the result to onPerfEntry.
getLCP(onPerfEntry);

Calls the getLCP function with onPerfEntry as the argument.
getLCP measures the Largest Contentful Paint (LCP) metric and passes the result to onPerfEntry.
getTTFB(onPerfEntry);

Calls the getTTFB function with onPerfEntry as the argument.
getTTFB measures the Time to First Byte (TTFB) metric and passes the result to onPerfEntry.
Export:

export default reportWebVitals;
Exports the reportWebVitals function as the default export of the module.
This allows other modules to import and use the reportWebVitals function.*/
