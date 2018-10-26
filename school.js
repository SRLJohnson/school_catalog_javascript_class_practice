class School {
  constructor(name, level, numberOfStudents) {
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
    if (typeof num === 'number') {
      this._numberOfStudents = num;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  quickFacts() {
    console.log(`${name} educates ${numberOfStudents} students at the ${level} school level.`)
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const teacherIndex = Math.floor(substituteTeachers.length * Math.random());
    return substituteTeachers[teacherIndex];
  }
}

class Primary extends School {
  constructor (name, numberOfStudents, pickUpPolicy) {
    super(name, 'primary', numberOfStudents);
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
