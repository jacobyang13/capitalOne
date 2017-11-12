A react web app designed for the capital one challenge

-------------------------------------

Setup:
Have node and npm installed(different versions may cause errors)(Node Version installed is 6.11.0)


Cd into folder from terminal


Type NPM install(Dependencies are located in the package.json file)


Type node server


Server should be up and running in localhost:3000




-------------------------------------


Technologies:
React + Node



-------------------------------------


Sources:
Map - The code to render a map from google was found by this tutorial : http://react.tips/reactjs-and-geocoding/

Papaparse - Used to parse the listings.csv files

Superagent - used to for ajax callout

React-easy-chart - used to render charts




-------------------------------------




Methods and Reasoning:






-------------------------------------


Files and Folders:
Main.jsx - Contains the main app where all the files combined together are rendered(Nav, Map, and DataGraphs)



SearchMap.jsx - React component that renders the map and table search together



DataGraphs.jsx - React component that renders all the graphs combined together



Nav.jsx - Renders the nav bar at the top, along with links to different pages



AllReviews.jsx - Chart that displays all reviews based on cancellation policy



NeighborhoodPrices.jsx - Chart that renders average neighborhood prices



NeighborhoodReviews.jsx - Chart that renders average neighborhood reviews



PropertyChart.jsx - Chart that renders number of properties



SearchMap.jsx - React Component that renders the map and calculates the geolocation price and maximum revenue



SubTable.jsx - React Component that renders all the listings and allows user to search by different categories



SubTableSelected.jsx(not used) - React Component that allows user to store listings that are found in subtable.



Server.js - Node file that hosts the server
