/* eslint-disable max-classes-per-file */
export class ProtocolError extends Error {
  public name: string;

  public message: string;

  constructor(message = '') {
    super(message);

    this.name = this.constructor.name;
    this.message = message;
  }
}

export class StringEncodeError extends ProtocolError {}

export class StringDecodeError extends ProtocolError {}
