export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and Setter For Code
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // Getter and Setter For Name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // Display Full Currency Info
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
