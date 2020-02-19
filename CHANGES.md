## Future version (unversioned)

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
