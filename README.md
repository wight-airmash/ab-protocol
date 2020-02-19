# ab-protocol library

This library contains the constants, types and utilities needed to implement the client and server applications of the game.

## Installation

There are two versions: vanilla and the latest. Vanilla version is a full-featured version with no custom changes. The latest version is an extended version of the protocol, it is still compatible with the known clients of the game, but contains additions.

`npm install wight-airmash/ab-protocol#vanilla` to install stable vanilla version.
`npm install wight-airmash/ab-protocol#master` to install the latest stable or specify the version from tags.

## How to update or add packet schemas

There are two ways to marshal and unmarshal packets: using universal parser and using pre-generated functions for each packet type. Pre-generated functions are faster and recommended to use in production. You don't need to write these functions manually, it's possible to generate them from updated schemas.

To update packet schemas and regenerate functions:

1. Update schemas in `src/schemas`.
2. Update packet types in `src/types/packets-client` and `src/types/packets-server`.
3. Run `generators/generate.sh`.

If you want to use the universal parser during the development, pass `usePredefinedMarshal` as `false` to the marshal/unmarshal functions.
