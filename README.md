<h1 align="center">Welcome to location-tracker 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0.-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/reechychukz" target="_blank">
    <img alt="Twitter: reechychukz" src="https://img.shields.io/twitter/follow/reechychukz.svg?style=social" />
  </a>
</p>

> A server side application built to calculate the distance between 2 locations using nodejs, expressjs and mongodb

## Prerequisites

install npm and node if you don't have

install npm globally
```sh
npm install -g npm
```
## Run Locally

clone the project
```sh
git clone https://github.com/Reechychukz/location-tracker
```
go to project directory
```sh
cd location-tracker
```
install dependencies
```sh
npm install
```
navigate to directory
```sh
cd utilities/rapidAPI
```
enter command to open vs code
```sh
code .
```
enter a valid apikey

start the server
```sh
npm start
```
## API Endpoints

```sh
POST Location - http://localhost:3000/api/location/
PUT Location - http://localhost:3000/api/locations/{id}
DELETE Location - http://localhost:3000/api/locations/{id}
GET Locations - http://localhost:3000/api/locations
GET Location - http://localhost:3000/api/locations/{id}
POST Distance - http://localhost:3000/api/locations/{id}/distance
```

## Author

👤 **richard chukwuma**

* Twitter: [@reechychukz](https://twitter.com/reechychukz)
* Github: [@reechychukz](https://github.com/reechychukz)
* LinkedIn: [@richard-chukwuma-a1082b18b](https://linkedin.com/in/richard-chukwuma-a1082b18b)

## Show your support

Give a ⭐️ if this project helped you!
