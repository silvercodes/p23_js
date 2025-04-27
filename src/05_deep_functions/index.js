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

function Counter() {
    // this = {}

    let count = 0;

    this.count = 10;

    this.up = function() {
        this.count = 15;
        return ++count;
    }

    this.down = function() {
        return --count;
    }

    // return this;
}

let counter = new Counter();

console.log('🟢', counter.up());
console.log('🟢', counter.up());
console.log('🟢', counter.down());

console.log('🟢', counter);




//#endregion



