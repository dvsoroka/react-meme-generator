//  https://www.youtube.com/watch?v=BASquaxab_w
// В JavaScript ООП и наследование основаны на ПРОТОТИПАХ объектов  а не на классах (как в других языках)
// Однако снаружи всё это выглядит как наследование на классах, следует отмечить, что тип класса - это функция, таким образом
//  Class - это функция JavaScript которая создаёт объекты или конструктор.
// Класс - это шаблон, по которому создаются объекты, клас JavaScript определяет свойства объекта, то есть из чего он состоит 
// и как выглядит, а также методы, то есть то, как он будет функционировать. Для создания класса используется ключевое 
// слово "class",после которого указывается имя класса, далее внутри фигурных скобок идёт тело класса, в котором и будут 
// описываться свойства и методы класса. И первым методом класса идёт конструктор - это особый метод, который который создаётся в момент
// создания класса и сам создаёт свойство, то есть подготавливает объект для дальнейшего его использования. В классе может быть 
// только один конструктор. Внутри конструктора мы мы указываем свойства объекта. Свойства - это характеристики объекта, они будут 
// говорить о том как объект выглядит. Для того, чтобы создать свойство мы используем ключевое слово "this." после чего указываем
// имя свойства и присваиваем ему какое-либо значение
/*

 class Task {
     constructor() {
         this.title = 'Learn ES6';
     }
 }
 let task = new Task()

*/
// console.log(task);  // Task { title: 'Learn ES6' }
/*
 Конструктор может принимать аргументы, которые мы можем использовать внутри него при создании объекта.
 Выглядитэто следующим образом:

class Task {
    constructor(title = '', isCompleted = false) {
        this.title = title,
    }
}

let task = new Task('Learn ES6', false);
// Теперь мы можем создать ещё одну задачу:
let task2 = new Task('Learn ReactJS', true); 
 */

class Task {
    constructor(title = '', isCompleted = false) {
        this.title = title,
//      this.isCompleted = false
        this.isCompleted = isCompleted,
        Task.counter += 1
    }

    static getDefaultTitle() {      // Статические методы - это такие методы, которые принадлежат только классу; 
        return 'Title text';        // создание статического метода происходит внутри тела класса с помощью ключевого слова "static"
    }

    completed() {
        this.isCompleted = true;
    }
}

Task.counter = 0;  // Правильно создано статическое свойство класса - сразу после объявления класса ДО создания объектов.

let task = new Task('Learn ES6', false);
let task2 = new Task('Learn ReactJS', true); 

console.log(task);  // Task { title: 'Learn ES6', isCompleted: false }

//Task.counter = 0;   // Создание статического свойства класса произошло после создания экземпляров(объектов) данного класса - это не верно!
                      // Статические свойства должны быть указаны сразу после создания класса и до созжания экземпляров данного класся
task.completed();
console.log(task);  // Task { title: 'Learn ES6', isCompleted: false }

console.log(Task.counter);
 