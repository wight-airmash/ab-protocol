#!/bin/sh

BASEDIR=$(dirname "$0")
PROJECT_ROOT=$(realpath "$BASEDIR/../")
cd "$BASEDIR"

echo "Build project..."
(cd "$PROJECT_ROOT" && exec npm run build)

echo "Generate marshaling..."
node ./generate-marshaling.js

echo "Generate unmarshaling..."
node ./generate-unmarshaling.js

echo "Fixing lint errors..."
npx eslint -c ../package.json --parser-options=project:../tsconfig.json --fix ../src/marshaling/client.ts ../src/marshaling/server.ts
npx eslint -c ../package.json --parser-options=project:../tsconfig.json --fix ../src/unmarshaling/client.ts ../src/unmarshaling/server.ts
