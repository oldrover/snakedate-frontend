# SnakePlanner Frontend

![image](https://raw.githubusercontent.com/oldrover/snakeplanner/master/images/app.png)

This is the frontend for the [SnakePlanner App](https://snakeplanner.azurewebsites.net).
It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

For running this App locally you need either the running [backend](https://github.com/oldrover/snakeplanner) or 
clone this repo into the frontend folder inside the backend project.\
Detailed information can be found in the [backend](https://github.com/oldrover/snakeplanner) README.

## Running the application

In the project directory, you can run:

`npm start`

This runs the app in the development mode.\
As it's configured to use proxy you can open
[http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Building the application

you can build the project with `npm build`, but the current configuration is optimized
to trigger an automated build when the backend is packaged via Maven. 
