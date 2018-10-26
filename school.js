class School {
  constructor(name) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(num) {
    this._numberOfStudents = num;
  }

  quickFacts() {}

  static pickSubstituteTeacher() {}
}

class Primary extends School {
  constructor (name) {
    super(name);
  }

  pickUpPolicy() {}
}

class Middle extends School {
  constructor (name) {
    super(name);
  }
}

class High extends School {
  constructor (name, sportsTeams) {
    super(name);
    this._sportsTeams = [];
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}
