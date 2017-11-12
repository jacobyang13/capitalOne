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
1. Visualize the data: The neighborhoods that were used in the graphs were determined by the neighborhood.csv file. In listings.csv there were many more neighborhoods available, however, I decided to choose the 37 from the neighborhood.csv file. Additionally, I did not account for outliers such as extreme min's and max's or proper large enough data sets. Therefore, some data may not be accurate as either they will be skewed by extremely small or large numbers or there will only be 3 listings for a certain neighborhood.



2. Price estimation: The average income was estimated by matching the geolocation up to two decimal places and therefore, the data can also be skewed because the data set or listings will not be large enough to get proper data. I calculated average income by mean and not median. I gathered all the nightly price that matched the geolocation and multiplied that average by 7 and then divided by the number of listings for that geolocation. I assumed that nightly price automatically equaled income, not accounting for cleaning fees or what the owner put into the house.


3. Bookings optimization: In order to calculate maximum revenue, I used a price-demand function and then took the derivative of that function times X and found the max. I assumed that the reviews per month equaled number of bookings per month even though reviews per month does not directly correlate to number of bookings. I also assumed that price per night would multiple out to price per month. Due to price per month being scarcely available in the listings.csv file, I decided to times price per night by 31 to gather the price per month. The price-demand function is linear so I used p = mx + b equation: 'm' was calculated by the highest pair of (x,y) and lowest pair of (x,y), x being reviews and y being price. Since I used the highest pair and lowest pair, the optimization function was often skewed and largely enormous. After I found p = mx +b I multiplied this equation by x to get p = mx^2 + bx to get the revenue function. Here I found the max by taking the derivative and setting the function equal to zero. Since the coefficient of x will always be ^2 I simply multiplied m times 2.




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
