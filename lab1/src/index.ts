import { Person } from "./bai1";
import { Account } from "./bai10";
import { Cat, Dog } from "./bai11";
import { Bird, Fish } from "./bai12";
import { Circle, Square } from "./bai13";
import { Developer, Manager } from "./bai14";
import { Library } from "./bai15";
import { Student } from "./bai2";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Book } from "./bai6";
import { User } from "./bai7";
import { Product } from "./bai8";

//bai 1
var person = new Person("Khoa", 21);

console.log(person);

//bai2
var student = new Student("TKhoa", 21, 12);

student.displayInfor();

//bai3
var car = new Car("Ford", "new version", 3);

car.showInforCar();

//bai4
var rectangle = new Rectangle(5, 4);

console.log(rectangle.area());
console.log(rectangle.perimeter());

//bai5
var account = new BankAccount(200);

console.log("Tien hien co: " + account.balance);
account.deposit(300);
console.log("Tien con lai sau khi nap: " + account.balance);
account.withdraw(100)
console.log("Tien con lai sau khi rut: " + account.balance);

//bai6
var book = new Book("Ha do", "Nguyen Nhat Anh", 8);


//bai7
var user = new User("Khoa");
console.log(user.getter());
user.setter("TKhoa");
console.log(user.getter());


//bai8
var product1 = new Product("Ao", 101);
var product2 = new Product("Quan", 100);
var product3 = new Product("Giay", 102);

let arr = [product1, product2, product3]

const filter = arr.filter((x) => x.price > 100);
console.log(filter)

//bai 10
var accountBL = new Account(300, 1213);
console.log("balance: " + accountBL.getBalance());
accountBL.deposit(200);
console.log("balance: " + accountBL.getBalance());
if(accountBL.withdraw(800)) console.log("balance: " + accountBL.getBalance());
else console.log("So du khong du!");

//bai 11
var dog = new Dog("Chihuahua");
var cat = new Cat("exoti");
dog.sound();
cat.sound();

//bai 12
var bird = new Bird("Chim se");
var fish = new Fish("Ca map");

bird.fly();
fish.swim();

//bai 13
var square = new Square(4);
var circle = new Circle(6);

console.log("area square: " + square.area());
console.log("area circle: " + Math.floor(circle.area()));

//bai14
var manager = new Manager("Jiikayss", 3000, "LTTBDT");
var dev = new Developer("Tieu Linh", 2000, "Typescript");

manager.work();
manager.managerPj();
dev.work();
dev.code();

//Bai 15
var library = new Library(book, user);
library.showInfor();
library.addBook(new Book("Muon kiep nhan sinh", "Nguyen Phong", 9));
library.showInfor();

