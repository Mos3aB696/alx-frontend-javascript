import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getters and Setters
  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    if (typeof newFloors === 'number') {
      this._floors = newFloors;
    }
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
