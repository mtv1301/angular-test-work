export class User {
  id: number;
  name: string;
  age: number;
  isBlocked: boolean;


  constructor(id: number, age: number, name: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.isBlocked = false;
  }
}
