# TTS Service

## Overview
Stores and uses crowdsourced sizing data to determine a TrueToSizeCalculation which is the average of sizing data per shoe

## Architecture
### Containers
Postgresql container
tts-web container runs the app

### App
express
Sequelize orm

### Databases
Dev - Postgresql
Test - sqlite3

## Assumptions
I assumed that we had some sort of item database that we could hook into.
I grabbed some json from the site and chose tickerSymbol as my key

## Testing
I have api testing in place. I did set it up to be able to unit test each handler but I had a hard time mocking sequelize in the time allotted.

## How to run
You will need docker compose
run `docker-compose up -d` from the app directory
You can use the included Postman collection to test

### How to run automated testing
`docker exec -it tts-web "/bin/bash"`
Inside the docker run `npm test`

### Other Notes
1. I wanted to build unit tests for my handlers but I could not get the sequelize mocks to work in the time I had to work on this so I moved on.
2. The db config file is in GIT - This is a bad thing but again, it is in the interest of time
3. Thank you for taking the time too look at my code. I had fun writing it.