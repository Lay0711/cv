function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }
    this.getFullName = function () {
        return this.firstName +' ' + this.lastName;
    }
}
const Person1 = new Person('John', 'Doe','4-3-1980');
const Person2 = new Person('Mary', 'Doe','5-7-1979');

console.log(Person2);