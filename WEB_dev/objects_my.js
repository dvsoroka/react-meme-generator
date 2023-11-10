// Objects
// -----------

let name = 'Jack';
let gender = 'male';
let age = 20;

// ES5 syntax of object creation:

var personOld = {
    name: name,
    gender: gender,
    age: age,
    greet: function() {
        console.log(`Hello, my name is  ${this.name}`);
    }
}

console.log(personOld);

// ES6 syntax of object creation:
let person = {
    name,
    gender,
    age,
    greet() {
        console.log(`Hello, my name is  ${this.name}`);
    },
//    get password() {
//        return this.name + this.age;
//    }
}

person.name;
person['name'];
let firstName = 'name';
person[firstName];

console.log(person);
personOld.greet();
person.greet();





// В стандарте ES6 появилась возможность создавать динимические ключи для свойств объектов. Выглядит это следующим образом:
// person = {
//     [firstName]: 'Max'
// }
/* В данном случае person будет присвоен объект в котором свойство указано динамически. Ранее такая возможность была 
  реализована с помощью свойства defineProperty, но как видите теперь такой необходимости нету, а синтаксис и понимание 
  кода упростились. В ЖС помимо свойств и методов можно создавать специальные свойства, которые внутри объека работают 
  как методы, а снаружи работают как свойства. Эти свойства называются "get" и "set" или "геттеры" и "сеттеры"; 
  Давайте в наш объект "person" добавим  для примера свойство "get" для начала воспользуемся синтаксисом ES5:
*/

Object.defineProperty(person, 'password', {
     get: function() {
         return this.name + this.age + this.gender;
     }
 })
/* Напомню, что в defineProperty() первый параметр это объект которому задаются свойства, в нашем случае это "person",
  второй параметр - это название свойства - 'password', третий параметр - это объектБ в котором это свойство описывается.
 */

console.log(person);
// В объекте "person" обратимся к свойству "password" 
console.log(person.password);       // "Maxundefined"
/* Это  потому что на 45-й строке я переопределяю знасчение объекта, если мы их закомментируем, 
 то получим "Jack20" - у нас получился пароль, состоящий из имени пользователя и его возраста.
 Обратите внимание, что 'password' является методом, но несмотря на это круглые скобки мы не используем, а применяем
 синтаксис свойства объекта. То есть внутри объекта это метод, но снаружи это свойство. 
 Для того, чтобы переписать этот метод на синтаксис ES6 достаточно написать "get" затем имя свойства, а дальше всё как
 в простом методе. Выглядеть это будет следующим образом: мы переходим в наш объект "person" и добавляем "get"
*/
 person = {
    name,
    gender,
    age,
    greet() {
        console.log(`Hello, my name is  ${this.name}`);
    },
    get password() {
        return this.name + this.age;
    }
}

console.log(person.password);
//после этого person.password выдаст нам :
//'Jack20'

