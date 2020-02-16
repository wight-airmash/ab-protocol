#!/bin/sh

BASEDIR=$(dirname "$0")
cd "$BASEDIR"

echo "Generate marshaling..."
node ./generate-marshaling.js
npx eslint -c ../package.json --parser-options=project:../tsconfig.json --fix ../src/marshaling/client.ts ../src/marshaling/server.ts

echo "Generate unmarshaling..."
node ./generate-unmarshaling.js
npx eslint -c ../package.json --parser-options=project:../tsconfig.json --fix ../src/unmarshaling/client.ts ../src/unmarshaling/server.ts

