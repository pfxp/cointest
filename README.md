# Coin Trader README

# Overview

# Architecture
Coin Trader is comprised of a ASP.NET Core Web API backend and an Angular SPA client.

The backend core layer is CoinTrader.Shared which contains data classes, enumerations and services. There is a corresponding xUnit test _CoinTrader.Shared.Tests_.

This is used by _CoinTrader.API_ which is the backend of the coin trading platform. The two requested endpoints are present and Swagger/SwaggerUI is enabled.

_CoinTrader.Api.Client_ contains NSwagStudio v13.15.9 definitions to create C# and TypeScript clients. THe C# client is used by a xUnit test _CoinTrader.Api.Client.Tests_ and the TypeScript client is used by the Angular frontend.

The frontend is an Angular app that calls the backend.

# Features
* Efficient socket utilisation with IHttpClientFactory.

# Prerequisites
* .NET Core 6
* Visual Studio 2022

The backend was developed in VS 2022 and the frontend in VS Code.

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
* Creating the backend solution with basic skeletons for backend API, xUnit test project, Swagger Client project, Angular project skeleton, .gitignore, making a start on the README.me: 4 hours
* Configurable source API for real pricedata, using IHttpClientFactory and Newtonsoft to parse JSON: 1 hour.
* Fleshing out some unit tests, refactoring services outside the CoinTrader.API service: 0.75 hour.
* Regenerating the API clients and adding the API Client xUnit test: 0.5 hour.
* Cleaning up the skeleton Angular project and documenting the architecture: 0.5 hour.

