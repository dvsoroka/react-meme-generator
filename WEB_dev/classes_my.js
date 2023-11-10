
class TaskNoArgs {
    constructor() {
        this.title = 'Learn ES6';
    }
}
let taskNoArgs = new TaskNoArgs();
console.log(taskNoArgs)

let taskNoArgs2 = new TaskNoArgs();
console.log(taskNoArgs2);
console.log(taskNoArgs == taskNoArgs2);     // false, хотя они идентичны, но это разные объекты

// Для того чтобы класс порождал различные по содержанию объекты, мы создаём конструктор, способный принимать аргументы:
class Task {
//  constructor(title = '', isCompleted = false) {
    constructor(title = Task.getDefaultTitle(), isCompleted = false) {
        this.title = title,
//      this.isCompleted = false
        this._isCompleted = isCompleted,
        Task.counter +=1 
    }

    static getDefaultTitle() {
        return 'Title text';
    }

    completed() {
        this._isCompleted = true;
    }

    get isCompleted() {
        return this._iscompleted === true ? 'task is completed' : 'task is not completed'
    }
}

Task.counter = 0;

let task = new Task('Learn ES6', false);
let task2 = new Task('Learn ReactJS', true);

console.log(task);      // Task { title: 'Learn ES6', isCompleted: false }
console.log(task2);     // Task { title: 'Learn ReactJS', isCompleted: false }  - мы получили свойство "isCompleted: false" несмотря на
                        // то, что внутрь при создани мы передали "true". Это произошло потому что внутрь конструктора вместо
                        // присвоения свойству  this.isCompleted = значению аргумента isCompleted мы написали "false":
                        // 
                        //      this.isCompleted = false 
                        //
                        // исправим это на 
                        // 
                        //      this.isCompleted = isCompleted
                        
console.log(task2);    // Task {title: 'Learn ReactJS', isCompleted: true}

/*  Теперь рассмотрим создание методов. Методы - это описание работы объекта, - то есть его возможности. 
  Добавим в класс "Task" метод Complete() с помощью которого мы будем указывать, что задача является выполненной. Добавлят метод мы будем  
  после конструктора и выгядит он следующим образом:
class Task {
    constructor(title = '', isCompleted = false) {
        this.title = title,
        this.isCompleted = isCompleted
    }

    completed() {
        this.isCompleted = true
    }
}

 */
// При этом, наша задача "task" ещё не выполнена, поэтому давайте выполним её:

console.log("Before invokinkg task.completed()",task);

task.completed();

console.log("After invokinkg task.completed()",task);      // Task {title: 'Learn ES6', isCompleted: true}   - сработало!

/* Помимо обычных свойств и методов внутри класса существуют статические свойства и методы - это такие свойства и 
 методы, которые принадлежат самому клаасу, а не объектам, созданным на его основе; в большинстве своём они используются 
 для хранения вспомогательной информации.
   Создание статического свойства будет выглядеть следующим образом:
*/

// Task.counter = 0;

/* Обращаю ваше внимание на то, сто статические свойства создаются таким образом, а не определяются внутри класса,
 так как в данном случае мы бы просто получили ошибку; теперь же у класса "Task" есть статическое свойство ".counter",
 которое обозначает количество задач. Давайте в конструкторе добавим взаимодействие с этим свойством:
    
constructor(title = '', isCompleted = false) {
        this.title = title,
        this.isCompleted = isCompleted,
        Task.counter +=1; 
    }

Однако Task.counter вместо 2 равно 0 - всё дело в том, что при создании скрипта нарушен порядок следования.
Для начала у нас задаётся класс и это верно; далее с помощью класса у нас создаются экземпляры объектов, после чего в классе
на 78-й строке задаётся статические свойства, то есть задание статических свойств происходит после создания экземпляров 
класса, а это неверно!
  Статические свойства должны быть указаны сразу после создания класса и до создания экземпляров класса. 
переместим выражение Task.counter = 0; с 78-й строки на 33-ю и теперь получим
 */

console.log(Task.counter);     // 2 - теперь всё работает корректно

/* Теперь перейдём к статическим методам, это такие методы, которые принадлежат только классу. А вот уже создание статического
метода происходит внутри класса с помощью ключевого слова "static" и выглядит слеждующим образом:

    static getDefaultTitle() {
        return 'Title text';
    }

Опять же статические методы мы будем добавлять после конструктора.
Теперь в конструкторе мы можем воспользоваться этим статическим методом:
вместо 
    constructor(title = '', isCompleted = false) {
запишем
    constructor(title = Task.getDefaultTitle(), isCompleted = false) {

и создадим новую задачу в которую не будем передавать заголовок и посмотрим результат в консоли
 */
    let task3 = new Task();
    console.log(task3);         //  Task {title: 'Title text', isCompleted: false}   - работает как надо

/**
 Помимо свойств и методов в классы можно добавлять "геттеры" и "сеттеры" - это специальные свойства, которые 
 внутри объекта работают как методы, а снаружи работают как свойства. Их мы рассматривали в предыдущем уроке 
https://www.youtube.com/watch?v=Xxaw11ezP7E&list=PLNkWIWHIRwMGLJXugVvdK7i8UagGQNaXD&index=8

однако для примера давайте добавим свойство get в класс Task:

    constructor( ...
        this._isCompleted = isCompleted,
        ...

    get isCompleted() {
        return this._isCompleted === true ? 'task is completed' : 'task is not completed'
    }

мы создали метод, который будет возвращать строку в зависимости выполнена задача или нет;
обратите внимание на то, что свойство "isCompleted" определённое в конструкторе, мы переименовали, теперь оно 
начинается с нижнего подчеркивания "_isCompleted" это сделано для того чтобы избежать ошибки скрипта, все дело в том, что
название свойств "get" и  "set" не должны совпадать с названиями свойств внутри конструктора; объявляя 
    get isCompleted() {}
мы перезаписываем свойство "_isCompleted", которое находится в конструкторе. Поэтому мы переименовали исходное
свойство, добавив к нему 

!!! по поводу того что название геттера и сеттера не должны совпадать с названием свойства в конструкторе, 
это было новое для меня, и понял наконец почему в таких случаях пишут (защищенное) свойство начиная с подчеркивания .
 */