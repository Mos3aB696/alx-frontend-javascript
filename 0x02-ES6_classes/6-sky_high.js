import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft, floors);
    this._sqft = sqft;
    this._floors = floors;
  }

  // Getters for each attribute
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
