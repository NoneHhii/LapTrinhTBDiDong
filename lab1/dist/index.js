"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai16_1 = require("./bai16");
const bai17_1 = require("./bai17");
const bai18_1 = require("./bai18");
const bai19_1 = require("./bai19");
const bai2_1 = require("./bai2");
const bai20_1 = require("./bai20");
const bai21_1 = require("./bai21");
const bai22_1 = require("./bai22");
const bai23_1 = require("./bai23");
const bai24_1 = require("./bai24");
const bai25_1 = require("./bai25");
const bai26_1 = require("./bai26");
const bai27_1 = require("./bai27");
const bai28_1 = require("./bai28");
const bai29_1 = require("./bai29");
const bai3_1 = require("./bai3");
const bai30_1 = require("./bai30");
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
//Bai 16
var numberValue = new bai16_1.Box(123);
console.log(numberValue.getValue());
var objValue = new bai16_1.Box({ name: "Khoa", age: 21 });
console.log(objValue.getValue());
//bai 17
const logger1 = bai17_1.Logger.getInstance();
const logger2 = bai17_1.Logger.getInstance();
logger1.log("Started.");
logger2.error("Something went wrong!");
//bai18
var a = 3;
var b = 5;
console.log(bai18_1.MathUtil.add(a, b));
console.log(bai18_1.MathUtil.subtract(a, b));
console.log(bai18_1.MathUtil.multiply(a, b));
console.log(bai18_1.MathUtil.divide(a, b));
//bai 19
var dog2 = new bai19_1.Dog2("Chihuahua");
var cat2 = new bai19_1.Cat2("axoti");
console.log(dog2.sound());
console.log(cat2.sound());
//bai 20
var car2 = new bai20_1.Car2("Vfact", 120);
var bike2 = new bai20_1.Bike2("BMX", 60);
car2.drive();
bike2.drive();
//bai 21
var numberRepo = new bai21_1.Repository();
numberRepo.add(12);
numberRepo.add(21);
console.log(numberRepo.getAll());
var userRepo = new bai21_1.Repository();
userRepo.add(new bai1_1.Person("Jiikay", 21));
userRepo.add(new bai1_1.Person("Khoa", 12));
console.log(userRepo.getAll());
//bai 22
var stack = new bai22_1.Stack();
stack.push(12);
stack.push(21);
stack.push(30);
console.log(stack.pop());
console.log(stack.size());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
//bai 23
var cashPayment = new bai23_1.CashPayment();
var cardPayment = new bai23_1.CardPayment();
cashPayment.pay(121);
cardPayment.pay(12);
//bai 24
var fan = new bai24_1.Fan(3);
var airCoditioner = new bai24_1.AirConditioner(23);
fan.turnOn();
airCoditioner.turnOn();
//bai 25
bai25_1.Shape2.describe();
//bai 26
var oders = new bai26_1.Order();
oders.add(product1);
oders.add(product3);
oders.add(product2);
console.log("Tong tien: " + oders.totalPrice());
//bai 27 
var teacher = new bai27_1.Teacher("Nguyen Van An", 32, "Toan");
teacher.introduce();
//bai 28
var cat3 = new bai28_1.Cat3("axoti");
var dog3 = new bai28_1.Dog3("Chihuhua");
cat3.speak();
dog3.speak();
//bai 29
var car3 = new bai29_1.Car3("Ford");
var robot = new bai29_1.Robot("Anna");
car3.move();
robot.move();
//bai30
var school = new bai30_1.School();
school.add(student);
school.add(teacher);
school.displayInfor();
