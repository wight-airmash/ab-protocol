import SERVER_PACKETS from '../packets/server';
import { DATA_TYPES } from '../types/data';
import { WSPacket } from '../packets';
import {
  CTF_TEAMS,
  CTF_FLAG_STATE,
  SERVER_CUSTOM_TYPES,
  SERVER_MESSAGE_TYPES,
  MOB_DESPAWN_TYPES,
  MOB_TYPES,
  LEAVE_HORIZON_TYPES,
  PLAYER_LEVEL_UPDATE_TYPES,
  PLAYER_POWERUP_TYPES,
} from '../types/server';

export interface LoginPlayer {
  id?: number;
  status?: number;
  level?: number;
  name?: string;
  type?: number;
  team?: number;
  posX?: number;
  posY?: number;
  rot?: number;
  flag?: number;
  upgrades?: number;
}

export interface Login extends WSPacket {
  success?: boolean;
  id?: number;
  team?: number;
  clock?: number;
  token?: string;
  type?: number;
  room?: string;
  players?: LoginPlayer[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Backup extends WSPacket {}

export interface Ping extends WSPacket {
  clock?: number;
  num?: number;
}

export interface PingResult extends WSPacket {
  ping?: number;
  playerstotal?: number;
  playersgame?: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Ack extends WSPacket {}

export interface Error extends WSPacket {
  error?: number;
}

export interface CommandReply extends WSPacket {
  type?: number;
  text?: string;
}

export interface PlayerNew extends WSPacket {
  id?: number;
  status?: number;
  name?: string;
  type?: number;
  team?: number;
  posX?: number;
  posY?: number;
  rot?: number;
  flag?: number;
  upgrades?: number;
}

export interface PlayerLeave extends WSPacket {
  id?: number;
}

export interface PlayerUpdate extends WSPacket {
  clock?: number;
  id?: number;
  keystate?: number;
  upgrades?: number;
  posX?: number;
  posY?: number;
  rot?: number;
  speedX?: number;
  speedY?: number;
}

export interface PlayerFireProjectile {
  id?: number;
  type?: number;
  posX?: number;
  posY?: number;
  speedX?: number;
  speedY?: number;
  accelX?: number;
  accelY?: number;
  maxSpeed?: number;
}

export interface PlayerFire extends WSPacket {
  clock?: number;
  id?: number;
  energy?: number;
  energyRegen?: number;
  projectiles?: PlayerFireProjectile[];
}

export interface PlayerRespawn extends WSPacket {
  id?: number;
  posX?: number;
  posY?: number;
  rot?: number;
  upgrades?: number;
}

export interface PlayerFlag extends WSPacket {
  id?: number;
  flag?: number;
}

export interface PlayerHitPlayer {
  id?: number;
  health?: number;
  healthRegen?: number;
}

export interface PlayerHit extends WSPacket {
  id?: number;
  type?: number;
  posX?: number;
  posY?: number;
  owner?: number;
  players?: PlayerHitPlayer[];
}

export interface PlayerKill extends WSPacket {
  id?: number;
  killer?: number;
  posX?: number;
  posY?: number;
}

export interface PlayerUpgrade extends WSPacket {
  upgrades?: number;
  type?: number;
  speed?: number;
  defense?: number;
  energy?: number;
  missile?: number;
}

export interface PlayerType extends WSPacket {
  id?: number;
  type?: number;
}

export interface PlayerPowerup extends WSPacket {
  type?: PLAYER_POWERUP_TYPES;
  duration?: number;
}

export interface PlayerLevel extends WSPacket {
  id?: number;
  type?: PLAYER_LEVEL_UPDATE_TYPES;
  level?: number;
}

export interface PlayerReteamPlayers {
  id?: number;
  team?: number;
}

export interface PlayerReteam extends WSPacket {
  players?: PlayerReteamPlayers[];
}

export interface GameFlag extends WSPacket {
  type?: CTF_FLAG_STATE;
  flag?: CTF_TEAMS;
  id?: number;
  posX?: number;
  posY?: number;
  blueteam?: number;
  redteam?: number;
}

export interface GameSpectate extends WSPacket {
  id?: number;
}

export interface GamePlayersalive extends WSPacket {
  players?: number;
}

export interface GameFirewall extends WSPacket {
  type?: number;
  status?: number;
  posX?: number;
  posY?: number;
  radius?: number;
  speed?: number;
}

export interface EventRepelPlayer {
  id?: number;
  keystate?: number;
  posX?: number;
  posY?: number;
  rot?: number;
  speedX?: number;
  speedY?: number;
  energy?: number;
  energyRegen?: number;
  playerHealth?: number;
  playerHealthRegen?: number;
}

export interface EventRepelMob {
  id?: number;
  type?: number;
  posX?: number;
  posY?: number;
  speedX?: number;
  speedY?: number;
  accelX?: number;
  accelY?: number;
  maxSpeed?: number;
}

export interface EventRepel extends WSPacket {
  clock?: number;
  id?: number;
  posX?: number;
  posY?: number;
  rot?: number;
  speedX?: number;
  speedY?: number;
  energy?: number;
  energyRegen?: number;
  players?: EventRepelPlayer[];
  mobs?: EventRepelMob[];
}

export interface EventBoost extends WSPacket {
  clock?: number;
  id?: number;
  boost?: boolean;
  posX?: number;
  posY?: number;
  rot?: number;
  speedX?: number;
  speedY?: number;
  energy?: number;
  energyRegen?: number;
}

export interface EventBounce extends WSPacket {
  clock?: number;
  id?: number;
  keystate?: number;
  posX?: number;
  posY?: number;
  rot?: number;
  speedX?: number;
  speedY?: number;
}

export interface EventStealth extends WSPacket {
  id?: number;
  state?: boolean;
  energy?: number;
  energyRegen?: number;
}

export interface EventLeavehorizon extends WSPacket {
  type?: LEAVE_HORIZON_TYPES;
  id?: number;
}

export interface MobUpdate extends WSPacket {
  clock?: number;
  id?: number;
  type?: MOB_TYPES;
  posX?: number;
  posY?: number;
  speedX?: number;
  speedY?: number;
  accelX?: number;
  accelY?: number;
  maxSpeed?: number;
}

export interface MobUpdateStationary extends WSPacket {
  id?: number;
  type?: MOB_TYPES;
  posX?: number;
  posY?: number;
}

export interface MobDespawn extends WSPacket {
  id?: number;
  type?: MOB_DESPAWN_TYPES;
}

export interface MobDespawnCoords extends WSPacket {
  id?: number;
  type?: MOB_TYPES;
  posX?: number;
  posY?: number;
}

export interface ScoreUpdate extends WSPacket {
  id?: number;
  score?: number;
  earnings?: number;
  upgrades?: number;
  totalkills?: number;
  totaldeaths?: number;
}

export interface ScoreBoardData {
  id?: number;
  score?: number;
  level?: number;
}

export interface ScoreBoardRanking {
  id?: number;
  x?: number;
  y?: number;
}

export interface ScoreBoard extends WSPacket {
  data?: ScoreBoardData[];
  rankings?: ScoreBoardRanking[];
}

export interface ScoreDetailedScore {
  id?: number;
  level?: number;
  score?: number;
  kills?: number;
  deaths?: number;
  damage?: number;
  ping?: number;
}

export interface ScoreDetailed extends WSPacket {
  scores?: ScoreDetailedScore[];
}

export interface ScoreDetailedCtfScore {
  id?: number;
  level?: number;
  captures?: number;
  score?: number;
  kills?: number;
  deaths?: number;
  damage?: number;
  ping?: number;
}

export interface ScoreDetailedCtf extends WSPacket {
  scores?: ScoreDetailedCtfScore[];
}

export interface ScoreDetailedBtrScore {
  id?: number;
  level?: number;
  alive?: boolean;
  wins?: number;
  score?: number;
  kills?: number;
  deaths?: number;
  damage?: number;
  ping?: number;
}

export interface ScoreDetailedBtr extends WSPacket {
  scores?: ScoreDetailedBtrScore[];
}

export interface ChatTeam extends WSPacket {
  id?: number;
  text?: string;
}

export interface ChatPublic extends WSPacket {
  id?: number;
  text?: string;
}

export interface ChatSay extends WSPacket {
  id?: number;
  text?: string;
}

export interface ChatWhisper extends WSPacket {
  from?: number;
  to?: number;
  text?: string;
}

export interface ChatVotemutepassed extends WSPacket {
  id?: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ChatVotemuted extends WSPacket {}

export interface ServerMessage extends WSPacket {
  type?: SERVER_MESSAGE_TYPES;
  duration?: number;
  text?: string;
}

export interface ServerCustom extends WSPacket {
  type?: SERVER_CUSTOM_TYPES;
  data?: string;
}

export default {
  [SERVER_PACKETS.LOGIN]: [
    ['success', DATA_TYPES.boolean],
    ['id', DATA_TYPES.uint16],
    ['team', DATA_TYPES.uint16],
    ['clock', DATA_TYPES.uint32],
    ['token', DATA_TYPES.text],
    ['type', DATA_TYPES.uint8],
    ['room', DATA_TYPES.text],
    [
      'players',
      DATA_TYPES.array,
      [
        ['id', DATA_TYPES.uint16],
        ['status', DATA_TYPES.uint8],
        ['level', DATA_TYPES.uint8],
        ['name', DATA_TYPES.text],
        ['type', DATA_TYPES.uint8],
        ['team', DATA_TYPES.uint16],
        ['posX', DATA_TYPES.coordx],
        ['posY', DATA_TYPES.coordy],
        ['rot', DATA_TYPES.rotation],
        ['flag', DATA_TYPES.uint16],
        ['upgrades', DATA_TYPES.uint8],
      ],
    ],
  ],

  [SERVER_PACKETS.BACKUP]: [],

  [SERVER_PACKETS.PING]: [['clock', DATA_TYPES.uint32], ['num', DATA_TYPES.uint32]],

  [SERVER_PACKETS.PING_RESULT]: [
    ['ping', DATA_TYPES.uint16],
    ['playerstotal', DATA_TYPES.uint32],
    ['playersgame', DATA_TYPES.uint32],
  ],

  [SERVER_PACKETS.ACK]: [],

  [SERVER_PACKETS.ERROR]: [['error', DATA_TYPES.uint8]],

  [SERVER_PACKETS.COMMAND_REPLY]: [['type', DATA_TYPES.uint8], ['text', DATA_TYPES.textbig]],

  [SERVER_PACKETS.PLAYER_NEW]: [
    ['id', DATA_TYPES.uint16],
    ['status', DATA_TYPES.uint8],
    ['name', DATA_TYPES.text],
    ['type', DATA_TYPES.uint8],
    ['team', DATA_TYPES.uint16],
    ['posX', DATA_TYPES.coordx],
    ['posY', DATA_TYPES.coordy],
    ['rot', DATA_TYPES.rotation],
    ['flag', DATA_TYPES.uint16],
    ['upgrades', DATA_TYPES.uint8],
  ],

  [SERVER_PACKETS.PLAYER_LEAVE]: [['id', DATA_TYPES.uint16]],

  [SERVER_PACKETS.PLAYER_UPDATE]: [
    ['clock', DATA_TYPES.uint32],
    ['id', DATA_TYPES.uint16],
    ['keystate', DATA_TYPES.uint8],
    ['upgrades', DATA_TYPES.uint8],
    ['posX', DATA_TYPES.coord24],
    ['posY', DATA_TYPES.coord24],
    ['rot', DATA_TYPES.rotation],
    ['speedX', DATA_TYPES.speed],
    ['speedY', DATA_TYPES.speed],
  ],

  [SERVER_PACKETS.PLAYER_FIRE]: [
    ['clock', DATA_TYPES.uint32],
    ['id', DATA_TYPES.uint16],
    ['energy', DATA_TYPES.healthenergy],
    ['energyRegen', DATA_TYPES.regen],
    [
      'projectiles',
      DATA_TYPES.arraysmall,
      [
        ['id', DATA_TYPES.uint16],
        ['type', DATA_TYPES.uint8],
        ['posX', DATA_TYPES.coordx],
        ['posY', DATA_TYPES.coordy],
        ['speedX', DATA_TYPES.speed],
        ['speedY', DATA_TYPES.speed],
        ['accelX', DATA_TYPES.accel],
        ['accelY', DATA_TYPES.accel],
        ['maxSpeed', DATA_TYPES.speed],
      ],
    ],
  ],

  // [packet.PLAYER_SAY]: [['id', types.uint16], ['text', types.text]],

  [SERVER_PACKETS.PLAYER_RESPAWN]: [
    ['id', DATA_TYPES.uint16],
    ['posX', DATA_TYPES.coord24],
    ['posY', DATA_TYPES.coord24],
    ['rot', DATA_TYPES.rotation],
    ['upgrades', DATA_TYPES.uint8],
  ],

  [SERVER_PACKETS.PLAYER_FLAG]: [['id', DATA_TYPES.uint16], ['flag', DATA_TYPES.uint16]],

  [SERVER_PACKETS.PLAYER_HIT]: [
    ['id', DATA_TYPES.uint16],
    ['type', DATA_TYPES.uint8],
    ['posX', DATA_TYPES.coordx],
    ['posY', DATA_TYPES.coordy],
    ['owner', DATA_TYPES.uint16],
    [
      'players',
      DATA_TYPES.arraysmall,
      [
        ['id', DATA_TYPES.uint16],
        ['health', DATA_TYPES.healthenergy],
        ['healthRegen', DATA_TYPES.regen],
      ],
    ],
  ],

  [SERVER_PACKETS.PLAYER_KILL]: [
    ['id', DATA_TYPES.uint16],
    ['killer', DATA_TYPES.uint16],
    ['posX', DATA_TYPES.coordx],
    ['posY', DATA_TYPES.coordy],
  ],

  [SERVER_PACKETS.PLAYER_UPGRADE]: [
    ['upgrades', DATA_TYPES.uint16],
    ['type', DATA_TYPES.uint8],
    ['speed', DATA_TYPES.uint8],
    ['defense', DATA_TYPES.uint8],
    ['energy', DATA_TYPES.uint8],
    ['missile', DATA_TYPES.uint8],
  ],

  [SERVER_PACKETS.PLAYER_TYPE]: [['id', DATA_TYPES.uint16], ['type', DATA_TYPES.uint8]],

  [SERVER_PACKETS.PLAYER_POWERUP]: [['type', DATA_TYPES.uint8], ['duration', DATA_TYPES.uint32]],

  [SERVER_PACKETS.PLAYER_LEVEL]: [
    ['id', DATA_TYPES.uint16],
    ['type', DATA_TYPES.uint8],
    ['level', DATA_TYPES.uint8],
  ],

  [SERVER_PACKETS.PLAYER_RETEAM]: [
    ['players', DATA_TYPES.array, [['id', DATA_TYPES.uint16], ['team', DATA_TYPES.uint16]]],
  ],

  [SERVER_PACKETS.GAME_FLAG]: [
    ['type', DATA_TYPES.uint8],
    ['flag', DATA_TYPES.uint8],
    ['id', DATA_TYPES.uint16],
    ['posX', DATA_TYPES.coord24],
    ['posY', DATA_TYPES.coord24],
    ['blueteam', DATA_TYPES.uint8],
    ['redteam', DATA_TYPES.uint8],
  ],

  [SERVER_PACKETS.GAME_SPECTATE]: [['id', DATA_TYPES.uint16]],

  [SERVER_PACKETS.GAME_PLAYERSALIVE]: [['players', DATA_TYPES.uint16]],

  [SERVER_PACKETS.GAME_FIREWALL]: [
    ['type', DATA_TYPES.uint8],
    ['status', DATA_TYPES.uint8],
    ['posX', DATA_TYPES.coordx],
    ['posY', DATA_TYPES.coordy],
    ['radius', DATA_TYPES.float32],
    ['speed', DATA_TYPES.float32],
  ],

  [SERVER_PACKETS.EVENT_REPEL]: [
    ['clock', DATA_TYPES.uint32],
    ['id', DATA_TYPES.uint16],
    ['posX', DATA_TYPES.coordx],
    ['posY', DATA_TYPES.coordy],
    ['rot', DATA_TYPES.rotation],
    ['speedX', DATA_TYPES.speed],
    ['speedY', DATA_TYPES.speed],
    ['energy', DATA_TYPES.healthenergy],
    ['energyRegen', DATA_TYPES.regen],
    [
      'players',
      DATA_TYPES.arraysmall,
      [
        ['id', DATA_TYPES.uint16],
        ['keystate', DATA_TYPES.uint8],
        ['posX', DATA_TYPES.coordx],
        ['posY', DATA_TYPES.coordy],
        ['rot', DATA_TYPES.rotation],
        ['speedX', DATA_TYPES.speed],
        ['speedY', DATA_TYPES.speed],
        ['energy', DATA_TYPES.healthenergy],
        ['energyRegen', DATA_TYPES.regen],
        ['playerHealth', DATA_TYPES.healthenergy],
        ['playerHealthRegen', DATA_TYPES.regen],
      ],
    ],
    [
      'mobs',
      DATA_TYPES.arraysmall,
      [
        ['id', DATA_TYPES.uint16],
        ['type', DATA_TYPES.uint8],
        ['posX', DATA_TYPES.coordx],
        ['posY', DATA_TYPES.coordy],
        ['speedX', DATA_TYPES.speed],
        ['speedY', DATA_TYPES.speed],
        ['accelX', DATA_TYPES.accel],
        ['accelY', DATA_TYPES.accel],
        ['maxSpeed', DATA_TYPES.speed],
      ],
    ],
  ],

  [SERVER_PACKETS.EVENT_BOOST]: [
    ['clock', DATA_TYPES.uint32],
    ['id', DATA_TYPES.uint16],
    ['boost', DATA_TYPES.boolean],
    ['posX', DATA_TYPES.coord24],
    ['posY', DATA_TYPES.coord24],
    ['rot', DATA_TYPES.rotation],
    ['speedX', DATA_TYPES.speed],
    ['speedY', DATA_TYPES.speed],
    ['energy', DATA_TYPES.healthenergy],
    ['energyRegen', DATA_TYPES.regen],
  ],

  [SERVER_PACKETS.EVENT_BOUNCE]: [
    ['clock', DATA_TYPES.uint32],
    ['id', DATA_TYPES.uint16],
    ['keystate', DATA_TYPES.uint8],
    ['posX', DATA_TYPES.coord24],
    ['posY', DATA_TYPES.coord24],
    ['rot', DATA_TYPES.rotation],
    ['speedX', DATA_TYPES.speed],
    ['speedY', DATA_TYPES.speed],
  ],

  [SERVER_PACKETS.EVENT_STEALTH]: [
    ['id', DATA_TYPES.uint16],
    ['state', DATA_TYPES.boolean],
    ['energy', DATA_TYPES.healthenergy],
    ['energyRegen', DATA_TYPES.regen],
  ],

  [SERVER_PACKETS.EVENT_LEAVEHORIZON]: [['type', DATA_TYPES.uint8], ['id', DATA_TYPES.uint16]],

  [SERVER_PACKETS.MOB_UPDATE]: [
    ['clock', DATA_TYPES.uint32],
    ['id', DATA_TYPES.uint16],
    ['type', DATA_TYPES.uint8],
    ['posX', DATA_TYPES.coordx],
    ['posY', DATA_TYPES.coordy],
    ['speedX', DATA_TYPES.speed],
    ['speedY', DATA_TYPES.speed],
    ['accelX', DATA_TYPES.accel],
    ['accelY', DATA_TYPES.accel],
    ['maxSpeed', DATA_TYPES.speed],
  ],

  [SERVER_PACKETS.MOB_UPDATE_STATIONARY]: [
    ['id', DATA_TYPES.uint16],
    ['type', DATA_TYPES.uint8],
    ['posX', DATA_TYPES.float32],
    ['posY', DATA_TYPES.float32],
  ],

  [SERVER_PACKETS.MOB_DESPAWN]: [['id', DATA_TYPES.uint16], ['type', DATA_TYPES.uint8]],

  [SERVER_PACKETS.MOB_DESPAWN_COORDS]: [
    ['id', DATA_TYPES.uint16],
    ['type', DATA_TYPES.uint8],
    ['posX', DATA_TYPES.coordx],
    ['posY', DATA_TYPES.coordy],
  ],

  [SERVER_PACKETS.SCORE_UPDATE]: [
    ['id', DATA_TYPES.uint16],
    ['score', DATA_TYPES.uint32],
    ['earnings', DATA_TYPES.uint32],
    ['upgrades', DATA_TYPES.uint16],
    ['totalkills', DATA_TYPES.uint32],
    ['totaldeaths', DATA_TYPES.uint32],
  ],

  [SERVER_PACKETS.SCORE_BOARD]: [
    [
      'data',
      DATA_TYPES.array,
      [['id', DATA_TYPES.uint16], ['score', DATA_TYPES.uint32], ['level', DATA_TYPES.uint8]],
    ],
    [
      'rankings',
      DATA_TYPES.array,
      [['id', DATA_TYPES.uint16], ['x', DATA_TYPES.uint8], ['y', DATA_TYPES.uint8]],
    ],
  ],

  [SERVER_PACKETS.SCORE_DETAILED]: [
    [
      'scores',
      DATA_TYPES.array,
      [
        ['id', DATA_TYPES.uint16],
        ['level', DATA_TYPES.uint8],
        ['score', DATA_TYPES.uint32],
        ['kills', DATA_TYPES.uint16],
        ['deaths', DATA_TYPES.uint16],
        ['damage', DATA_TYPES.float32],
        ['ping', DATA_TYPES.uint16],
      ],
    ],
  ],

  [SERVER_PACKETS.SCORE_DETAILED_CTF]: [
    [
      'scores',
      DATA_TYPES.array,
      [
        ['id', DATA_TYPES.uint16],
        ['level', DATA_TYPES.uint8],
        ['captures', DATA_TYPES.uint16],
        ['score', DATA_TYPES.uint32],
        ['kills', DATA_TYPES.uint16],
        ['deaths', DATA_TYPES.uint16],
        ['damage', DATA_TYPES.float32],
        ['ping', DATA_TYPES.uint16],
      ],
    ],
  ],

  [SERVER_PACKETS.SCORE_DETAILED_BTR]: [
    [
      'scores',
      DATA_TYPES.array,
      [
        ['id', DATA_TYPES.uint16],
        ['level', DATA_TYPES.uint8],
        ['alive', DATA_TYPES.boolean],
        ['wins', DATA_TYPES.uint16],
        ['score', DATA_TYPES.uint32],
        ['kills', DATA_TYPES.uint16],
        ['deaths', DATA_TYPES.uint16],
        ['damage', DATA_TYPES.float32],
        ['ping', DATA_TYPES.uint16],
      ],
    ],
  ],

  [SERVER_PACKETS.CHAT_TEAM]: [['id', DATA_TYPES.uint16], ['text', DATA_TYPES.text]],

  [SERVER_PACKETS.CHAT_PUBLIC]: [['id', DATA_TYPES.uint16], ['text', DATA_TYPES.text]],

  [SERVER_PACKETS.CHAT_SAY]: [['id', DATA_TYPES.uint16], ['text', DATA_TYPES.text]],

  [SERVER_PACKETS.CHAT_WHISPER]: [
    ['from', DATA_TYPES.uint16],
    ['to', DATA_TYPES.uint16],
    ['text', DATA_TYPES.text],
  ],

  [SERVER_PACKETS.CHAT_VOTEMUTEPASSED]: [['id', DATA_TYPES.uint16]],

  [SERVER_PACKETS.CHAT_VOTEMUTED]: [],

  [SERVER_PACKETS.SERVER_MESSAGE]: [
    ['type', DATA_TYPES.uint8],
    ['duration', DATA_TYPES.uint32],
    ['text', DATA_TYPES.textbig],
  ],

  [SERVER_PACKETS.SERVER_CUSTOM]: [['type', DATA_TYPES.uint8], ['data', DATA_TYPES.textbig]],
};
