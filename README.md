# scooters-app
Find the scooter closest to you by dragging the marker.  Demo app to show usage of a 3 tier application.  Deployable using Docker.

![Locate your scooter! Awesome!](https://github.com/minimice/scooters-app/blob/master/demos/demo.gif)

Author: [Lim Chooi Guan](https://www.linkedin.com/in/cgl88/) (Team Cloud Lead @ Scania AB, [AWS Certified Solutions Architect](https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2018-11-08&ci=AWS00446559&dm=80))

## Pre-requisites 🛠
* Docker account on dockerhub  
* Docker  
* [Node 8.11.3](https://nodejs.org/en/download/)
* A modern browser like Chrome

## Quick start 🍕
1. Clone this repo.
2. Run the following command from the root directory of the repo in your favourite terminal.
```
docker-compose up --build
```
3. Boom!  Navigate to http://localhost:6001 to start!

## Technology stack
* Node.js for backend services including providing fake data
* jQuery, CSS, HTML for the frontend
* Docker
