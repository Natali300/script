// let user = {
//     name: "John",
//     age: 30,
//     sayHi: function(){
//         console.log("Привет меня зовут " + this.name);
//     }
// };
// user.sayHi();

// class User{  //класс
//     constructor(name,age){//конструктор
//         this.name = name;//свойство объекта
//         this.age = age;//свойство объекта
//     }
//     sayHi(){  //метод класса (их может быть много)
//         console.log("Привет меня зовут " + this.name);
//     }
// }
// let user1 = new User("John, 30");//создаем объект 
// let user2 = new User("Ann, 35");
// user1.sayHi();
// user2.sayHi();


// class Cat{
//     constructor(name){
//          this.name = name;
//     }
//    meow(){
//     console.log(this.name + "  говорит : Мяу!");
//    }
// }
// const cat1 = new Cat("Мурка");
// cat1.meow();

// class Rectangl{
//     constructor(width, heigth){
//         this.width = width;
//         this.heigth = heigth;
//     }
//     getArea(){
//         return this.width * this.heigth;
//     }
// }
// let rect = new Rectangl(30, 20);
// console.log("площадь прямоугольника = ", rect.getArea());


// class SiteUser{
//     constructor(userName){
//         this.userName = userName;
//         this.loggedIn = false;//по умолчанию (флажок)
//     }
//     login(){
//         this.loggedIn = true;
//         console.log(`${this.userName} вошел в систему`);
//     }
//     logout(){
//         this.loggedIn = false;
//         console.log(`${this.userName} вышел из системы`);
//     }
//     status(){
//         if(this.loggedIn){
//             console.log(`${this.userName} сейчас в системе`);
//         }
//         else{
//             console.log(`${this.userName} вышел из системы`);
//         }
//     }
// }
// let userA = new SiteUser("John");
// let userB = new SiteUser("Ann");
// userA.status();
// userB.status();
// userA.login();
// userA.status();
// userA.logout();
// userA.status();

// class Person{
//     constructor(name, age){
//         this.name = name;
//         let _age = age;//приватная переменная - вызвать и перезаписать нельзя
//         this.sayHi = function(){
//             console.log(`Привет меня зовут ${this.name} и мне ${_age} лет/года`);
//         }
//     }
// }
// const p1 = new Person("Jhon ", 30);
// p1.sayHi();



// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         console.log(`${this.name} издает звук.`);
//     }
// }
// class Dog extends Animal{
// speak(){
//     console.log(`${this.name} лает.`);
// }
// }
// class Cat extends Animal{
//     speak(){
//         console.log(`${this.name} мяукает.`);
//     }
//     }
// const dog = new Dog("Шарик");
// dog.speak();
// const cat = new Cat("Мурка");
// cat.speak();
// let cow = new Animal("Зорька");
// cow.speak();

// class Transport{
//     mowe(){
//         console.log("Транспорт движется");
//     }
// }
// class Car extends Transport {
//     mowe(){
//         console.log("машина едет по дороге");
//     }
// }
// class Bicycle extends Transport {
//     mowe(){
//         console.log("велосипед едет по дорожке");
//     }
// }
// const transports = [new Car(),new Bicycle()];
// for(const t of transports){
//     t.mowe();
// }


//                                              ООП 2

