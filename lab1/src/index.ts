import { Person } from "./bai1";
import { Account } from "./bai10";
import { Cat, Dog } from "./bai11";
import { Bird, Fish } from "./bai12";
import { Circle, Square } from "./bai13";
import { Developer, Manager } from "./bai14";
import { Library } from "./bai15";
import { Box } from "./bai16";
import { Logger } from "./bai17";
import { MathUtil } from "./bai18";
import { Cat2, Dog2 } from "./bai19";
import { Student } from "./bai2";
import { Bike2, Car2 } from "./bai20";
import { Repository } from "./bai21";
import { Stack } from "./bai22";
import { CardPayment, CashPayment } from "./bai23";
import { AirConditioner, Fan } from "./bai24";
import { Shape2 } from "./bai25";
import { Order } from "./bai26";
import { Teacher } from "./bai27";
import { Cat3, Dog3 } from "./bai28";
import { Car3, Robot } from "./bai29";
import { Car } from "./bai3";
import { School } from "./bai30";
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

//Bai 16
var numberValue = new Box<number>(123);
console.log(numberValue.getValue());

type emp = {name: String, age: number}
var objValue = new Box<emp>({name: "Khoa",age: 21});
console.log(objValue.getValue());

//bai 17
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Started.");
logger2.error("Something went wrong!");

//bai18
var a : number = 3;
var b : number = 5;
console.log(MathUtil.add(a, b));
console.log(MathUtil.subtract(a, b));
console.log(MathUtil.multiply(a, b));
console.log(MathUtil.divide(a, b));

//bai 19
var dog2 = new Dog2("Chihuahua");
var cat2 = new Cat2("axoti");

console.log(dog2.sound());
console.log(cat2.sound());

//bai 20
var car2 = new Car2("Vfact", 120);
var bike2 = new Bike2("BMX", 60);

car2.drive();
bike2.drive();

//bai 21
var numberRepo = new Repository<number>();
numberRepo.add(12);
numberRepo.add(21);
console.log(numberRepo.getAll());

var userRepo = new Repository<Person>();
userRepo.add(new Person("Jiikay", 21));
userRepo.add(new Person("Khoa", 12));
console.log(userRepo.getAll());

//bai 22
var stack = new Stack<number>();
stack.push(12);
stack.push(21);
stack.push(30);
console.log(stack.pop());
console.log(stack.size());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());

//bai 23
var cashPayment = new CashPayment();
var cardPayment = new CardPayment();

cashPayment.pay(121);
cardPayment.pay(12);

//bai 24
var fan = new Fan(3);
var airCoditioner = new AirConditioner(23);

fan.turnOn()
airCoditioner.turnOn();

//bai 25
Shape2.describe();

//bai 26
var oders = new Order();
oders.add(product1);
oders.add(product3);
oders.add(product2);

console.log("Tong tien: " + oders.totalPrice());    


//bai 27 
var teacher = new Teacher("Nguyen Van An", 32, "Toan");
teacher.introduce();

//bai 28
var cat3 = new Cat3("axoti");
var dog3 = new Dog3("Chihuhua");

cat3.speak();
dog3.speak();

//bai 29
var car3 = new Car3("Ford");
var robot = new Robot("Anna");

car3.move();
robot.move();

//bai30
var school = new School();

school.add(student);
school.add(teacher);
school.displayInfor();