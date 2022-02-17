# Coin Trader README

# Overview

# Features
* Efficient socket utilisation with IHttpClientFactory.

# Prerequisites
* .NET Core 6
* Visual Studio 2022

# How to run
CoinTrader has been deployed to Azure but can also run from a developer's machine.

## Azure
Go to ...

## Developer machine
__Note: '~' denotes the home folder of the cloned repository.__

### To start the backend server

#### From Visual Studio...
Open solution, and run CoinTrader.API as Debug|AnyCPU.


#### From the command line...
```
cd ~/src/backend/API/CoinTrader.Api
dotnet run --launch-profile CoinTrader.Api
Then in a browser, navigate to https://localhost:7134/swagger
```

### To start the Angular frontent 

#### To prepare the frontend (once-off):
```
cd ~\src\frontend\coin-trader-web
npm install
```

#### To start the frontend:
```
ng serve --open
```

This will open a browser at http://localhost:4200/

#### To stop the frontend:

Type `Ctrl-C`


# Architecture

# Backend

# xUnit tests
To run the tests from the command line:
```
cd ~\src\backend\Test\ApiTest
dotnet watch test
```

# Frontend
Angular app made with


C:\dev\coin\src\frontend>ng new coin-trader-web --style=scss

VS Code workspace at ~/src/frontend/coin-trader-web.code-workspace


# Timings
Creating the backend solution with basic skeletons for backend API, xUnit test project, Swagger Client project, Angular project skeleton, .gitignore, making a start on the README.me: 4 hours

