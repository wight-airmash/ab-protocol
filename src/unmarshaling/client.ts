/*
 *
 * This file was created automatically with generator
 * Please don't change it manually.
 *
 */

import packet from '../packets/client';
import { decodeUTF8 } from '../support/utils';
import {
  Login,
  Backup,
  Horizon,
  Ack,
  Pong,
  Key,
  Command,
  Scoredetailed,
  Chat,
  Whisper,
  Say,
  Teamchat,
  Votemute,
  SyncStart,
  SyncAuth,
  SyncInit,
  SyncUpdate,
  SyncAck,
  Localping,
} from '../types/packets-client';

const staticAckPacket: Ack = { c: 5 };
const staticScoredetailedPacket: Scoredetailed = { c: 12 };
const staticSyncStartPacket: SyncStart = { c: 200 };

export default {
  [packet.LOGIN]: (buffer: ArrayBuffer): Login => {
    const msg: Login = { c: 0 };
    const dataView = new DataView(buffer);

    let readIndex = 1;

    // protocol, uint8
    msg.protocol = dataView.getUint8(readIndex);
    readIndex += 1;

    // name, text
    {
      const stringLength = dataView.getUint8(readIndex);
      const encodedString = new Uint8Array(stringLength);

      readIndex += 1;

      for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
        encodedString[charIndex] = dataView.getUint8(readIndex + charIndex);
      }

      msg.name = decodeUTF8(encodedString);
      readIndex += stringLength;
    }

    // session, text
    {
      const stringLength = dataView.getUint8(readIndex);
      const encodedString = new Uint8Array(stringLength);

      readIndex += 1;

      for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
        encodedString[charIndex] = dataView.getUint8(readIndex + charIndex);
      }

      msg.session = decodeUTF8(encodedString);
      readIndex += stringLength;
    }

    // horizonX, uint16
    msg.horizonX = dataView.getUint16(readIndex, true);
    readIndex += 2;

    // horizonY, uint16
    msg.horizonY = dataView.getUint16(readIndex, true);
    readIndex += 2;

    // flag, text
    {
      const stringLength = dataView.getUint8(readIndex);
      const encodedString = new Uint8Array(stringLength);

      readIndex += 1;

      for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
        encodedString[charIndex] = dataView.getUint8(readIndex + charIndex);
      }

      msg.flag = decodeUTF8(encodedString);
      readIndex += stringLength;
    }

    return msg;
  },

  [packet.BACKUP]: (buffer: ArrayBuffer): Backup => {
    const msg: Backup = { c: 1 };
    const dataView = new DataView(buffer);

    let readIndex = 1;

    // token, text
    {
      const stringLength = dataView.getUint8(readIndex);
      const encodedString = new Uint8Array(stringLength);

      readIndex += 1;

      for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
        encodedString[charIndex] = dataView.getUint8(readIndex + charIndex);
      }

      msg.token = decodeUTF8(encodedString);
      readIndex += stringLength;
    }

    return msg;
  },

  [packet.HORIZON]: (buffer: ArrayBuffer): Horizon => {
    const msg: Horizon = { c: 2 };
    const dataView = new DataView(buffer);

    let readIndex = 1;

    // horizonX, uint16
    msg.horizonX = dataView.getUint16(readIndex, true);
    readIndex += 2;

    // horizonY, uint16
    msg.horizonY = dataView.getUint16(readIndex, true);
    readIndex += 2;

    return msg;
  },

  [packet.ACK]: (): Ack => staticAckPacket,

  [packet.PONG]: (buffer: ArrayBuffer): Pong => {
    const msg: Pong = { c: 6 };
    const dataView = new DataView(buffer);

    let readIndex = 1;

    // num, uint32
    msg.num = dataView.getUint32(readIndex, true);
    readIndex += 4;

    return msg;
  },

  [packet.KEY]: (buffer: ArrayBuffer): Key => {
    const msg: Key = { c: 10 };
    const dataView = new DataView(buffer);

    let readIndex = 1;

    // seq, uint32
    msg.seq = dataView.getUint32(readIndex, true);
    readIndex += 4;

    // key, uint8
    msg.key = dataView.getUint8(readIndex);
    readIndex += 1;

    // state, boolean
    msg.state = dataView.getUint8(readIndex) !== 0;
    readIndex += 1;

    return msg;
  },

  [packet.COMMAND]: (buffer: ArrayBuffer): Command => {
    const msg: Command = { c: 11 };
    const dataView = new DataView(buffer);

    let readIndex = 1;

    // com, text
    {
      const stringLength = dataView.getUint8(readIndex);
      const encodedString = new Uint8Array(stringLength);

      readIndex += 1;

      for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
        encodedString[charIndex] = dataView.getUint8(readIndex + charIndex);
      }

      msg.com = decodeUTF8(encodedString);
      readIndex += stringLength;
    }

    // data, text
    {
      const stringLength = dataView.getUint8(readIndex);
      const encodedString = new Uint8Array(stringLength);

      readIndex += 1;

      for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
        encodedString[charIndex] = dataView.getUint8(readIndex + charIndex);
      }

      msg.data = decodeUTF8(encodedString);
      readIndex += stringLength;
    }

    return msg;
  },

  [packet.SCOREDETAILED]: (): Scoredetailed => staticScoredetailedPacket,

  [packet.CHAT]: (buffer: ArrayBuffer): Chat => {
    const msg: Chat = { c: 20 };
    const dataView = new DataView(buffer);

    let readIndex = 1;

    // text, text
    {
      const stringLength = dataView.getUint8(readIndex);
      const encodedString = new Uint8Array(stringLength);

      readIndex += 1;

      for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
        encodedString[charIndex] = dataView.getUint8(readIndex + charIndex);
      }

      msg.text = decodeUTF8(encodedString);
      readIndex += stringLength;
    }

    return msg;
  },

  [packet.WHISPER]: (buffer: ArrayBuffer): Whisper => {
    const msg: Whisper = { c: 21 };
    const dataView = new DataView(buffer);

    let readIndex = 1;

    // id, uint16
    msg.id = dataView.getUint16(readIndex, true);
    readIndex += 2;

    // text, text
    {
      const stringLength = dataView.getUint8(readIndex);
      const encodedString = new Uint8Array(stringLength);

      readIndex += 1;

      for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
        encodedString[charIndex] = dataView.getUint8(readIndex + charIndex);
      }

      msg.text = decodeUTF8(encodedString);
      readIndex += stringLength;
    }

    return msg;
  },

  [packet.SAY]: (buffer: ArrayBuffer): Say => {
    const msg: Say = { c: 22 };
    const dataView = new DataView(buffer);

    let readIndex = 1;

    // text, text
    {
      const stringLength = dataView.getUint8(readIndex);
      const encodedString = new Uint8Array(stringLength);

      readIndex += 1;

      for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
        encodedString[charIndex] = dataView.getUint8(readIndex + charIndex);
      }

      msg.text = decodeUTF8(encodedString);
      readIndex += stringLength;
    }

    return msg;
  },

  [packet.TEAMCHAT]: (buffer: ArrayBuffer): Teamchat => {
    const msg: Teamchat = { c: 23 };
    const dataView = new DataView(buffer);

    let readIndex = 1;

    // text, text
    {
      const stringLength = dataView.getUint8(readIndex);
      const encodedString = new Uint8Array(stringLength);

      readIndex += 1;

      for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
        encodedString[charIndex] = dataView.getUint8(readIndex + charIndex);
      }

      msg.text = decodeUTF8(encodedString);
      readIndex += stringLength;
    }

    return msg;
  },

  [packet.VOTEMUTE]: (buffer: ArrayBuffer): Votemute => {
    const msg: Votemute = { c: 24 };
    const dataView = new DataView(buffer);

    let readIndex = 1;

    // id, uint16
    msg.id = dataView.getUint16(readIndex, true);
    readIndex += 2;

    return msg;
  },

  [packet.SYNC_START]: (): SyncStart => staticSyncStartPacket,

  [packet.SYNC_AUTH]: (buffer: ArrayBuffer): SyncAuth => {
    const msg: SyncAuth = { c: 201 };
    const dataView = new DataView(buffer);

    let readIndex = 1;

    // response, text
    {
      const stringLength = dataView.getUint8(readIndex);
      const encodedString = new Uint8Array(stringLength);

      readIndex += 1;

      for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
        encodedString[charIndex] = dataView.getUint8(readIndex + charIndex);
      }

      msg.response = decodeUTF8(encodedString);
      readIndex += stringLength;
    }

    return msg;
  },

  [packet.SYNC_INIT]: (buffer: ArrayBuffer): SyncInit => {
    const msg: SyncInit = { c: 202 };
    const dataView = new DataView(buffer);

    let readIndex = 1;

    // sequence, uint32
    msg.sequence = dataView.getUint32(readIndex, true);
    readIndex += 4;

    // timestamp, float64
    msg.timestamp = dataView.getFloat64(readIndex, true);
    readIndex += 8;

    // serverId, text
    {
      const stringLength = dataView.getUint8(readIndex);
      const encodedString = new Uint8Array(stringLength);

      readIndex += 1;

      for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
        encodedString[charIndex] = dataView.getUint8(readIndex + charIndex);
      }

      msg.serverId = decodeUTF8(encodedString);
      readIndex += stringLength;
    }

    // wsEndpoint, text
    {
      const stringLength = dataView.getUint8(readIndex);
      const encodedString = new Uint8Array(stringLength);

      readIndex += 1;

      for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
        encodedString[charIndex] = dataView.getUint8(readIndex + charIndex);
      }

      msg.wsEndpoint = decodeUTF8(encodedString);
      readIndex += stringLength;
    }

    return msg;
  },

  [packet.SYNC_UPDATE]: (buffer: ArrayBuffer): SyncUpdate => {
    const msg: SyncUpdate = { c: 204 };
    const dataView = new DataView(buffer);

    let readIndex = 1;

    // complete, boolean
    msg.complete = dataView.getUint8(readIndex) !== 0;
    readIndex += 1;

    // type, text
    {
      const stringLength = dataView.getUint8(readIndex);
      const encodedString = new Uint8Array(stringLength);

      readIndex += 1;

      for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
        encodedString[charIndex] = dataView.getUint8(readIndex + charIndex);
      }

      msg.type = decodeUTF8(encodedString);
      readIndex += stringLength;
    }

    // id, text
    {
      const stringLength = dataView.getUint8(readIndex);
      const encodedString = new Uint8Array(stringLength);

      readIndex += 1;

      for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
        encodedString[charIndex] = dataView.getUint8(readIndex + charIndex);
      }

      msg.id = decodeUTF8(encodedString);
      readIndex += stringLength;
    }

    // data, textbig
    {
      const stringLength = dataView.getUint16(readIndex, true);
      const encodedString = new Uint8Array(stringLength);

      readIndex += 2;

      for (let charIndex = 0; charIndex < stringLength; charIndex += 1) {
        encodedString[charIndex] = dataView.getUint8(readIndex + charIndex);
      }

      msg.data = decodeUTF8(encodedString);
      readIndex += stringLength;
    }

    return msg;
  },

  [packet.SYNC_ACK]: (buffer: ArrayBuffer): SyncAck => {
    const msg: SyncAck = { c: 205 };
    const dataView = new DataView(buffer);

    let readIndex = 1;

    // sequence, uint32
    msg.sequence = dataView.getUint32(readIndex, true);
    readIndex += 4;

    // result, uint8
    msg.result = dataView.getUint8(readIndex);
    readIndex += 1;

    return msg;
  },

  [packet.LOCALPING]: (buffer: ArrayBuffer): Localping => {
    const msg: Localping = { c: 255 };
    const dataView = new DataView(buffer);

    let readIndex = 1;

    // auth, uint32
    msg.auth = dataView.getUint32(readIndex, true);
    readIndex += 4;

    return msg;
  },
};
