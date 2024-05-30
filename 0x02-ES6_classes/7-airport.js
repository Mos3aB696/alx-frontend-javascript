export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // toString
  toString() {
    return `[object ${this._code}]`;
  }
}
