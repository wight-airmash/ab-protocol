import CLIENT_PACKETS from '../packets/client';
import { DATA_TYPES } from '../types/data';
import { WSPacket } from '../packets';

export interface Login extends WSPacket {
  protocol?: number;
  name?: string;
  session?: string;
  horizonX?: number;
  horizonY?: number;
  flag?: string;
}

export interface Backup extends WSPacket {
  token?: string;
}

export interface Horizon extends WSPacket {
  horizonX?: number;
  horizonY?: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Ack extends WSPacket {}

export interface Pong extends WSPacket {
  num?: number;
}

export interface Key extends WSPacket {
  seq?: number;
  key?: number;
  state?: boolean;
}

export interface Command extends WSPacket {
  com?: string;
  data?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Scoredetailed extends WSPacket {}

export interface Chat extends WSPacket {
  text?: string;
}

export interface Whisper extends WSPacket {
  id?: number;
  text?: string;
}

export interface Say extends WSPacket {
  text?: string;
}

export interface Teamchat extends WSPacket {
  text?: string;
}

export interface Votemute extends WSPacket {
  id?: number;
}

export interface Localping extends WSPacket {
  auth?: number;
}

export default {
  [CLIENT_PACKETS.LOGIN]: [
    ['protocol', DATA_TYPES.uint8],
    ['name', DATA_TYPES.text],
    ['session', DATA_TYPES.text],
    ['horizonX', DATA_TYPES.uint16],
    ['horizonY', DATA_TYPES.uint16],
    ['flag', DATA_TYPES.text],
  ],
  [CLIENT_PACKETS.BACKUP]: [['token', DATA_TYPES.text]],
  [CLIENT_PACKETS.HORIZON]: [['horizonX', DATA_TYPES.uint16], ['horizonY', DATA_TYPES.uint16]],
  [CLIENT_PACKETS.ACK]: [],
  [CLIENT_PACKETS.PONG]: [['num', DATA_TYPES.uint32]],
  [CLIENT_PACKETS.KEY]: [
    ['seq', DATA_TYPES.uint32],
    ['key', DATA_TYPES.uint8],
    ['state', DATA_TYPES.boolean],
  ],
  [CLIENT_PACKETS.COMMAND]: [['com', DATA_TYPES.text], ['data', DATA_TYPES.text]],
  [CLIENT_PACKETS.SCOREDETAILED]: [],
  [CLIENT_PACKETS.CHAT]: [['text', DATA_TYPES.text]],
  [CLIENT_PACKETS.WHISPER]: [['id', DATA_TYPES.uint16], ['text', DATA_TYPES.text]],
  [CLIENT_PACKETS.SAY]: [['text', DATA_TYPES.text]],
  [CLIENT_PACKETS.TEAMCHAT]: [['text', DATA_TYPES.text]],
  [CLIENT_PACKETS.VOTEMUTE]: [['id', DATA_TYPES.uint16]],
  [CLIENT_PACKETS.LOCALPING]: [['auth', DATA_TYPES.uint32]],
};
