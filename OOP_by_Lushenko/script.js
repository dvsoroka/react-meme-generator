let a = {
    "text": 'Hello',
    "color": 'red',
    "bold": true,
    "show": function() {
      console.log(this.color)     // this. указывает конкретно на то свойство которое находится в конкретном объекте с которым мы работаем.
 //     console.log(this.fontsize)  //  a.show();     -->      // undefined
    },
//!  __proto__: c,  // Делать круговые (a -> b -> c -> a)  зависимости прототипов - это ошибка! 
};

// let b = {
//     "text": 'Hello',
//     "color": 'red',
//     "fontsize": '24px',
// }
//  Чтобы не дублировать код я могу просто "унаследоваться" от а:

let b = {
    __proto__: a,
    "fontsize": '24px'
}

// b = 5; 

// let c = {       // script.js:9 Uncaught ReferenceError: Cannot access 'c' before initialization
var c = {          //  при объявлении класса "c", нужно использовать "var", вместо "let" (чтобы он "всплывал", так как объявлен позже, чем на него ссылается строка "__proto__: c"). (https://www.youtube.com/watch?v=rWfZAeEnn2I  comment from @firstnofate2 года назад )
    "fontFamily": 'Verdana',
    __proto__: b,
}
console.log(c);
console.log(c.bold);

/** С помощью метода .hasOwnProperty() я могу отслеживать, принадлежит ли данное свойство данному объекту или кому-то из цепочки прототипов  */
console.log(c.hasOwnProperty("fontFamily"));  // true

console.log(c.hasOwnProperty("bold"));  // false


// console.log(a);
// console.log(b);
// b.text = 'one'
// console.log(b.text);
// console.log(a.text);

// b.color = 'green';
// b.show();           // 24px
// a.show();      
   