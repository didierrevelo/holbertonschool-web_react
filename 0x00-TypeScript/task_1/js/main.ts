interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  /* eslint-disable @typescript-eslint/no-explicit-any*/
  [key: string]: any;
  /* eslint-enable @typescript-eslint/no-explicit-any*/
}

// const teacher1: Teacher = {
//   firstName: "John",
//   lastName: "Doe",
//   fullTimeEmployee: true,
//   yearsOfExperience: 5,
//   location: "New York",
//   contract: false,
// }

// const teacher2: Teacher = {
//   firstName: "Jane",
//   lastName: "Doe",
//   fullTimeEmployee: true,
//   yearsOfExperience: 5,
//   location: "New York",
//   contract: false,
// }

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  lastName: 'Doe',
  location: 'London',
  contract: false,
}

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

let nameTeacher: printTeacherFunction = printTeacher;

console.log(nameTeacher("Didier", "Revelo"));

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
