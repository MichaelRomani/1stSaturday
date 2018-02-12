const Students = {
  idIncrementor: 3,
  students: [
    {
      firstName: 'Ada',
      lastName: 'Lovelace',
      id: 1,
    },
    {
      firstName: 'Grace',
      lastName: 'Hopper',
      id: 2
    },
    {
      firstName: 'Jean',
      lastName: 'Bartik',
      id: 3
    }
  ],
  findAll: function() {
    return this.students;
  },
  create: function(student) {
    student.id = ++this.idIncrementor;
    this.students.push(student);
    return this.students;
  },
  destroy: function(id) {
    if (this.students.find(student => student.id === +id)) {
      return this.students.filter(student => student.id !== +id);
    }
    return undefined;
  },
  findById: function(id) {
    return this.students.find(student => student.id === +id);
  },
  update: function(studentUpdate, id) {
    if (this.students.find(student => student.id === +id)) {
      this.students[+id - 1] = Object.assign({}, this.students[+id - 1], studentUpdate);
      return this.students;
    }
    return undefined;
  }
};

module.exports = Students;
