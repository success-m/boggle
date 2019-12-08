# Boggle

Boggle is a word puzzle where the players form a word from a grid of letters. The rules are:
- The letters must be adjoining in a 'chain'. (Letter cubes in the chain may be adjacent horizontally, vertically, or diagonally.)
- Words must contain at least three letters.
- No letter cube may be used more than once within a single word.

This is an online representation of this game.

## Getting Started

Clone the repository and change directory to the repository root.

## Backend API

The backend API is built with ruby on rails.

### Prerequisites
- ruby v 2.5.7
- rails v 5.2.4
- gem v 3.0.6
- mySQL server

### Installation

- Install mysql2 gem. If you have any issues, then install related packages. Please refer https://stackoverflow.com/questions/3608287/error-installing-mysql2-failed-to-build-gem-native-extension
- Change directory to api and follow the instructions below.

```
bundle install 
```
This installs additional packages.

update ./api/config/database.yml with your mySQL configutations and run the following commands.

``` 
rails db:migrate
```
This creates the necessary tables.

```
rails db:seed
```
This loads the list of words into your table. The list of words used are populated from https://github.com/dwyl/english-words reporsitory.

```
rails s
```
This starts the rails server in "http://localhost:3000".

## Front end application

Front end application is build with react with redux as state manager.

### Prerequisites

- nodejs v 10.16.0
- npmm v 6.9.0

### Installation

- Open a new terminal, change directory to web and follow the instructions below.
``` 
npm install
```
This will install the node dependencies.

```
npm start
```
This will start the development server on "http://localhost:3001" since port 3000 is occupied by rails server.

## Important

- Make sure to run the rails server first.
- The application is dependent on the rails application ruing on port 3000.