class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this.numberOfStudents = numberOfStudents;
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
    if (typeof num !== 'number') {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    } else {
      this._numberOfStudents = num;
    }
  }

/*  set numberOfStudents(num) {
    if (isNaN(num)) {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    } else {
      this._numberOfStudents = num;
    }
  }*/

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const teacherIndex = Math.floor(substituteTeachers.length * Math.random());
    return substituteTeachers[teacherIndex];
  }
}

class Primary extends School {
  constructor (name, numberOfStudents, pickUpPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
  }

  get pickUpPolicy() {
    return this._pickUpPolicy;
  }
}

class Middle extends School {
  constructor (name, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
  }
}

class High extends School {
  constructor (name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
    console.log(this._sportsTeams);

  }
}

//-------------------------------------------------

const stateRoad = new Primary('State Road', true, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

stateRoad.quickFacts();

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const central = new High('Central High', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(central.sportsTeams);
