'use strict'

//#region Intro

// let a = 45;
// function f() {
//     console.log('🟢', a);
// }
// f();




// const val = 45;

// function f1() {

//     f2();

//     function f2() {

//     }

//     f2();
// }

// f1();




// function creator() {
//     let count = 0;

//     return function() {
//         return count++;
//     }
// }

// const a = creator();
// const b = creator();

// console.log('🟢', a());
// console.log('🟢', a());
// console.log('🟢', a());

// console.log('🟢', b());
// console.log('🟢', b());
// console.log('🟢', b());

//#endregion


//#region Лексическое окружение

// let a;
// a = 10;

// let b = 12;

// const f1 = function() {
//     let a;
//     a = 100;
//     let b = 120;

//     const f1 = function() {
//         console.log('🟢', a);
//     }

//     const f2 = () => console.log('🟢', b);

//     f1();

//     function f0() {
//         let c = 100;
//         console.log('🟢', 'c', c);
//         console.log('🟢', 'b', b);
//         console.log('🟢', 'x', x);
//     }
// }

// const f2 = () => console.log('🟢', 'test');

// f1();


// function f0() {
//     let c = 10;
//     console.log('🟢', c);
//     console.log('🟢', b);
//     console.log('🟢', x);
// }

// f0();





// function exec() {
//     let a = 23;

//     function creator() {
//         let count = 0;

//         const temp = function() {
//             return ++count;
//         };

//         return temp;
//     }

//     const res = creator();
//     console.log('🟢', res());
//     console.log('🟢', res());
//     console.log('🟢', res());
// }

// exec();






// function creator() {
//     let count = 0;

//     const temp = function() {
//         return ++count;
//     };

//     return temp;
// }

// console.dir(creator);

// const a = creator();
// const b = creator();

// console.log('🟢', a());
// console.log('🟢', a());

// console.log('🟢', b());
// console.log('🟢', b());






// ==== TASK 1

// let email = 'vasia@mail.com';

// function render() {
//     console.log('🟢', `email: ${email}`);
// }

// email = 'petya@mail.com';

// render();

// email = 'dima@mail.com';



// ==== TASK 2
// function createLogger() {
//     let path = '1.log';

//     return function() {
//         console.log('🟢', `log path: ${path}`);
//     }
// }

// let path = '2.log';

// let logger = createLogger();

// logger();




// ==== TASK 3

// function Counter() {
//     // this = {}

//     let count = 0;

//     this.count = 10;

//     this.up = function() {
//         this.count = 15;
//         return ++count;
//     }

//     this.down = function() {
//         return --count;
//     }

//     // return this;
// }

// let counter = new Counter();

// console.log('🟢', counter.up());
// console.log('🟢', counter.up());
// console.log('🟢', counter.down());

// console.log('🟢', counter);




// ==== TASK 4

// let name = 'Vasia';

// if (true) {
//     let role = 'admin';

//     function render() {
//         console.log('🟢', `name: ${name} role: ${role}`);
//     }

//     render();
// }

// render();



// ==== TASK 5

// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// const sum = a => b => a + b;


// console.log('🟢', sum(3)(5));




// ==== TASK 6

// const arr = [3, 6, 2, 6, 9, 8];

// function between(from, to) {
//     return function(v) {
//         return v >= from && v <= to;
//     }
// }

// console.log('🟢', arr.filter(v => v % 2 === 0));

// console.log('🟢', arr.filter(between(2, 5)));
// console.log('🟢', arr.filter(between(5, 9)));




// ==== TASK 7

// const users = [
//     {id: 101, name: 'vasia', age: 23},
//     {id: 102, name: 'petya', age: 15},
//     {id: 107, name: 'dima', age: 43},
//     {id: 100, name: 'afrikand', age: 20},
// ];

// users.sort((a, b) => b.age - a.age);



// function by(field) {
//     return function(a, b) {
//         return a[field] > b[field] ? 1 : -1;
//     }
// }

// users.sort(by('name'));
// users.sort(by('age'));



// function by(field, dir = 'asc') {
//     return function(a, b) {
//         if (dir === 'asc')
//             return a[field] > b[field] ? 1 : -1;
//         else
//             return a[field] > b[field] ? -1 : 1;
//     }
// }

// //users.sort(by('name'));
// users.sort(by('age', 'desc'));

// console.log('🟢', users);


//#endregion


//#region var

// --- 1. у var функциональная область видимости / let, const - блочная

// function f1() {
//     if (true) {
//         var x = 10;
//     }
    
//     console.log('🟢', x);
// }

// f1();


// function f2() {
//     if (true) {
//         let y = 20;
//         const z = 30;
//     }
    
//     console.log('🟢', y, z);
// }

// f2();


// ----- 2. hoisting

// console.log('🟢', a);
// var a = 5;

// console.log('🟢', a);
// let a = 5;


// ----- 3. Повторное объявление

// var a = 10;
// var a = 20;
// console.log('🟢', a);

// let a = 10;
// let a = 20;
// console.log('🟢', a);


// ----- 4. var в ГОВ становится св-вом глобального объекта
// var a = 101;
// let b = 202;

// console.log('🟢', window.a);
// console.log('🟢', window.b);

//#endregion


//#region Глобальный объект

// console.log('🟢', globalThis);

// alert('test');

// window.alert('test');


// console.log('🟢', this);


// function f() {}

// console.log('🟢', f === window.f);


// const f = () => console.log('🟢', this);
// f();

//#endregion


//#region Functions as object

// function a(val) {
//     console.log('🟢', 'test');
// }

// function b() {
//     console.log('🟢', 'test');
// }

// function c(predicate = function() {}) {
//     console.log('🟢', predicate.name);
// }

// function d(a, b, ...args) {}

// console.dir(a);
// console.dir(b);
// c();
// console.dir(d);




// function maker() {
//     function counter() {
//         return ++counter.count;
//     }

//     counter.count = 0;

//     return counter
// }

// const a = maker();

// console.log('🟢', a());
// console.log('🟢', a());
// console.log('🟢', a());

// console.dir(a);




// ------------ NFE (Named Function Expression) --------------

// let f = function test() {
//     //
//     test();
// }

// test();
// f();



// ----------- new Function() -----------------

// const a = new Function('a', 'b', 'return a + b');
// console.dir(a);
// console.log('🟢', a(3, 4));

//#region 


//#region setTimeout / setInterval

// const res = setTimeout(() => console.log('🟢', 'test'), 3000);
// console.log('🟢', res);


// function render(message) {
//     console.log('🟢', message);
// }

// setTimeout(render, 2000, 'Vasia');



// function f() {
//     console.log('🟢', this);
// }

// setTimeout(f, 1000);




// setTimeout(() => console.log('🟢', 'test1'), 0);
// setTimeout(() => console.log('🟢', 'test2'), 0);
// setTimeout(() => console.log('🟢', 'test3'), 0);
// setTimeout(() => console.log('🟢', 'test4'), 0);
// setTimeout(() => console.log('🟢', 'test5'), 0);

// console.log('🟢', 'aaa1');
// console.log('🟢', 'aaa2');
// console.log('🟢', 'aaa3');
// console.log('🟢', 'aaa4');
// console.log('🟢', 'aaa5');




// let timerId = setTimeout(() => console.log('🟢', 'test'), 3000);
// setTimeout(() => clearTimeout(timerId), 1000);



// let count = 0;
// const intervalId = setInterval(() => console.log('🟢', ++count), 300);
// setTimeout(() => clearInterval(intervalId), 3000);



// let delay = 3000;

// let timerId = setTimeout(function req() {
//     // fetch to server

//     // if (error)
//         // delay += 500;

//     console.log('🟢', 'success');

//     timerId = setTimeout(req, delay);


// }, delay);


//#endregion


//#region decorators

// function calc(a) {
//     console.log('🟢', `calc() with ${a}`);

//     return a * 2;
// }

// function cacheDecorator(fn) {
//     const cache = new Map();

//     return function(val) {
//         if (cache.has(val)) {
//             console.log('🟢', `from cache: ${cache.get(val)}`);
//             return cache.get(val);
//         }

//         let result = fn(val);

//         cache.set(val, result);

//         return result;
//     }
// }

// calc(2);
// calc = cacheDecorator(calc);
// calc(3);
// calc(4);
// calc(3);
// calc(4);







// const user = {
//     getFactor() {
//         return 10;
//     },
//     calc(val) {
//         console.log('🟢', `calc() with ${val}`);
//         return val * this.getFactor();
//     }
// }

// function cacheDecorator(fn) {
//     const cache = new Map();

//     return function(val) {
//         console.log('🟢', this);

//         if (cache.has(val)) {
//             console.log('🟢', `from cache: ${cache.get(val)}`);
//             return cache.get(val);
//         }

//         // let result = fn(val);
//         let result = fn.call(this, val);            // <------------

//         cache.set(val, result);

//         return result;
//     }
// }


// // console.log('🟢', user.calc(3));

// user.calc = cacheDecorator(user.calc);

// console.log('🟢', user.calc(3));
// console.log('🟢', user.calc(4));
// console.log('🟢', user.calc(3));





// function f() {
//     console.log('🟢', this.val);
// }

// // const user = {
// //     val: 10,
// // };
// // user.f = f;
// // user.f();

// const a = {val: 10};
// const b = {val: 20};

// f.call(a);
// f.call(b);








// const user = {
//     getFactor() {
//         return 10;
//     },
//     calc(a, b) {
//         console.log('🟢', `calc() with ${a}, ${b}`);
//         return a * this.getFactor() + b;
//     }
// }

// function cacheDecorator(fn, hashFn) {
//     const cache = new Map();

//     return function() {
//         let key = hashFn(arguments);
//         console.log('🟢', `key = ${key}`);

//         if (cache.has(key)) {
//             console.log('🟢', `from cache`);
//             return cache.get(key);
//         }

//         // let result = fn(val);
//         // let result = fn.call(this, val);             // <------------
        
//         // let result = fn.call(this, ...arguments);
//         let result = fn.apply(this, arguments);         // <------------

//         cache.set(key, result);

//         return result;
//     }
// }


// user.calc = cacheDecorator(user.calc, args => {
//     let str = '';
//     for(let a of args)
//         str += a

//     return str;
// });

// user.calc = cacheDecorator(user.calc, args => [].join.call(args));

// console.log('🟢', user.calc(3, 1));
// console.log('🟢', user.calc(4, 1));
// console.log('🟢', user.calc(3, 1));


//#endregion


//#region logDecorator

function logDecorator(fn) {
    function wrapper(...args) {
        wrapper.logs.push(args);

        return fn.apply(this, args);
    }

    wrapper.logs = [];

    return wrapper;
}

function exec(a, b) {
    return a + b;
}

exec = logDecorator(exec);

console.log('🟢', exec(1, 3, 10, 12));
console.log('🟢', exec(6, 7));
console.log('🟢', exec(0, 0));

console.dir(exec);

//#endregion