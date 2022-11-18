#!/usr/bin/env bash
pwd=$(pwd)

npx ts-node ./src/seed/countrySeeds.ts
npx ts-node ./src/seed/quizSeeds.ts
npx ts-node ./src/seed/jokeSeeds.ts