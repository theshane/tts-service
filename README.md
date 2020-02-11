# TTS Service

## Overview
Stores and uses crowdsourced sizing data to determine a TrueToSizeCalculation which is the average of sizing data per shoe

## Architecture
2 Containers
Postgresql container
tts-web container runs the app

## Assumptions
I assumed that we had some sort of item database that we could hook into.
I grabbed some json from the site and chose tickerSymbol as my key

## Testing
I have api testing in place. I did set it up to be able to unit test each handler but I had a hard time mocking sequelize in the time allotted.

## How to run
You will need docker compose
run `docker-compose up` from the app directory
You can use the included Postman collection to test

### How to run automated testing
`docker exec -it tts-web "/bin/bash"`
Inside the docker run `npm test`



