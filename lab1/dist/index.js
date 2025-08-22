"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
//bai 1
var person = new bai1_1.Person("Khoa", 21);
console.log(person);
//bai2
var student = new bai2_1.Student("TKhoa", 21, 12);
student.displayInfor();
//bai3
var car = new bai3_1.Car("Ford", "new version", 3);
car.showInforCar();
//bai4
var rectangle = new bai4_1.Rectangle(5, 4);
console.log(rectangle.area());
console.log(rectangle.perimeter());
//bai5
var account = new bai5_1.BankAccount(200);
console.log("Tien hien co: " + account.balance);
account.deposit(300);
console.log("Tien con lai sau khi nap: " + account.balance);
account.withdraw(100);
console.log("Tien con lai sau khi rut: " + account.balance);
//bai6
var book = new bai6_1.Book("Ha do", "Nguyen Nhat Anh", 8);
//bai7
var user = new bai7_1.User("Khoa");
console.log(user.getter());
user.setter("TKhoa");
console.log(user.getter());
//bai8
var product1 = new bai8_1.Product("Ao", 101);
var product2 = new bai8_1.Product("Quan", 100);
var product3 = new bai8_1.Product("Giay", 102);
let arr = [product1, product2, product3];
const filter = arr.filter((x) => x.price > 100);
console.log(filter);
//bai 10
var accountBL = new bai10_1.Account(300, 1213);
console.log("balance: " + accountBL.getBalance());
accountBL.deposit(200);
console.log("balance: " + accountBL.getBalance());
if (accountBL.withdraw(800))
    console.log("balance: " + accountBL.getBalance());
else
    console.log("So du khong du!");
//bai 11
var dog = new bai11_1.Dog("Chihuahua");
var cat = new bai11_1.Cat("exoti");
dog.sound();
cat.sound();
//bai 12
var bird = new bai12_1.Bird("Chim se");
var fish = new bai12_1.Fish("Ca map");
bird.fly();
fish.swim();
//bai 13
var square = new bai13_1.Square(4);
var circle = new bai13_1.Circle(6);
console.log("area square: " + square.area());
console.log("area circle: " + Math.floor(circle.area()));
//bai14
var manager = new bai14_1.Manager("Jiikayss", 3000, "LTTBDT");
var dev = new bai14_1.Developer("Tieu Linh", 2000, "Typescript");
manager.work();
manager.managerPj();
dev.work();
dev.code();
//Bai 15
var library = new bai15_1.Library(book, user);
library.showInfor();
library.addBook(new bai6_1.Book("Muon kiep nhan sinh", "Nguyen Phong", 9));
library.showInfor();
