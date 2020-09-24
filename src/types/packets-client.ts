import { ProtocolPacket } from '../packets';

/**
 * Login request.
 * First request after connection open.
 */
export interface Login extends ProtocolPacket {
  /**
   * Protocol major version.
   */
  protocol?: number;

  /**
   * Desired player name.
   */
  name?: string;

  /**
   * User session.
   */
  session?: string;

  /**
   * Half-width screen value.
   * Game map units.
   */
  horizonX?: number;

  /**
   * Half-height screen value.
   * Game map units.
   */
  horizonY?: number;

  /**
   * Desired country flag.
   */
  flag?: string;
}

/**
 * Request from backup connection to associate with the player.
 */
export interface Backup extends ProtocolPacket {
  /**
   * Token from `Login` response.
   */
  token?: string;
}

/**
 * Request new viewport size.
 */
export interface Horizon extends ProtocolPacket {
  /**
   * Half-width screen value.
   * Game map units.
   */
  horizonX?: number;

  /**
   * Half-height screen value.
   * Game map units.
   */
  horizonY?: number;
}

/**
 * Ack.
 * Look for an explanation on HN.
 */
export interface Ack extends ProtocolPacket {}

/**
 * Response to `Ping` request.
 */
export interface Pong extends ProtocolPacket {
  /**
   * Response validation token.
   */
  num?: number;
}

/**
 * Update key state.
 */
export interface Key extends ProtocolPacket {
  /**
   * Key press/release increasing id.
   */
  seq?: number;

  /**
   * Key code.
   */
  key?: number;

  /**
   * Press state.
   * true — pressed.
   */
  state?: boolean;
}

/**
 * Send command.
 */
export interface Command extends ProtocolPacket {
  /**
   * Command name.
   */
  com?: string;

  /**
   * Command arguments.
   */
  data?: string;
}

/**
 * Request `ScoreDetailed`, `ScoreDetailedCtf` or `ScoreDetailedBtr` response.
 */
export interface Scoredetailed extends ProtocolPacket {}

/**
 * Send message in the public chat.
 */
export interface Chat extends ProtocolPacket {
  /**
   * Message content.
   */
  text?: string;
}

/**
 * Send private message to player.
 */
export interface Whisper extends ProtocolPacket {
  /**
   * Recipient ID.
   */
  id?: number;

  /**
   * Message content.
   */
  text?: string;
}

/**
 * Send message in the say chat.
 */
export interface Say extends ProtocolPacket {
  /**
   * Message content.
   */
  text?: string;
}

/**
 * Send message in the team chat.
 */
export interface Teamchat extends ProtocolPacket {
  /**
   * Message content.
   */
  text?: string;
}

/**
 * Vote to mute player.
 */
export interface Votemute extends ProtocolPacket {
  /**
   * Player ID.
   */
  id?: number;
}

/**
 * Start a sync connection.
 */
export interface SyncStart extends ProtocolPacket {}

/**
 * Authenticate a sync connection, by responding to server challenge.
 */
export interface SyncAuth extends ProtocolPacket {
  /**
   * Token containing signed challenge.
   */
  response?: string;
}

/**
 * Initialize a sync connection.
 */
export interface SyncInit extends ProtocolPacket {
  /**
   * Next sequence number to be used by server.
   */
  sequence?: number;

  /**
   * Current time at sync service.
   */
  timestamp?: number;

  /**
   * Server identity (region-room).
   */
  serverId?: string;

  /**
   * Publc websocket endpoint (wss://host/path) of server.
   */
  wsEndpoint?: string;
}

/**
 * Object data update from sync service to game server.
 */
export interface SyncUpdate extends ProtocolPacket {
  /**
   * Completely replace object?
   */
  complete?: boolean;

  /**
   * Object type.
   */
  type?: string;

  /**
   * Object id.
   */
  id?: string;

  /**
   * Object data, as JSON.
   */
  data?: string;
}

/**
 * Acknowledgement of an object data update from the game server.
 */
export interface SyncAck extends ProtocolPacket {
  /**
   * Sequence number of the update.
   */
  sequence?: number;

  /**
   * Result of update. Zero: updated without error. Non-zero: error code.
   */
  result?: number;
}

/**
 * Currently not used.
 */
export interface Localping extends ProtocolPacket {
  auth?: number;
}
