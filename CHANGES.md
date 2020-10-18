## Future version (unversioned)

## 6.1.0 (October 18, 2020)

Features:

- New sync service client packets: `SYNC_START`, `SYNC_AUTH`, `SYNC_INIT`, `SYNC_UPDATE`, `SYNC_ACK`.
- New sync service server packets: `SYNC_AUTH`, `SYNC_INIT`, `SYNC_SUBSCRIBE`, `SYNC_UPDATE`.
- New server error types.
- New field `ownerId` for server packets `MOB_UPDATE`.

## 6.0.0 (February 19, 2020)

Since this version, the protocol contains changes that differ from the classic version. This version is still compatible with known clients of the game.

Features:

- New fields `serverConfiguration` and `bots` for server packets `LOGIN`.
- New field `isBot` for server packets `PLAYER_NEW`.

## 5.12.0 (February 19, 2020)

Improvements:

- Don't create new objects for static packets to reduce garbage collector work.

## 5.11.1 (December 11, 2019)

Completed classic version with no custom changes.
